import { User } from "../interfaces/user";

export class MyDatabaseClassic {
    private static _instance: MyDatabaseClassic | null = null;
    private users: User[] = [];

    private constructor() {}

    public static get instance(): MyDatabaseClassic {
        if (MyDatabaseClassic._instance === null) {
            MyDatabaseClassic._instance = new MyDatabaseClassic();
        }
        return MyDatabaseClassic._instance;
    }

    public add(user: User): void {
        this.users.push(user);
    }

    public remove(index: number): void {
        this.users[index] = this.users[this.users.length - 1];
        this.users.pop();
    }

    public show(): void {
        this.users.forEach(user => console.log(user));
    }
}
