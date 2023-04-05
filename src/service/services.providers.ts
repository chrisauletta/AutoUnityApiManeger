import { Service } from "./service.entity";

export const servicesProviders = [{ provide: 'ServicesRepository', useValue: Service }];
