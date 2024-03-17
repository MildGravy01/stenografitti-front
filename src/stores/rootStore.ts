import { OrdersStore } from "./OrdersStore";
import { AuthStore } from "./AuthStore";
import { MessageStore } from "./MessageStore";

export class RootStore {
  authStore: AuthStore = new AuthStore();
  ordersStore: OrdersStore = new OrdersStore(this);
  messageStore: MessageStore = new MessageStore();
}
