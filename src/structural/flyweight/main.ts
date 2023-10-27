import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Sergio', '20A', 'Av.Brasil', 'SP');
deliveryContext(factory, 'Helena', '20A', 'Av.Brasil', 'SP');
deliveryContext(factory, 'Gustavo', '20A', 'Rua A', 'BH');

console.log();
console.log(factory.getLocations());
