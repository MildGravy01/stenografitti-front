import { OrdersStore } from "./OrdersStore";
import { AuthStore } from "./AuthStore";

export class RootStore {
  authStore: AuthStore = new AuthStore();
  ordersStore: OrdersStore = new OrdersStore(this);
}
