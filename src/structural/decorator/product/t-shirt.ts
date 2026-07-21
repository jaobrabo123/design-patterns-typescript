import { ProductProtocol } from "./produc-protocol";

export class TShirt implements ProductProtocol {
    private name = "Camiseta";
    private price = 49.9;

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }
}
