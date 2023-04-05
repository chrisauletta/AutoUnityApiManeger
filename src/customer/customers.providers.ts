import { Customer } from './customer.entity';

export const customersProviders = [{ provide: 'CustomersRepository', useValue: Customer }];
