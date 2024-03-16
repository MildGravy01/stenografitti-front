import { TOrderStatus } from "src/stores/OrdersStore/types";

export interface IOrderItemProps {
    name: string;
    preview?: string;
    status: TOrderStatus;
};