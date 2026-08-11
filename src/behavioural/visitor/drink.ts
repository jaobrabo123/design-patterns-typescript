import { TaxVisitorProtocol } from "./tax-visitor-protocol";
import { VisitableProduct } from "./visitable-product";

export class Drink extends VisitableProduct {
    constructor(protected price: number) {
        super("Drink", price);
    }

    getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
        return visitor.calculateTaxesForDrink(this);
    }
}
