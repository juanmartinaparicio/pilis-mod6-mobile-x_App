export interface TicketDetail {
  id: string;
  description: string;
  quantity: string;
  subTotal: string;
  createdAt: string;
}

export interface Ticket {
  id: string;
  createAt: string;
  isDelivered: boolean;
  isExpired: boolean;
  code: string;
  orderId: string;
  detail: TicketDetail[];
}
