import { ISpecificatiosRepository } from "../../repositories/ISpecificatiosRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository:ISpecificatiosRepository){}

    execute({name,description}: IRequest): void{
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification Alredy exists!");
        }

        this.specificationsRepository.create({name,description});
    }
}

export {CreateSpecificationUseCase};