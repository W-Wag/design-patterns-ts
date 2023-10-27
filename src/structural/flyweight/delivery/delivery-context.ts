import { DeliveryFactory } from './delivery-factory';

export const deliveryContext = (
  factory: DeliveryFactory,
  name: string,
  number: string,
  street: string,
  city: string,
) => {
  const location = factory.makeLocation({ street, city });
  location.deliver(name, number);
};
