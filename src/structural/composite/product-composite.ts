export abstract class ProductComponent {
  abstract getPrice(): number;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(product: ProductComponent): void {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(
    public name: string,
    public price: number,
  ) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposed extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }
  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

// Client
const skate = new ProductLeaf('skate', 40);
const bicycle = new ProductLeaf('BMX', 400);
const car = new ProductLeaf('Mercedes', 40_000);
const productBox = new ProductComposed();
productBox.add(skate, bicycle, car);

const tablet = new ProductLeaf('Tablet', 2_000);
const kindle = new ProductLeaf('kindle', 300);

const anotherProductBox = new ProductComposed();
anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);

console.log(productBox);
console.log(productBox.getPrice());
