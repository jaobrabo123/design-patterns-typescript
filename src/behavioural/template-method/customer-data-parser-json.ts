import { readFile } from "fs/promises";
import { CustomerData } from "./customer-data";
import { CustomerDataParser } from "./customer-data-parser";

export class CustomerDataParserJson extends CustomerDataParser {
    protected async parseData(): Promise<CustomerData[]> {
        const rawData = await readFile(this.filePath);

        const data = JSON.parse(rawData.toString()) as CustomerData[];

        const customerData: CustomerData[] = [];

        for (const customer of data) {
            const { name, age, cpf } = customer;
            customerData.push({ name, age, cpf });
        }

        return customerData;
    }
}
