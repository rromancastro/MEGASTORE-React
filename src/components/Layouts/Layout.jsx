import { NavBar } from "../../index"

export const Layout = ({children}) => {
 return(
   <>
   <NavBar />
   <div>{children}</div>
   </>
 )
}