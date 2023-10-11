import { Customer } from '../customer/customer';
import { EnterpriseCustomer } from '../customer/enterprise-custumer';
import { AbstractVehicle } from '../vehicle/abstract-vehicle';
import { EnterpriseCar } from '../vehicle/enterprise-car';
import { CreateCustomerVehicle } from './customer-vehicle-factory';

export class CreateCustomerVehicleEnterprise implements CreateCustomerVehicle {
  createCustomer(customerName: string, customerEnterprise: string): Customer {
    return new EnterpriseCustomer(customerName, customerEnterprise);
  }
  createVehicle(
    vehicleName: string,
    customerName: string,
    customerEnterprise: string,
    vehicleEnterprise: string,
  ): AbstractVehicle {
    const customer = this.createCustomer(customerName, customerEnterprise);

    return new EnterpriseCar(vehicleName, vehicleEnterprise, customer);
  }
}
