import { useParams } from "react-router"
import { useGetProductsByCategory } from "../hooks/useGetProductsByCategory";
import { ItemListContainer, Layout } from "../index"

export const ProductsByCategory = () => {

    const { categoryName } = useParams();
    const { products } = useGetProductsByCategory(categoryName.replace(':', ""))
    console.log(products)

    return (
        <Layout>
            <ItemListContainer products={products}/>
        </Layout>
    )
}