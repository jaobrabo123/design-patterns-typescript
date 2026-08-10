import { Buyer } from "./buyer";
import { Mediator } from "./mediator";
import { Seller } from "./seller";

const mediator = new Mediator();
const seller1 = new Seller();
seller1.addProduct(
    { id: "1", name: "Camiseta", price: 49.9 },
    { id: "2", name: "Caneta", price: 9.9 },
);

const seller2 = new Seller();
seller2.addProduct(
    { id: "3", name: "Carro", price: 49_000.9 },
    { id: "4", name: "Lápis", price: 1.99 },
);

mediator.addSeler(seller1, seller2);

mediator.showProducts();

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy("1");
buyer.buy("3");
buyer.viewProducts();
