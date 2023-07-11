import { Budget } from "./entitys/budget.entity";

export const budgetsProviders = [{ provide: 'BudgetsRepository', useValue: Budget }];
