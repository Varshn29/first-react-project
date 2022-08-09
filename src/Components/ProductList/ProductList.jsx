import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import './ProductList.css'

const ProductList = () => {

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProductData(data))
    }, [])



    const formatProductData = (test) => {

        return test.map((item, index) => {
            return <Product key={index} {...item} />
       
        })
    }

    return (
        <div className="productList-wrapper">
            {productData && formatProductData(productData)}
        </div>

    )
}

export default ProductList;