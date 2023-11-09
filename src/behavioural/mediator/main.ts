import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();
seller1.addProduct({ id: '1', name: 'Produto 1', price: 10 });
seller1.addProduct({ id: '2', name: 'Produto 2', price: 42 });
const seller2 = new Seller();
seller2.addProduct({ id: '3', name: 'Produto 3', price: 100 });
seller2.addProduct({ id: '4', name: 'Produto 4', price: 50000 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.buy('2');
buyer.buy('3');
buyer.viewProducts();
