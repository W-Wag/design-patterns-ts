import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder();
order.approvePayment();
order.waitingPayment();
order.shipOrder();
order.rejectPayment(); // Não altera mais o estado
order.approvePayment();
order.waitingPayment();
order.shipOrder();
