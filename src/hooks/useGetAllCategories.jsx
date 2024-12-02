import { useEffect, useState } from "react";
import { getAllCategories } from "../services/productServices";

export const useGetAllCategories = () => {
    const [categories, setProducts] = useState([])

    useEffect(() => {
        getAllCategories()
        .then((res) => {
            setProducts(res.data)
        })
    }, [])
    return {categories}
}