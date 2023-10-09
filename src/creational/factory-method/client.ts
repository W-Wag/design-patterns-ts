import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle';
import { randomNumbers } from './utils/random-numbers';

const customerNames = ['Ana', 'Sergio', 'Rodrigo', 'João'];
const carFactory = new CarFactory();

for (let i = 0; i < customerNames.length; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, 'Subaru');
  newCar.stop();
  console.log('----');
}
