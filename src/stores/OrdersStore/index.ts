import { orderService } from "../../api";
import { RootStore } from "../rootStore";
import { IOrder } from "./types";
import { makeObservable, observable} from 'mobx';

export class OrdersStore {
    rootStore: RootStore;
    ordersList: IOrder[]| null = null;

    constructor (rootStore: RootStore){
        this.rootStore = rootStore;
        makeObservable(this, {
            ordersList: observable
        });
        this.getOrderList();
    }

    async getOrderList(){
        try {
            const token = this.rootStore.authStore.getToken();
            if(!token){
                throw new Error('no access token, how you got here? huh???')
            }
                const resp = await orderService.getItems(token);
                this.ordersList = resp.data?.orders;
        }
        catch(err){
            console.error(err);
        }
    }
    async createOrder(name: string,file: File){
        try{
            const resp = await orderService.createOrder(name, file);
            if(!resp){
                throw new Error("file upload failed");
            }
            location.assign(`/order?order_id=${resp.data.order}`);
        }
        catch(err){
            console.error(err);
        }
    }

}