import { Specification } from "../../model/Specification";
import { ISpecificatiosRepository,ICreateSpecificatiosDTO } from "../ISpecificatiosRepository";


class SpecificationsRepository implements ISpecificatiosRepository{

    private specificatios:Specification[];

    private static INSTANCE: SpecificationsRepository;

    private constructor(){
        this.specificatios = [];
    }

    public static getInstance():SpecificationsRepository{
        if(!SpecificationsRepository.INSTANCE){
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }

        return SpecificationsRepository.INSTANCE;
    }

    create({name,description}:ICreateSpecificatiosDTO): void{
        const specification = new Specification(); 

        Object.assign(specification,{
            name,
            description,
            created_at: new Date()
        });
    

        this.specificatios.push(specification);
    }

    list(): Specification[] {
        return this.specificatios;
    }

    findByName(name:string):Specification{
        const specification = this.specificatios.find((specification) => specification.name === name);
        return specification;
    }
}

export {SpecificationsRepository};