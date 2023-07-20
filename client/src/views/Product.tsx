import Aside from "../components/Aside"
import DrawerComponent from "../components/Drawer"
import Product from "../components/ProductInfo"

const Products = () => {
    return (
        <div className="flex">
            <Aside />
            <DrawerComponent/>
            <Product/>
        </div>
    )
}

export default Products