import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoryRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
    findByName(name: string): Category {
        return null;
    }
    list(): Category[] {
        return null;
    }
    create({name,description}:ICreateCategoryDTO): void {
    }
    
}

export {PostgresCategoriesRepository};