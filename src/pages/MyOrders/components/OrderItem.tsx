import { Button, Tag, TagProps } from "antd";
import { OrderItemBackground } from "./styles";
import { IOrderItemProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TOrderStatus } from "src/stores/OrdersStore/types";

export const OrderItem = ({ name, status, preview }: IOrderItemProps) => {
    const defineStatusColor = (status: TOrderStatus): TagProps['color'] => {
        switch(status){
          case "В работе":
              return "processing";
          case "Готов":
              return "success";
          case "В очереди":
              return "orange";
        }
      }
  return (
    <OrderItemBackground>
      <div className="outerHolder">
        <div className="innerHolder">
          <h3>{name}</h3>
          <p>{preview}</p>
          <Tag color={defineStatusColor(status)} className="statusTag">{status}</Tag>
        </div>
        <Button type="text">
         <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </div>
    </OrderItemBackground>
  );
};
