export interface IBaseService<T> {
    
    getAll(): Promise<T[]>;
    // get(id: number): Promise<T>;
    update(entity: T): Promise<T>;
    create(entity: T, user): Promise<number>;
    delete(id: number);
    findByParameter(column, value, table, search);
}