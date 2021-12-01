import { Cart } from './Cart';

export interface Order {
    id: number;
    date: string;
    total: number;
    quantity: number;
    orderItems: Cart[];
}
