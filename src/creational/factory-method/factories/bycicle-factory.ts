import { Bycicle } from "../../../../dist/creational/factory-method/vehicle/bicycle";
import { Vehicle } from "../vehicle/vehicle";
import { VehicleFactory } from "./vehicle-factory";

export class BycicleFactory extends VehicleFactory {
    getVehicle(vehicleName: string): Vehicle {
        return new Bycicle(vehicleName);
    }
}
