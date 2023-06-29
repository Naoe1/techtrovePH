import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
const tableHeaders = [
    { label: 'Name', property: 'name' },
    { label: 'Socket', className: 'hidden sm:table-cell', property: 'socket' },
    { label: 'Clock rate', className: 'hidden md:table-cell', property: 'baseClock' },
    { label: 'Integrated Graphics', className: 'hidden sm:table-cell', property: 'integratedGraphics' },
    { label: 'TDP', className: 'hidden md:table-cell', property: 'tdp' },
    { label: 'Price', property: 'price' },
];

const productsData = [{
    productName: 'AMD Ryzen 6 5600X',
    socket: 'LGA1200',
    baseClock: '3.7GHz',
    boostClock: '5.7GHz',
    integratedGraphics: 'Intel UHD Graphics',
    tdp: '88W',
    price: 1990,
}]
const ProductTable = () => {
    return (
        <div className="flex flex-col min-h-[1000px] bg-slate-900">
            <table className="table-auto lg:mx-[6%] lg:my-[3%] border border-separate rounded-t-xl m-0 bg-slate-800" cellSpacing={0}>
                <TableHeader />
                <TableBody data={productsData} columns={tableHeaders} />
            </table>
        </div>
    );
};

export default ProductTable;