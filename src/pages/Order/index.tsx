import { useEffect, useState } from "react";
import { PageWrapper, DocumentContainer, DocumentHeader } from "./styles";
import { useRootStore } from "../../contexts/RootStoreContext";
import { useSearchParams } from "react-router-dom";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer, FloatButton, Spin } from "antd";
import { MessageHolder } from "./components/MessageHolder";
import { observer } from "mobx-react";
import { OrderStatus } from "../../components";
import { usePollingEffect } from "../../hooks/usePollingEffect";

export const OrderPage = observer(() => {
  const { ordersStore, messageStore } = useRootStore();
  let [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_id");
  const [isChatOpen, setChatOpen] = useState(false);
  const { currentOrder } = ordersStore;
  usePollingEffect(() => {
    if (orderId && ordersStore.currentOrder?.status != 'Готов') {
      ordersStore.getCurrentOrder(orderId)
    }
  }, [], {interval: 10000});

  useEffect(() => {
    if (orderId !== 'undefined' && orderId !== null) {
      messageStore.getMessageHistory(orderId);
    } else {
      location.assign("/myOrders");
    }
  }, []);

  const handleSendMessage = (message: string) => {
    if (orderId) {
      messageStore.sendMessage(orderId, message);
    }
  };

  return (
    <>
      <PageWrapper>
        <FloatButton
          icon={<FontAwesomeIcon icon={faComment} />}
          onClick={() => setChatOpen(true)}
          type="primary"
          style={{ right: 24 }}
        />
        <DocumentContainer>
          <DocumentHeader>
            <h2>{currentOrder?.name}</h2>
            <p>{currentOrder?.preview}</p>
            {currentOrder?.status && (
              <OrderStatus status={currentOrder?.status} />
            )}
          </DocumentHeader>
          {currentOrder?.text ? (
            <p>{currentOrder?.text}</p>
          ) : (
            <div className="loadingHolder">
              <p>Ваша стенограмма скоро будет готова!</p>
              <Spin size="large" />
            </div>
          )}
        </DocumentContainer>
      </PageWrapper>
      <Drawer
        title="Чат"
        placement={"right"}
        closable={false}
        onClose={() => setChatOpen(false)}
        open={isChatOpen}
        key={"right"}
      >
        <MessageHolder
          chat={messageStore.currentChat}
          handleSendMessage={handleSendMessage}
          isBusy={messageStore.isMessageInProcess}
        />
      </Drawer>
    </>
  );
});
