import { Cigarette } from "./cigarette";
import { Drink } from "./drink";
import { Food } from "./food";

export interface TaxVisitorProtocol {
    calculateTaxesForFood(food: Food): number;
    calculateTaxesForCigarette(cigarette: Cigarette): number;
    calculateTaxesForDrink(drink: Drink): number;
}
