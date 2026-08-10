import { Mediator } from "./mediator";
import { SellerProduct } from "./seller-product";

export class Seller {
    private products: SellerProduct[] = [];
    private mediator?: Mediator;

    showProducts(): void {
        this.products.forEach(prod => {
            console.log(prod.id, prod.name, prod.price);
        });
    }

    addProduct(...products: SellerProduct[]): void {
        this.products.push(...products);
    }

    setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }

    sell(id: string): SellerProduct | undefined {
        const productIndex = this.products.findIndex(prod => prod.id === id);

        if (productIndex === -1) return;

        const product = this.products.splice(productIndex, 1);
        return product[0];
    }

    viewProducts(): void {
        if (!this.mediator) return;
        this.mediator.showProducts();
    }

    buy(id: string): void {
        if (!this.mediator) return;
        this.mediator.buy(id);
    }
}
