import { Database } from "./schema"
export type Category = Database["public"]["Tables"]["categories"]['Row']
export type Motherboard = Database["public"]["Tables"]["motherboards"]['Row']
export type Processor = Database["public"]["Tables"]["processors"]['Row']
export type VideoCard = Database["public"]["Tables"]["video_cards"]['Row']

export interface Vendor {
    vendor_id: string;
    title: string;
    link: string;
    price: number;
}

export interface Product {
    full_name: string;
    min_price: number;
    uid: string;
    vendors: Vendor[];
}
