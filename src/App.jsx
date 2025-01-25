import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Collections from "./pages/Collections"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Orders from "./pages/Orders"
import PlaceOrden from "./pages/PlaceOrden"
import Product from "./pages/Product"
import { Footer } from "./components/Footer"
import SearchBar from "./components/SearchBar"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/collection" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeorden" element={<PlaceOrden />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

