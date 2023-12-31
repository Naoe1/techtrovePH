import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from "./views/Products"
import Home from "./views/Home";
import Product from './views/Product';
import Navbar from './components/Navbar';
import List from './views/List';
import Build from './views/Build';
import NotFound from './components/NotFound';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/products/:category/:productId" element={<Product />} />
          <Route path="/list" element={<List />} />
          <Route path="list/:listId" element={<Build />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
