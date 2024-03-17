import { instance } from "./api.config";

class MessageService {

    sendMessage (orderId: string, message: string) {
        return instance.get("/api/v1/message/message", {params: {order_id: orderId, message}});
    }
}
export const messageService = new MessageService();