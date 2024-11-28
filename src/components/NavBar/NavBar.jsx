import { FaSearch } from "react-icons/fa";

export const NavBar = () => {
    return (
        <nav>
            <div id="searchContainer">
                <label htmlFor="searchInput"><FaSearch style={{color: "grey"}}/></label>
                <input type="text" id="searchInput"/>
            </div>
            <h2 id="brandText">MEGASTORE</h2>
        </nav>
    )
}