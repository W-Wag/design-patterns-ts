import { AbstractVehicle } from './abstract-vehicle';
import { Customer } from '../customer/customer';

export class EnterpriseCar implements AbstractVehicle {
  constructor(
    public name: string,
    public enterprise: string,
    private readonly customer: Customer,
  ) {}
  pickUp(): void {
    console.log(
      `${this.name} da empresa ${this.enterprise}, está buscando ${this.customer.name} da empresa ${this.customer.enterprise}`,
    );
  }
}
