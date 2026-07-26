import { AdminUser } from "./admin-user";
import { SystemUserAddressProtocol, SystemUserProtocol } from "./system-user-protocol";

export class SystemUserProxy implements SystemUserProtocol {
    private realUser: SystemUserProtocol | null = null;
    private realUserAddresses: SystemUserAddressProtocol[] | null = null;

    constructor(
        public firstName: string,
        public username: string,
    ) {}

    private createUser(): SystemUserProtocol {
        if (this.realUser === null) {
            this.realUser = new AdminUser(this.firstName, this.username);
        }

        return this.realUser;
    }

    async getAddresses(): Promise<SystemUserAddressProtocol[]> {
        const user = this.createUser();

        if (this.realUserAddresses === null) {
            this.realUserAddresses = await user.getAddresses();
        }

        return this.realUserAddresses;
    }
}
