import { ECommerceShoppingCart } from "./shopping-cart/ecommerce-shopping-cart";
import { NewDiscount } from "./shopping-cart/new-discount";

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.setDiscountStrategy(new NewDiscount());
shoppingCart.addProduct({ name: "Produto 1", price: 50 });
shoppingCart.addProduct({ name: "Produto 2", price: 50 });
shoppingCart.addProduct({ name: "Produto 3", price: 50 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
