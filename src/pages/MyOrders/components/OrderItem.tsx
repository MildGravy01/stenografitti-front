import { Button, Tag, TagProps } from "antd";
import { OrderItemBackground } from "./styles";
import { IOrderItemProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { OrderStatus } from "../../../components/OrderStatus";

export const OrderItem = ({ name, status, preview, onClick }: IOrderItemProps) => {
  return (
    <OrderItemBackground onClick={onClick}>
      <div className="outerHolder">
        <div className="innerHolder">
          <h3>{name}</h3>
          <p>{preview}</p>
         <OrderStatus status={status}/>
        </div>
        <Button type="text">
         <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </div>
    </OrderItemBackground>
  );
};
