export interface IOrder{
    id: string;
    name: string;
    shortDescription: string;
    status: TOrderStatus;
}

export type TOrderStatus = 'В очереди' | 'В работе' | 'Готов';