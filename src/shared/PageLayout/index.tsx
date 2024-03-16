import { Header, Footer } from "components"
import { Outlet } from "react-router";

export const PageLayout = () => {
    return (
    <>
     <Header/>
       <Outlet/>
      <Footer/>
     </>
     );

}