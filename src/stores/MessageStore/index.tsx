import { makeObservable, observable, action} from 'mobx';
import { IMessage } from './types';
import { messageService } from '../../api';

export class MessageStore {
    currentChat: IMessage[] = [];
    isMessageInProcess = false;
    constructor() {
        makeObservable(this, {
         currentChat: observable,
         isMessageInProcess: observable,
         getMessageHistory: action,
         sendMessage: action
        });
    }
    getMessageHistory(orderId:string){
        const rawArray = localStorage.getItem(orderId);
        console.log("rawArray", rawArray);
        if(rawArray){
            const parsedArray = JSON.parse(rawArray);
            console.log("parsedArray", parsedArray);
            if(Array.isArray(parsedArray)){
                this.currentChat = parsedArray.sort((a,b) => a?.timestamp - b?.timestamp);
            }
        }
        
    } 

    async sendMessage(orderId: string, message: string){
        this.getMessageHistory(orderId);
        const currentTimeStamp = new Date();
        this.currentChat = [...this.currentChat, {text:message, isMine: true, timestamp: currentTimeStamp.toISOString()}];
        try{
          //  const resp = await messageService.sendMessage(orderId, message);
         // this.currentChat = [...this.currentChat, {text:resp.data, isMine: false, timestamp: Date.now().toString()}];
         localStorage.setItem(orderId, JSON.stringify(this.currentChat));
        } catch(e) {
            console.error(e);
        } finally{
            this.isMessageInProcess = false;
        }
        

    }
}