import { EmailAddres } from "../../../shared/domain/value-object/EmailAdress";
import { IFindUserRepository } from "../domain/user-find.repository";
import { Uuid } from "./../../../shared/domain/value-object/Uuid";


export class UserFindUseCase {
    
    constructor(private userFind: IFindUserRepository) { }

    async byEmail(email: string) {
        try {
            return this.userFind.byEmail(new EmailAddres(email))
        } catch (error) { throw error }
    }

    async byId(id: string) {
        try {
            return this.userFind.byId(new Uuid(id))
        } catch (error) { throw error }
    }
    async byName(name: string) {
        try {
            return this.userFind.byName(name)
        } catch (error) { throw error }
    }
    async all() {
        try { return this.userFind.all() }
        catch (error) { throw error }
    }

}