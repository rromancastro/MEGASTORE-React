import { useGetAllProducts } from "../hooks/useGetAllProducts"
import { useGetProductsByCategory } from "../hooks/useGetProductsByCategory"

import { Layout, ItemListContainer } from "../index"

export const Home = () => {
    
    const {products} = useGetProductsByCategory('sunglasses');
    console.log(products)

    return (
        <Layout>
            <section id="header">
                <h1>MEGASTORE</h1>
                <div id="h2Waves">
                    <h2 id="border">SUMMER</h2>
                    <h2 id="wave">SUMMER</h2>
                </div>
                <div id="h2Waves">
                    <h2 id="border" className="season">SEASON</h2>
                    <h2 id="wave" className="season">SEASON</h2>
                </div>
                <h3>-50% off on glasses-</h3>
            </section>

            <section id="mainHomeSection">
                <h2>🏖️Summer Season🌴</h2>
                <ItemListContainer products={products}/>
            </section>
            
        </Layout>
    )
}