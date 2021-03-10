import sql from '../../../shared/infrastructure/persistence/sql/implements/connectionMySql';
import { EmailAddres } from '../../../shared/domain/value-object/EmailAdress';
import { PhoneNumber } from '../../../shared/domain/value-object/PhoneNumber';
import { IFindUserRepository } from '../domain/user-find.repository';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { User } from '../../create/domain/user';

type queryResponse = { idUSer: string; nombre: string, apellido: string, telefono: number, email: string; active: Buffer } | undefined;

export class FindUserMySqlRepository implements IFindUserRepository {
  
  async all(): Promise<User[] | undefined> {
    const connection = await sql.getConnection();
    try {
      return new Promise((res, rej) => {
        connection.query(
          `SELECT
            BIN_TO_UUID(idUSer) as idUSer,
            nombre,apellido
            email,telefono,
            active
           FROM users 
           where active = 1`,
          (error, result: queryResponse[], field) => {
            if (error) {
              return rej(error);
            }
            if (result[0] == undefined) {
              return res(result[0]);
            }
            const users: User[] = []
            result.forEach((user: any) => {
              const _user = new User({
                id: new Uuid(user.idUSer),
                nombre: user.nombre,
                apellido: user.apellido,
                telefono: new PhoneNumber(user.telefono),
                email: new EmailAddres(user.email),
                active: user.active.lastIndexOf(1) !== -1,
              });
              users.push(_user)
            })
            res(users);
          }
        );
      });
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }

  async byName(name: string): Promise<User[] | undefined> {
    const connection = await sql.getConnection();
    try {
      return new Promise((res, rej) => {
        connection.query(
          `SELECT
            BIN_TO_UUID(idUSer) as idUSer,
            nombre,apellido
            email,telefono,
            active
           FROM users 
           where nombre LIKE '%${name}%' and active = 1;`,
          (error, result: queryResponse[], field) => {
            if (error) {
              return rej(error);
            }
            if (result[0] == undefined) {
              return res(result[0]);
            }
            const users: User[] = []
            result.forEach((user: any) => {
              const _user = new User({
                id: new Uuid(user.idUSer),
                nombre: user.nombre,
                apellido: user.apellido,
                telefono: new PhoneNumber(user.telefono),
                email: new EmailAddres(user.email),
                active: user.active.lastIndexOf(1) !== -1,
              });
              users.push(_user)
            })
            res(users);
          }
        );
      });
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }
  async byId(id: Uuid): Promise<User | undefined> {
    const connection = await sql.getConnection();
    try {
      return new Promise((res, rej) => {
        connection.query(
          `SELECT
            BIN_TO_UUID(idUSer) as idUSer,
            nombre,apellido,
            email,telefono,
            active
           FROM users 
           where idUser = UUID_TO_BIN(?)
           and active = 1 ;`,
          [id.value],
          (error, result: queryResponse[], field) => {
            if (error) {
              return rej(error);
            }
            if (result[0] == undefined) {
              return res(result[0]);
            }
            const user = new User({
              id: new Uuid(result[0].idUSer),
              nombre: result[0].nombre,
              apellido: result[0].apellido,
              telefono: new PhoneNumber(result[0].telefono),
              email: new EmailAddres(result[0].email),
              active: result[0].active.lastIndexOf(1) !== -1,
            });
            res(user);
          }
        );
      });
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }

  async byEmail(email: EmailAddres): Promise<User | undefined> {
    const connection = await sql.getConnection();
    try {
      return new Promise((res, rej) => {
        connection.query(
          `SELECT
            BIN_TO_UUID(idUSer) as idUSer,
            nombre,apellido
            email,telefono,
            active
            FROM users where email = ?
            and active = 1;`,
            [email.toString()],
          (error, result: queryResponse[], field) => {
            if (error) {
              return rej(error);
            }
            if (result[0] == undefined) {
              return res(result[0]);
            }
            const user = new User({
              id: new Uuid(result[0].idUSer),
              nombre: result[0].nombre,
              apellido: result[0].apellido,
              telefono: new PhoneNumber(result[0].telefono),
              email: new EmailAddres(result[0].email),
              active: result[0].active.lastIndexOf(1) !== -1,
            });
            res(user);
          }
        );
      });
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }

}
