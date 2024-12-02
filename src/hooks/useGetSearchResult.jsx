import { useEffect, useState } from "react";
import { getSearchResult } from "../services/productServices";

export const useGetSearchResult = (value) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getSearchResult(value)
        .then((res) => {
            setProducts(res.data.products)
        })
    }, [value])
    return {products}
}