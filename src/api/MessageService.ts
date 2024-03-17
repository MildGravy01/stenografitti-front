import { instance } from "./api.config";

class MessageService {

    sendMessage (orderId: string, message: string) {
        return instance.post("/api/v1/message", new URLSearchParams({orderId, message}))
    }
}
export const messageService = new MessageService();