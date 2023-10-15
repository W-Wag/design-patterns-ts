import { Customer } from '../customer/customer';
import { AbstractVehicle } from '../vehicle/abstract-vehicle';

export interface CreateCustomerVehicle {
  createCustomer(customerName: string, customerEnterprise?: string): Customer;
  createVehicle(
    vehicleName: string,
    customerName: string,
    customerEnterprise?: string,
    vehicleEnterprise?: string,
  ): AbstractVehicle;
}
