import { ICategoriesRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository:ICategoriesRepository){}

    execute({name,description}: IRequest): void{
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Alredy exists!");
        }

        this.categoriesRepository.create({name,description});
    }
}

export {CreateCategoryUseCase};