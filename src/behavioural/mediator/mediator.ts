import { Seller } from "./seller";
import { SellerProduct } from "./seller-product";

export class Mediator {
    private sellers: Seller[] = [];

    addSeler(...sellers: Seller[]): void {
        sellers.forEach(seller => seller.setMediator(this));
        this.sellers.push(...sellers);
    }

    buy(id: string): SellerProduct | undefined {
        let product: SellerProduct | undefined;

        for (const seller of this.sellers) {
            product = seller.sell(id);

            if (product) {
                console.log("Aqui está", product.id, product.name, product.price);
                return product;
            }
        }

        console.log("Não encontrei nenhum produto com id", id);
    }

    showProducts(): void {
        this.sellers.forEach(seller => seller.showProducts());
    }
}
