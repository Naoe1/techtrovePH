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

router.get('/:category', async (req, res, next) => {
    const category = req.params.category;
    let columns = '*';
    if (category === "video_cards") columns = 'full_name,brand,name,uid,model,gpu_spec_ref,gpu_spec(*),boost_clock_mhz,min_price';
    else if (category === "processors") columns = 'full_name,socket,uid,cores,threads,base_clock_ghz,boost_clock_ghz,integrated_gpu,min_price';
    else if (category === "motherboards") columns = 'full_name,socket,formfactor,memory_capacity_gb,ram_slots,uid,min_price'
    else { next({ message: "Invalid category", statusCode: 404 }) }
    try {
        const { data, error } = await supabase
            .from(category)
            .select(columns)
            .order('min_price', { ascending: false, nullsFirst: false })
            .range(0, 20);
        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});


export default router;