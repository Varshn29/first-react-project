import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {

    const {productId} = useParams();

    const [productDetalis, setProductDetails] = useState();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(info => setProductDetails(info))
    }, []);

    return (
        <div>
            <img src={productDetalis?.image} width='200' height='250' />
            <p>{productDetalis?.title}</p>
            <p>{productDetalis?.description}</p>
        </div>
    );
}

export default ProductDetails;