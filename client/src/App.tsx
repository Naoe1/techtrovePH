import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from "./views/Products"
import Home from "./views/Home";
import Product from './views/Product';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/">
            <Route path=":category" element={<Products />} />
            <Route path=":category/:productId" element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
