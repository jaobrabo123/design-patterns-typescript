import { MyDatabaseFunction } from "./db/my-database-function";
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from "./module-a";

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: "Roberto", age: 18 });
myDatabaseClassic.add({ name: "Joana", age: 19 });
myDatabaseClassic.add({ name: "Luiza", age: 40 });

myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
