import { CEOBudgetHandler } from './ceo-budget-handler';
import { CustomerBudget } from './customer-budget';
import { DirectorBudgetHandler } from './director-budget-handler';
import { ManagerBudgetHandler } from './manager-budget-handler';
import { SellerBudgetHandler } from './seller-budget-handler';

const customerBudget = new CustomerBudget(512000);

const seller = new SellerBudgetHandler();
seller
  .setNext(new ManagerBudgetHandler())
  .setNext(new DirectorBudgetHandler())
  .setNext(new CEOBudgetHandler());

seller.handle(customerBudget);
console.log(customerBudget);
