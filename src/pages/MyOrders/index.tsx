import { useRootStore } from "../../contexts/RootStoreContext";
import { ListHolder, PageWrapper } from "./style";
import { OrderItem } from "./components/OrderItem";
import { observer } from "mobx-react";
import { useEffect } from "react";

export const MyOrdersPage = observer(() => {
  const { ordersStore } = useRootStore();
  useEffect(() => {
    ordersStore.getOrderList();
  }, []);

  const handleClick = (orderId: string) => {
    ordersStore.openOrderPage(orderId);
  };
  return (
    <PageWrapper>
      <div className="pageHeader">
        <h1>Мои заказы</h1>
      </div>
      <ListHolder>
        {ordersStore.ordersList?.map((item) => (
          <OrderItem
            name={item.name}
            status={item.status}
            preview={item.preview}
            onClick={() => handleClick(item.order_id)}
          />
        ))}
      </ListHolder>
    </PageWrapper>
  );
});
