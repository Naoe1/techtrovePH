import { Request, Response, NextFunction } from 'express';
import { supabase } from "../supabase";

export default class lastUpdatedController {
    public static async getLastUpdated(req: Request, res: Response, next: NextFunction) {
        try {
            const { data, error } = await supabase
                .from('last_updated')
                .select('date_upd')
                .single()
            if (error) {
                res.status(200).json({ result: '-' })
            };
            res.status(200).json({ result: data })
            return
        } catch (error) {
            next(error);
        }
    };
}

