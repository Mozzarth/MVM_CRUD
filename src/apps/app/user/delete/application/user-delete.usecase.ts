import { UserDeleteRepository } from "../domain/user-delete.repository";
import { Uuid } from "../../../shared/domain/value-object/Uuid";


export class UserDeleteUseCase {

    constructor(private userDelete: UserDeleteRepository){

    }
    async handle(id : string){
        try {
            return this.userDelete.handle(new Uuid(id))
        } catch (error) {
            throw error
        }
    }
}