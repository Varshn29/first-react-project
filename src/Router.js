import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Contact from "./Contact";
import Home from "./Home";

function Router() {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cart' element={<Contact />} />
                <Route path='/sign-up' element={<Contact />} />
                <Route path='/product/:productId' element={<ProductDetails />} />
            </Routes>
        </div>
    )
}

export default Router;