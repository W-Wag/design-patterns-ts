import { AbstractVehicle } from './abstract-vehicle';
import { Customer } from '../customer/customer';

export class IndividualCar implements AbstractVehicle {
  constructor(
    public name: string,
    private readonly customer: Customer,
  ) {}
  pickUp(): void {
    console.log(`${this.name}, está buscando ${this.customer.name}`);
  }
}
