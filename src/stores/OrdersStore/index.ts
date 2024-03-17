import { error } from "console";
import { orderService } from "../../api";
import { RootStore } from "../rootStore";
import { IOrder, IOrderPreview } from "./types";
import { makeObservable, observable, action} from 'mobx';
import { message } from "antd";

export class OrdersStore {
    rootStore: RootStore;
    ordersList: IOrderPreview[]| null = null;
    currentOrder: IOrder | null = null;
    isUploading = false;
    constructor (rootStore: RootStore){
        this.rootStore = rootStore;
        makeObservable(this, {
            ordersList: observable,
            currentOrder: observable,
            isUploading: observable,
            getCurrentOrder: action,
            openOrderPage: action,
            createOrder: action,
            getOrderList: action,
        });
    }
    openOrderPage(orderId:string){
        location.assign(`/order?order_id=${orderId}`);
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
            this.isUploading = true;
            const resp = await orderService.createOrder(name, file);
            if(!resp){
                throw new Error("file upload failed");
            }
            console.log("error", resp.data);
            this.openOrderPage(resp.data?.order);
        }
        catch(err){
            message.error("Произошла ошибка");
        }
        finally{
            this.isUploading = false;
        }
    }

    async getCurrentOrder(orderId: string){
        //this.currentOrder = {id: orderId, name: "Встреча 1", text: undefined, status: "В очереди", preview: "Превью"}
        const resp = await orderService.getOrder(orderId);
        this.currentOrder = resp.data;
    }

}