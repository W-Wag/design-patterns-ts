import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
  constructor(
    public username: string,
    public name: string,
  ) {}

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'AV. Brasil', number: 50 },
          { street: 'AV. Street', number: 124 },
        ]);
      }, 2000);
    });
  }
}
