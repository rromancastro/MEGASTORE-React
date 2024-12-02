import { useParams } from "react-router"
import { ItemListContainer, Layout } from "../index"
import { useGetSearchResult } from "../hooks/useGetSearchResult";

export const SearchResult = () => {
    const { searchValue } = useParams();
    const { products } = useGetSearchResult(searchValue.replace(':', ""))

    return (
        <Layout>
            {
                products.length == 0 ? <div style={{backgroundColor: '#F5F5F5', width: '100%', height: '90vh', display:'flex', alignItems:'center',justifyContent:'center'}}><h1 style={{color: 'grey', fontSize: '50px'}}>We couldn't find results for "{searchValue.replace(':', "")}"</h1></div> : <ItemListContainer products={products}/>
            }
        </Layout>
    )
}