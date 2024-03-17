import { instance } from "./api.config.js";

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

    getOrder(orderId: string){
        return instance.get(`/api/v1/order/${orderId}/text`);
    }

    getOrderStatus(orderId: string){
        return instance.get(`/api/v1/order/${orderId}`);
    }
}
export const orderService = new OrderService();