import { MyDefaultIterator } from "./my-default-iterator";
import { MyIteratorProtocol } from "./my-iterator-protocol";

export class MyDataStructure {
    private items: string[] = [];
    private iterator: MyIteratorProtocol<string> = new MyDefaultIterator(this);

    addItem(...items: string[]): void {
        this.items.push(...items);
    }

    getItems(): string[] {
        return this.items;
    }

    size(): number {
        return this.items.length;
    }

    changeIterator(iterator: MyIteratorProtocol<string>): void {
        this.iterator = iterator;
    }

    [Symbol.iterator](): MyIteratorProtocol<string> {
        this.iterator.reset();
        return this.iterator;
    }
}
