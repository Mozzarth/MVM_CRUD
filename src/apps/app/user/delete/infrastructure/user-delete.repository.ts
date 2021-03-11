import sql from '../../../shared/infrastructure/persistence/sql/implements/connectionMySql';
import { UserDeleteRepository } from "../domain/user-delete.repository";
import { Uuid } from "../../../shared/domain/value-object/Uuid";


export class UserDeleteRepositoryMysql implements UserDeleteRepository {
    
    async handle(id: Uuid): Promise<void> {
        const connection = await sql.getConnection();
        try {
            const statament = `update users set active = 0,dateUpdate = now()
                               where idUser = UUID_TO_BIN(?) 
                               and active = 1;`;
            const parameters = [id.value];
            return new Promise((res, rej) => {
                connection.query(statament, parameters, (err, results, fields) => {
                    if (err) {
                        rej(err);
                    }
                    res();
                });
            });
        } catch (error) {
            throw error;
        } finally {
            connection.end();
        }
    }

}