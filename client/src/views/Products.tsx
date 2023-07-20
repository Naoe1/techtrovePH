import Aside from "../components/Aside"
import ProductTable from "../components/ProductTable"

const Products = () => {
    return (
        <div className="flex">
            <Aside />
            <div className="flex flex-col grow">
                <div className="flex h-16 bg-slate-900"></div>
                <ProductTable/>
            </div>
        </div>
    )
}

export default Products