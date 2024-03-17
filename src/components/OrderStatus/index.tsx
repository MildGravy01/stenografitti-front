import { Tag, TagProps } from "antd"
import { TOrderStatus } from "src/stores/OrdersStore/types";

export const OrderStatus = ({status} : {status: TOrderStatus}) => {
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
    return( <Tag color={defineStatusColor(status)} className="statusTag">{status}</Tag>)
}