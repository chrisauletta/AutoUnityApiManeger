import { Company } from './company.entity';

export const companyProviders = [{ provide: 'CompanyRepository', useValue: Company }];
