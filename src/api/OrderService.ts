import { IOrder } from "src/stores/OrdersStore/types";
import { instance } from "./api.config.js";
import * as fs from 'fs';

class OrderService {
    getItems(token: string) {
        return instance.get('/api/v1/user/orders', {params: new URLSearchParams({token})});
    }
    
    createOrder(name: string, file: File) {
        const form = new FormData();
        form.append('file', file);
    return instance.post('/api/v1/file/upload', form, {params: {name}, 
    headers: {
    'Content-Type': 'multipart/form-data'}})
    }
}
export const orderService = new OrderService();