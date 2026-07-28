import { DiscountStrategy } from "./discount-strategy";
import { ECommerceProductProtocol } from "./ecommerce-product-protocol";

export class ECommerceShoppingCart {
    private readonly products: ECommerceProductProtocol[] = [];
    private discountStrategy = new DiscountStrategy();

    addProduct(...products: ECommerceProductProtocol[]): void {
        this.products.push(...products);
    }

    getProducts(): ECommerceProductProtocol[] {
        return this.products;
    }

    getTotal(): number {
        return this.products.reduce((total, prod) => total + prod.price, 0);
    }

    getTotalWithDiscount(): number {
        return this.discountStrategy.getDiscount(this);
    }

    setDiscountStrategy(discount: DiscountStrategy): void {
        this.discountStrategy = discount;
    }
}
