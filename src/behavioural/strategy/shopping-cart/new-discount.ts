import { DiscountStrategy } from "./discount-strategy";
import { ECommerceShoppingCart } from "./ecommerce-shopping-cart";

export class NewDiscount extends DiscountStrategy {
    protected override discount = 0;

    getDiscount(cart: ECommerceShoppingCart): number {
        const total = cart.getTotal();

        if (total >= 150) {
            this.discount = 5;
        }

        return total - total * (this.discount / 100);
    }
}
