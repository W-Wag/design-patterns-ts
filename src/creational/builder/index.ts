import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();

mainDishBuilder.makeMeal().makeBeverage();
console.log(mainDishBuilder.getMeal());
mainDishBuilder.reset();
const mainDish2 = mainDishBuilder.makeDessert().getMeal();
console.log(mainDish2);

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().makeBeverage().getMeal();

console.log(veganMeal);
console.log(veganMeal.getPrice());
