import { Request, Response, NextFunction } from 'express';
import { supabase } from "../supabase";
import categoryColumns from '../utils/categoryColumn';

export default class searchController {
    public static async quickSearch(req: Request, res: Response, next: NextFunction) {
        const { category, term } = req.query;
        let columns = categoryColumns[category as keyof typeof categoryColumns];
        if (category === 'power_supply' || category === 'memory' || category === 'storage' || category === 'chassis') {
            const filter = req.query.term as string ?? '';
            const filterWords = filter.split(' ')
            const query = supabase
                .from(category)
                .select(columns, { count: 'exact' })

            filterWords.forEach(term => {
                query.ilike('full_name', `%${term}%`);
            });
            try {
                const { data, error } = await query
                    .order('min_price', { ascending: false, nullsFirst: false })
                    .range(0, 4)
                if (error) throw error;
                res.status(200).json({ result: data })
                return
            } catch (error) {
                next(error);
            }
        }
        try {
            const { data, error } = await supabase
                .rpc('search_product', { table_name: category as string, search_term: term as string })
            if (error) throw error;
            res.status(200).json({ success: true, result: data });
        }
        catch (e) {
            next(e)
        }
    };
}