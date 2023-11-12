import { CustomerBudget } from './customer-budget';

export abstract class BaseBudgetHandler {
  protected next: BaseBudgetHandler | null = null;

  setNext(handler: BaseBudgetHandler): BaseBudgetHandler {
    this.next = handler;
    return handler;
  }
  handle(budget: CustomerBudget): CustomerBudget {
    if (this.next) return this.next.handle(budget);
    return budget;
  }
}
