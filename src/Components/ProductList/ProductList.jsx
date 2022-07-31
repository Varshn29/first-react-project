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

        return test.map((item, index, array) => {
            return <Product key={index} imageSrc={item.image} productTitle={item.title} productDescription={item.category} productPrice={item.price} />
       
        })
    }

    return (
        <div className="productList-wrapper">
            {productData && formatProductData(productData)}
        </div>

    )
}

export default ProductList;