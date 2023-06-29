import {getTableHeaders, isCategory} from "../utils/tableHeaders";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
    full_name: string,
    uid: string,
    min_price: number
}

const ProductTable = () => {
    const [data, setData] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const { category } = useParams();
    const [error, setError] = useState<{ statusCode: number; error: string } | null>(null);
    const [tableHeaders, setTableHeaders] = useState<{ label: string; property: string; }[]>([])

    useEffect(() => {
        if (category) {
            if (isCategory(category)) {
                const columns = getTableHeaders(category);
                setTableHeaders(columns)
            }
        }
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/products/${category}`);
                if (!response.ok) {
                    const errorData = await response.json();
                    setError(errorData)
                    throw new Error("Something went wrong!: " + response.status);
                }
                const responseData: Product[] = await response.json();
                setIsLoading(false);
                setData(responseData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData()
    }, [category])

    if (error) return <div>Something went wrong ... {error.error}</div>;

    return (
        <div className="flex flex-col min-h-[1000px] bg-slate-900">
            <table className="table-auto lg:mx-[6%] lg:my-[3%] border border-separate rounded-t-xl m-0 bg-slate-800" cellSpacing={0}>
                <TableHeader columns={tableHeaders} category={category ?? ''}/>
                <TableBody data={data} columns={tableHeaders} isLoading={isLoading} />
            </table>
        </div>
    );
};

export default ProductTable;