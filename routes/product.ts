import express from "express";
import { supabase } from "../supabase";
import { PostgrestResponse, PostgrestError } from "@supabase/supabase-js";

const router = express.Router();

interface Category {
    category: string;
    slug: string;
}

router.get('/', async (req, res, next) => {
    try {
        const { data, error }: PostgrestResponse<Category> = await supabase
            .from('categories')
            .select('*');
        if (error) {
            throw error;
        }
        res.status(200).json({ success: true, result: data });
    } catch (error) {
        next(error);
    }
})


export default router;