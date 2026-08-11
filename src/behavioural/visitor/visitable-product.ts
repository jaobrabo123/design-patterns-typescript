import { TaxVisitorProtocol } from "./tax-visitor-protocol";

export abstract class VisitableProduct {
    constructor(
        protected name: string,
        protected price: number,
    ) {}

    abstract getPriceWithTaxes(visitor: TaxVisitorProtocol): number;

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }
}
