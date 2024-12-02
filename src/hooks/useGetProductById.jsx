import { useEffect, useState } from "react";
import { getProductById } from "../services/productServices";

export const useGetProductById = (id) => {
    const [product, setProductId] = useState({})

    useEffect(() => {
        getProductById(id)
        .then((res) => {
            console.log(res.data)
            setProductId(res.data)
        })
    }, [])
    return {product}
}