export interface ShoppingOrderState {
  getName(): string;
  approvePayment(): void;
  rejectPayment(): void;
  waitingPayment(): void;
  shipOrder(): void;
}
