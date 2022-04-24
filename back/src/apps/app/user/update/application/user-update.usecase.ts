import { EmailAddres } from "../../../shared/domain/value-object/EmailAdress";
import { PhoneNumber } from "../../../shared/domain/value-object/PhoneNumber";
import { IFindUserRepository } from "../../find/domain/user-find.repository";
import { IUserUpdateRepository } from "../domain/user-update.repository";
import { Uuid } from "./../../../shared/domain/value-object/Uuid";
import { IUserUpdateDto } from "./user-update.dto";
import { User } from "../../create/domain/user";


export class UserUpdateUseCase {

    constructor(private userFind: IFindUserRepository,
        private userUpdate: IUserUpdateRepository) {

    }

    async handle(params: IUserUpdateDto) : Promise<User> {
        try {
            const id = new Uuid(params.id)
            let user = await this.validUserExistence(id)
            const _userUpdate = new User({
                id : id,
                active : true,
                nombre : params.nombre || user.nombre,
                apellido : params.apellido || user.apellido,
                email : new EmailAddres(params.email || user.email.toString()),
                telefono : new PhoneNumber(params.telefono || user.telefono.value)
            })
            return this.userUpdate.handle(_userUpdate)
        } catch (error) {
            throw error
        }
    }

    private async validUserExistence(id: Uuid) {
        try {
            const user = await this.userFind.byId(id)
            if (user == undefined) { throw new Error("Usuario no encontrado"); }
            return user
        } catch (error) {
            throw error
        }
    }
}