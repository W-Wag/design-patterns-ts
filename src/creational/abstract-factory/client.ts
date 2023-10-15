import { CreateCustomerVehicleEnterprise } from './factories/enterprise-customer-vehicle-factory';
import { CreateCustomerVehicleIndividual } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new CreateCustomerVehicleEnterprise();
const individualFactory = new CreateCustomerVehicleIndividual();

const enterpriseCustomer = enterpriseFactory.createCustomer('Carl', 'Aliance');
const individualCustomer = individualFactory.createCustomer('Sergio');

if (typeof enterpriseCustomer.enterprise === 'undefined') {
  enterpriseCustomer.enterprise = '';
}

const enterpriseCar = enterpriseFactory.createVehicle(
  'Subaru',
  enterpriseCustomer.name,
  enterpriseCustomer.enterprise,
  'Uber',
);

const individualCar = individualFactory.createVehicle(
  'Celta',
  individualCustomer.name,
);

enterpriseCar.pickUp();
individualCar.pickUp();
