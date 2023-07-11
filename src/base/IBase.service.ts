export interface IBaseService<T> {
    
    getAll(): Promise<T[]>;
    getByPk(id: number): Promise<T>;
    update(entity: T): Promise<T>;
    create(entity: T, user): Promise<number>;
    delete(id: number);
    findByParameter(column, value, table, search);
}