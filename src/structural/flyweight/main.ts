import { deliveryContext } from "./delivery/delivery-context";
import { DeliveryFactory } from "./delivery/delivery-factory";

const factory = new DeliveryFactory();
deliveryContext(factory, "Luiz", "20A", "Avenida", "Aracaju");
deliveryContext(factory, "Helena", "20A", "Avenida", "Aracaju");
deliveryContext(factory, "Joana", "502", "Avenida", "Aracaju");
deliveryContext(factory, "Eliana", "2", "Rua A", "Aracaju");

console.log();
console.log(factory.getLocations());
