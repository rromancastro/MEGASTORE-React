import axios from "axios";

export async function getAllProducts(limit = 30) {
    return await axios.get(`https://dummyjson.com/products?limit=${limit}`);
}

export async function getProductsByCategory(category) {
    return await axios.get(`https://dummyjson.com/products/category/${category}`);
}