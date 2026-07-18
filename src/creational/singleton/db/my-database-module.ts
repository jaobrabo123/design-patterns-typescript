import { User } from "../interfaces/user";

const users: User[] = [];

export const MyDatabaseModule = {
    add(user: User): void {
        users.push(user);
    },

    remove(index: number): void {
        users[index] = users[users.length - 1];
        users.pop();
    },

    show(): void {
        users.forEach(user => console.log(user));
    },
};
