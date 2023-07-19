import express, { Request, Response, NextFunction } from 'express';
import categoryColumns from '../utils/categoryColumn';
import { supabase } from "../supabase";
const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const { category, term } = req.query;
    let columns = categoryColumns[category as keyof typeof categoryColumns];
    try {
        const { data, error } = await supabase
            .rpc('search_product', { table_name: category as string, search_term: term as string})
        if (error) throw error;
        res.status(200).json({ success: true, result: data });
    }
    catch (e) {
        next(e)
    }
})


export default router;