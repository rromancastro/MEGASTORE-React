import {Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button,} from "@chakra-ui/react";
import { FaSearch, FaBars, FaShoppingCart  } from "react-icons/fa";
import { useGetAllCategories } from "../../hooks/useGetAllCategories";
import { Link } from "react-router";
import React, { useState } from "react";
export const NavBar = () => {

    const {categories} = useGetAllCategories();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [cartCounter, setCartCounter] = useState(0)

    // LOGICA BUSCADOR
    const [searchValue, setSearchValue] = useState('')

    function saveSearchValue(value) {
        setSearchValue(value.target.value)
    }

    return (
        <nav>
            <div id="searchContainer">
                <Link to={`/search/:${searchValue}`}><label htmlFor="inputSearch" id="inputSearchLabel"><FaSearch style={{color: "grey"}}/></label></Link>
                <input id="inputSearch" onChange={saveSearchValue}/>
            </div>
            <h2 id="brandText"><Link to={'/'}>MEGASTORE</Link></h2>
            <div id="navUtilities">
                <div id="cartContainer">
                    <FaShoppingCart style={{color: 'grey'}}/>
                    <p>{cartCounter}</p>
                </div>
                    <Button ref={btnRef} style={{color: 'grey'}} onClick={onOpen}><FaBars /></Button>
                    <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
                        <DrawerOverlay />
                        <DrawerContent style={{backgroundColor: '#FFFFFF', color: 'grey'}}>
                        <DrawerCloseButton />
                        <DrawerHeader >Categories</DrawerHeader>
                        <DrawerBody style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                            {
                                categories.map((category) => {
                                    return <Link key={category.slug} to={`/products/:${category.slug}`}><p style={{fontSize: '20px', fontWeight: '300', color: 'grey'}}>{category.name}</p></Link>
                                })
                            }
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
            </div>
        </nav>
    )
}