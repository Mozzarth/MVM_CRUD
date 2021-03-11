import { User } from "../../create/domain/user";


export interface IUserUpdateRepository {
    handle(user: User): Promise<User>
}