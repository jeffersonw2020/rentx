import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

interface ICreateSpecificatiosDTO {
  name: string;
  description: string;
}

interface ISpecificatiosRepository {
  findByName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
  create({ name, description }: ICreateSpecificatiosDTO): Promise<void>;
}

export { ISpecificatiosRepository, ICreateSpecificatiosDTO };
