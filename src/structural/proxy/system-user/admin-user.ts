import { SystemUserAddressProtocol, SystemUserProtocol } from "./system-user-protocol";

export class AdminUser implements SystemUserProtocol {
    public firstName: string;
    public username: string;

    constructor(firstName: string, username: string) {
        this.firstName = firstName;
        this.username = username;
    }

    async getAddresses(): Promise<SystemUserAddressProtocol[]> {
        return new Promise(res => {
            return setTimeout(() => {
                return res([
                    {
                        street: "Avenida",
                        number: 2,
                    },
                    {
                        street: "Rua A",
                        number: 40,
                    },
                ]);
            }, 2000);
        });
    }
}
