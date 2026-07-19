import { MealCompositeProtocol } from "../interfaces/meal-composite-protocol";

export class MealBox implements MealCompositeProtocol {
    private readonly children: MealCompositeProtocol[] = [];

    getPrice(): number {
        return this.children.reduce((sum, meal) => sum + meal.getPrice(), 0);
    }

    add(...meal: MealCompositeProtocol[]) {
        this.children.push(...meal);
    }
}
