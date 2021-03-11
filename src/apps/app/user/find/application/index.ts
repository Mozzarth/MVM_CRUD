import { FindUserMySqlRepository } from "../infrastructure/user-find.repository";
import { UserFindUseCase } from "./user-find.usecase";

const userFindRepository = new FindUserMySqlRepository()

const userFindUseCase = new UserFindUseCase(userFindRepository)


export { userFindUseCase }

