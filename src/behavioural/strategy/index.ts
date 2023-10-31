import { ECommerceShoppingCart } from './shopping-cart/e-commerce-shopping-cart';
import { NewDiscount } from './shopping-cart/new-discount';

const shoppingCart = new ECommerceShoppingCart();
// shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct(
  { name: 'Product 1', price: 50 },
  { name: 'Product 2', price: 50 },
  { name: 'Product 3', price: 50 },
  { name: 'Product 4', price: 50 },
);

console.log(shoppingCart.getTotalWithDiscount());
console.log(shoppingCart.getTotal());
