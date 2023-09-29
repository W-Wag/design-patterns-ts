import { User } from '../interfaces/users';

export class MyDatabaseClassic {
  private static _instace: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instace === null) {
      MyDatabaseClassic._instace = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instace;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
