import { OrderPending } from './order-pending';
import { ShoppingOrderState } from './shopping-order-state';

export class ShoppingOrder {
  private state: ShoppingOrderState = new OrderPending(this);

  getState(): ShoppingOrderState {
    return this.state;
  }

  setState(state: ShoppingOrderState) {
    this.state = state;
    console.log(`O estado do pedido agora é ${this.getStateName()}.`);
  }

  getStateName(): string {
    return this.state.getName();
  }

  approvePayment(): void {
    this.state.approvePayment();
  }

  rejectPayment(): void {
    this.state.rejectPayment();
  }

  waitingPayment(): void {
    this.state.waitingPayment();
  }

  shipOrder(): void {
    this.state.shipOrder();
  }
}
