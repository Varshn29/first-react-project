import React from "react";

const Product = ({imageSrc, productTitle, productDescription, productPrice}) => {

    return (
        <div>
            <img src={imageSrc} width="200" height="250" />
            <p className="product-title">{productTitle}</p>
            <p>{productDescription}</p>
            <p className="product-price">$ {productPrice}</p>
        </div>
    )
}

export default Product;