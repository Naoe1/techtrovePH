import express from "express";
import { supabase } from "../supabase";
import { Category, VideoCard, Processor, Motherboard, Product } from "../utils/types";
import categoryColumns from "../utils/categoryColumn";
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const { data, error } = await supabase
            .from('categories')
            .select('*')
            .returns<Category[]>();
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
    let columns = categoryColumns[category as keyof typeof categoryColumns];
    if (!columns) {
        return next({ message: "Invalid category", statusCode: 404 });
    }
    try {
        const { data, error } = await supabase
            .from(category)
            .select(columns)
            .order('min_price', { ascending: false, nullsFirst: false })
            .range(0, 20)
            .returns<Motherboard[] | Processor[] | VideoCard[]>();
        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

router.get('/:category/:productId', async (req, res, next) => {
    const { category, productId } = req.params;
    try {
        let data: Product;
        const { data: productData, error: productError } = await supabase
            .from(category)
            .select('*')
            .eq('uid', productId)
        if (productError) throw productError;
        if (productData.length === 0) next({ message: "Product not found", statusCode: 404 })
        data = productData[0];
        const { data: vendorProductData, error: vendorProductError } = await supabase
            .from(`vendor_${category.slice(0, -1)}`)
            .select('*')
            .eq('component_id', data.full_name)
            .range(0, 10);
        if (vendorProductError) throw vendorProductError;
        data.vendors = vendorProductData;
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

export default router;