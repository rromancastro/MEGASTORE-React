import { ItemCard } from '../../index'


export const ItemListContainer = ({products}) => {
    return (
        <section id='itemListContainer'>
            {
                products.map((product) => {
                    return <ItemCard key={product.id} data={product} />
                })
            }
        </section>
    )
}