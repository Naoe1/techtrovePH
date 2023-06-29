interface Product {
    full_name: string,
    uid: string,
    min_price: number
}
interface TableColumn {
    label: string;
    property: string;
}

interface TableBodyProps<T> {
    data: T[];
    columns: TableColumn[];
    isLoading?: boolean;
}

const TableBody = <T extends Product>({ data, columns, isLoading }: TableBodyProps<T>) => {
    if (isLoading) {
        return <tbody className="bg-slate-900">
            <tr className="sm:px-2"><td colSpan={6}>Loading ...</td></tr>
        </tbody>
    }
    return (
        <>
            <tbody className="bg-slate-900">
                {
                    data.map((product, index) => (
                        <tr className="sm:px-2" key={index}>
                            {columns.map((header, index) => {
                                if (header.property === 'full_name') {
                                    return (
                                        <td key={index}><div className="flex justify-center">
                                            <div className="text-slate-200 font-medium flex flex-col ps-4 text-sm xl:text-base justify-center sm:justify-center">
                                                <div>
                                                    {product.full_name}
                                                </div>
                                            </div>
                                        </div></td>
                                    )
                                }
                                if (header.property === 'min_price') {
                                    return (
                                        <td key={index}>
                                            <div className="text-xs text-center text-slate-200">
                                                {product['min_price'].toFixed(2)}
                                            </div>
                                        </td>
                                    )
                                }
                                return (
                                    <td key={index}>
                                        <div className="text-xs text-center text-slate-200">
                                            {product[header.property as keyof typeof product]}
                                        </div>
                                    </td>
                                )
                            }, [])}
                        </tr>))
                }
            </tbody>
        </>
    )
}
export default TableBody