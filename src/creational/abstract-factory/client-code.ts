import { EnterpriseCreateVehicleCustomerFactory } from "./factories/enterprice-customer-vehicle-factory";
import { IndividualCreateVehicleCustomerFactory } from "./factories/individual-customer-vehicle-factory";

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const inidividualFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle("Fusca", "João");
const car2 = inidividualFactory.createVehicle("Celta", "Helena");

car1.pickUp();
car2.pickUp();
