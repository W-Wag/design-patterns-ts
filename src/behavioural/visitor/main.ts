import { AlcoholicDrink } from './alcoholic-drink';
import { BrazilTaxVisitor } from './brazil-tax-visitor';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { USTaxVisitor } from './us-tax-visitor';

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(5);
const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new USTaxVisitor();

const cart = [food, cigarette, alcoholicDrink];

const total = cart.reduce((sum, product) => sum + product.getPrice(), 0);
const totalWithTaxesBrazil = cart.reduce(
  (sum, product) => sum + product.getPriceWithTaxes(brazilTaxVisitor),
  0,
);
const totalWithTaxesUS = cart.reduce(
  (sum, product) => sum + product.getPriceWithTaxes(usTaxVisitor),
  0,
);

console.log(total);
console.log(totalWithTaxesBrazil);
console.log(totalWithTaxesUS);
