import { Header, Footer } from "components"
import { Outlet } from "react-router";
import { PageWrapper } from "./style";
import { useRootStore } from "../../contexts/RootStoreContext";
import { AuthPage } from "../../pages";
import { observer } from "mobx-react";

export const PageLayout = observer(() => {
    const {authStore} = useRootStore();
    return (
     <PageWrapper>
      <Header/>
       {authStore.isAuth ? <Outlet/> : <AuthPage/>}
      <Footer/>
     </PageWrapper>
     );
})