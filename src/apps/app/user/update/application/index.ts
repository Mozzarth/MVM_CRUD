import { FindUserMySqlRepository } from "../../find/infrastructure/user-find.repository";
import { UserUpdateRepositoryMysql } from "./../infrastructure/user-update-mysql.repository";
import { UserUpdateUseCase } from "./user-update.usecase";


const userFind = new FindUserMySqlRepository()
const userUpdate = new UserUpdateRepositoryMysql()
const userUpdateUseCase = new UserUpdateUseCase(userFind, userUpdate)

export { userUpdateUseCase }