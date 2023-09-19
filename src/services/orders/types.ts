export interface ProductCart {
  productId: string;
  quantity: number;
}

export interface Cart {
  products: ProductCart[];
}

export interface OrderInfo {
  id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductOrder {
  id: string;
  description: string;
  quantity: string;
  subTotal: string;
  createdAt: string;
}

export interface Order extends OrderInfo {
  orderDetail: ProductOrder[];
}
