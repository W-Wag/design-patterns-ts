import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePayment(): void {
    console.log('Nao pode aprovar um pedido rejeitado.');
  }
  rejectPayment(): void {
    console.log('O pedido já está no estado pagamento rejeitado.');
  }
  waitingPayment(): void {
    console.log('Nao pode mover para pendente um pedido rejeitado.');
  }
  shipOrder(): void {
    console.log('Nao pode enviar um pedido rejeitado.');
  }
}
