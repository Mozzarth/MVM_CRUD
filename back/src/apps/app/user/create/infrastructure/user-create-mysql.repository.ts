import sql from '../../../shared/infrastructure/persistence/sql/implements/connectionMySql';
import { ICreateUserRepository } from '../domain/user-create.repository';
import { User } from '../domain/user';

export class CreateUserMySqlRepository implements ICreateUserRepository {
  
  async handle(user: User): Promise<User> {
    const connection = await sql.getConnection();
    try {
      const statament = `insert into users(idUser,nombre,apellido,email,telefono,active,created) values ( UUID_TO_BIN(?),?,?,?,?,?,now() );`;
      const parameters = [user.id.value,user.nombre,user.apellido ,user.email.toString(),user.telefono.value,1];
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
