export type SystemUserAddressProtocol = { street: string; number: number };

export interface SystemUserProtocol {
  username: string;
  name: string;

  getAddresses(): Promise<SystemUserAddressProtocol[]>;
}
