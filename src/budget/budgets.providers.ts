import { Budget } from "./budget.entity";

export const budgetsProviders = [{ provide: 'BudgetsRepository', useValue: Budget }];
