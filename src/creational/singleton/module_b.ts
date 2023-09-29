import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseModule as myDatabaseModuleA } from './module_a';

const myDatabaseModule = MyDatabaseFunction;
myDatabaseModule.add({ name: 'Rodrigo', age: 30 });
myDatabaseModule.add({ name: 'Simas', age: 54 });
myDatabaseModule.add({ name: 'Turbo', age: 12 });
myDatabaseModule.show();

console.log(myDatabaseModule === myDatabaseModuleA);
