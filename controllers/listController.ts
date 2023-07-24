import { Request, Response, NextFunction } from 'express';
import { supabase } from "../supabase";

const generateRandomAlphanumeric = (length: number): string => {
    const alphanumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charsLength = alphanumericChars.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsLength);
        result += alphanumericChars[randomIndex];
    }

    return result;
}

export default class listController {
    public static async getLinkID(req: Request, res: Response, next: NextFunction) {
        let linkId;
        let unique = false;
        let retryCount = 0;
        const maxRetry = 10;
        while (!unique && retryCount < maxRetry) {
            linkId = generateRandomAlphanumeric(7);
            try {
                const { count, error } = await supabase
                    .from('list')
                    .select('*', { count: 'exact' })
                    .eq('_id', linkId);

                if (error) throw error;
                if (count === 0) unique = true;
            } catch (error) {
                next(error);
                return;
            }
            retryCount++;
        }
        if (!unique) {
            const errorMessage = 'Failed to generate a unique linkId. Please try again later.';
            next({ message: errorMessage, statusCode: 500 });
            return
        }
        try {
            res.status(200).json({ success: true, result: linkId });
        } catch (error) {
            next(error);
        }
    };

    public static async saveList(req: Request, res: Response, next: NextFunction) {
        const listData = req.body;
        try {
            const { error } = await supabase
                .from('list')
                .upsert(listData, { onConflict: '_id' });
            if (error) throw error;
            res.status(200).json({ success: true });
        } catch (error) {
            console.log(error)
            next(error);
        }
    }


    public static async getList(req: Request, res: Response, next: NextFunction) {
        const linkId = req.params.linkId;
        try {
            const { data, error } = await supabase
                .from('list')
                .select('*')
                .eq('_id', linkId);
            if (data?.length === 0) {
                next({ message: 'No build found with ID' + linkId, statusCode: 404 });
                return;
            }
            if (error) throw error;
            res.status(200).json({ result: data[0] });
        } catch (error) {
            next(error);
        }
    }
}