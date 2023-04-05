import { Vehicle } from './vehicle.entity';

export const vehiclesProviders = [{ provide: 'VehiclesRepository', useValue: Vehicle }];
