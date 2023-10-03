import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Rice } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 7);
    this._meal.add(rice, beans);

    return this;
  }
  makeBeverage(): this {
    const soda = new Beverage('Soda', 5);
    this._meal.add(soda);

    return this;
  }
  makeDessert(): this {
    const lollipop = new Dessert('Lollipop', 2);
    this._meal.add(lollipop);

    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }
  getPrice(): number {
    return this._meal.getPrice();
  }
}
