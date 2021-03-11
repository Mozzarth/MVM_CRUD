
import { Uuid } from "./../../../shared/domain/value-object/Uuid";

export interface UserDeleteRepository {
    handle(id : Uuid):Promise<void>
}