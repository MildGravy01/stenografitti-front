export interface IOrderPreview{
    order_id: string;
    name: string;
    preview: string;
    status: TOrderStatus;
}
export interface IOrder extends IOrderPreview{
    text: string;
}

export interface ISpeakerText{
    timestamp: string;
    text: string;
}

export type TOrderStatus = 'В очереди' | 'В работе' | 'Готов';