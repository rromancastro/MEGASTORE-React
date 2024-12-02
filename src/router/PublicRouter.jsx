import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home, NotFound, ItemDetail, ProductsByCategory, SearchResult } from '../index'

export const PublicRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/item/:id" element={<ItemDetail/>}/>
                <Route path="/products/:categoryName" element={<ProductsByCategory/>}/>
                <Route path="/search/:searchValue" element={<SearchResult/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}