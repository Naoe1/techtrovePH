interface TableColumn {
    label: string;
    property: string;
}

interface TableBodyProps<T> {
    data: T[];
    columns: TableColumn[];
}

const TableBody = <T extends { productLink: string, productName: string }>({ data, columns }: TableBodyProps<T>) => {
    return (
        <>
            <tbody className="bg-slate-900">
                {
                    data.map((product, index) => (
                        <tr className="sm:px-2" key={index}>
                            {columns.map((header, index) => {
                                if (index === 0) {
                                    return (
                                        <td key={index}><div className="flex justify-center">
                                            <div className="text-slate-200 font-bold flex flex-col ps-4 text-sm xl:text-base justify-center sm:justify-center">
                                                <div>
                                                    {product.productName}
                                                </div>
                                            </div>
                                        </div></td>
                                    )
                                }
                                return (
                                    <td key={index}>
                                        <div className="text-xs text-center text-slate-50">
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