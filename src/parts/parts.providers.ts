import { Part } from "./part.entity";

export const partsProviders = [{ provide: 'PartsRepository', useValue: Part }];
