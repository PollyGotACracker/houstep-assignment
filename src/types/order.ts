export interface OrderItemType {
  id: string;
  name: string;
  event: number;
  materialType: number;
  price: number;
}

export interface OrderCartType {
  id: string;
  amount: number;
  product: OrderItemType;
}
