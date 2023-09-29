import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseModule = MyDatabaseFunction;
myDatabaseModule.add({ name: 'Luiz', age: 30 });
myDatabaseModule.add({ name: 'Sandro', age: 54 });
myDatabaseModule.add({ name: 'Sergio', age: 12 });
myDatabaseModule.add({ name: 'Maria', age: 53 });

export { myDatabaseModule };
