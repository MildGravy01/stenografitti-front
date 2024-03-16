import { useRootStore } from "../../contexts/RootStoreContext";
import { ListHolder, PageWrapper } from "./style";
import { OrderItem } from "./components/OrderItem";
import { observer } from "mobx-react";
import { useEffect } from "react";

export const MyOrdersPage = observer(() => {
    const {ordersStore} = useRootStore();

    return (
    <PageWrapper>
        <div className="pageHeader">
          <h1>Мои заказы</h1>  
        </div>
        <ListHolder>
            {ordersStore.ordersList?.map((item) => <OrderItem {...item}/>)}
        </ListHolder>
    </PageWrapper>
    );
});