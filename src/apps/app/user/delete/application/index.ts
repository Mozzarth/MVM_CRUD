import { UserDeleteRepositoryMysql } from "../infrastructure/user-delete.repository";
import { UserDeleteUseCase } from "./user-delete.usecase";

const userDeleteRepositroy = new UserDeleteRepositoryMysql()
const userDeleteUseCase = new UserDeleteUseCase(userDeleteRepositroy)

export { userDeleteUseCase }