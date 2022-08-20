import { Category } from "../model/Category";
import { Specification } from "../model/Specification";

interface ICreateSpecificatiosDTO{
    name:string;
    description: string;
}

interface ISpecificatiosRepository {
    findByName(name:string):Specification;
    list():Specification[];
    create({name,description}:ICreateSpecificatiosDTO):void;
}

export {ISpecificatiosRepository,ICreateSpecificatiosDTO};