import sql from '../../../shared/infrastructure/persistence/sql/implements/connectionMySql';
import { IUserUpdateRepository } from "../domain/user-update.repository";
import { User } from "../../create/domain/user";


export class UserUpdateRepositoryMysql implements IUserUpdateRepository {
    
    async handle(user: User): Promise<User> {
        const connection = await sql.getConnection();
        try {
            // console.log(user)
            const statament = `update users
                                set nombre = ? ,
                                    apellido = ? ,
                                    email = ? ,
                                    telefono = ? ,
                                    dateUpdate = now()
                               where idUser = UUID_TO_BIN(?) ;`;
            const parameters = [user.nombre,user.apellido,user.email.toString(),user.telefono.value,user.id.value];
            return new Promise((res, rej) => {
                connection.query(statament, parameters, (err, results, fields) => {
                    if (err) {
                        rej(err);
                    }
                    res(user);
                });
            });
        } catch (error) {
            throw error;
        } finally {
            connection.end();
        }
    }

}