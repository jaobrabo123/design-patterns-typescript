import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Beans, Rice } from "./meals";

export class VeganDishBuilder implements MealBuilderProtocol {
    private meal: MealBox = new MealBox();

    reset(): this {
        this.meal = new MealBox();
        return this;
    }

    makeMeal(): this {
        const rice = new Rice("Arroz", 5);
        const beans = new Beans("Feijão", 10);
        this.meal.add(rice, beans);

        return this;
    }

    getMeal(): MealBox {
        return this.meal;
    }

    getPrice(): number {
        return this.meal.getPrice();
    }
}
