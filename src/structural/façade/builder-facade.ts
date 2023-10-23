import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';
import { VeganDishBuilder } from '../../creational/builder/classes/vegan-dish-builder';

export class BuilderFacade {
  // Essa é a fachada para a a pasta src/creational/builder/index.ts

  private mainDishBuilder = new MainDishBuilder();
  private veganDishBuilder = new VeganDishBuilder();

  makeMeal1(): void {
    this.mainDishBuilder.makeMeal().makeBeverage();
    console.log(this.mainDishBuilder.getMeal());
    this.mainDishBuilder.reset();
  }

  makeMeal2(): void {
    const mainDish2 = this.mainDishBuilder.makeDessert().getMeal();
    console.log(mainDish2);
  }

  makeMeal3(): void {
    const veganMeal = this.veganDishBuilder.makeMeal().makeBeverage().getMeal();

    console.log(veganMeal);
    console.log(veganMeal.getPrice());
  }
}
