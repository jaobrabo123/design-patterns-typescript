import { BrazilTaxVisitor } from "./brazil-tax-visitor";
import { Cigarette } from "./cigarette";
import { Drink } from "./drink";
import { Food } from "./food";
import { USTaxVisitor } from "./us-tax-visitor";

const food = new Food(10);
const cigarette = new Cigarette(5);
const drink = new Drink(5);

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new USTaxVisitor();

const cart = [food, cigarette, drink];
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);

const totalWithTaxesBrazil = cart.reduce(
    (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
    0,
);
const totalWithTaxesUS = cart.reduce((sum, item) => item.getPriceWithTaxes(usTaxVisitor) + sum, 0);

console.log(total);
console.log(totalWithTaxesBrazil);
console.log(totalWithTaxesUS);
