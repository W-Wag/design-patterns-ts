import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructure;
console.log('Roubados:', a, b);
console.log();
console.log('EXECUTEI VÁRIAS COISAS E DEPOIS USE O ITERATOR');
const [c, ...rest] = dataStructure;
console.log(c, ...rest);
console.log();

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();

dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}
console.log();

console.log('Aqui preciso zerar o iterator para faze-lo funcionar');
dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
