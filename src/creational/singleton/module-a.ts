import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: "Joao", age: 18 });
myDatabaseClassic.add({ name: "Maria", age: 19 });
myDatabaseClassic.add({ name: "Eduardo", age: 40 });
myDatabaseClassic.remove(1);

export { myDatabaseClassic };
