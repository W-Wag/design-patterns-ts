import { Customer } from './customer';

export class EnterpriseCustomer implements Customer {
  constructor(
    public name: string,
    public enterprise: string,
  ) {}
}
