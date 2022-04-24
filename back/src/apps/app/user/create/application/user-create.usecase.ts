import { CreateUserMySqlRepository } from '../infrastructure/user-create-mysql.repository';
import { FindUserMySqlRepository } from '../../find/infrastructure/user-find.repository';
import { PhoneNumber } from '../../../shared/domain/value-object/PhoneNumber';
import { IFindUserRepository } from '../../find/domain/user-find.repository';
import { EmailAddres } from '../../../shared/domain/value-object/EmailAdress';
import { ICreateUserRepository } from '../domain/user-create.repository';
import { IUserCreateDto } from './user-create.dto';
import { User } from '../domain/user';


export class UserCreateUseCase {
  constructor(
    private createUser: ICreateUserRepository,
    private findUser: IFindUserRepository
  ) { }

  async execute(user: IUserCreateDto, host: string): Promise<User> {
    try {
      const _user = new User({
        email: new EmailAddres(user.email),
        nombre: user.nombre,
        apellido: user.apellido,
        telefono: new PhoneNumber(user.telefono),
      });
      await this.validateExistence(_user.email.toString());
      return await this.createUser.handle(_user);
    } catch (error) { throw error; }
  }

  private async validateExistence(email: string) {
    try {
      const userFind = await this.findUser.byEmail(new EmailAddres(email));
      if (userFind != undefined) { throw new Error(`This email already exists ${email}`); }
      return;
    } catch (error) {
      throw error;
    }
  }
}

const createUserRepository = new CreateUserMySqlRepository();
const findUserRepository = new FindUserMySqlRepository();
const createUserUseCase = new UserCreateUseCase(createUserRepository, findUserRepository);

export { createUserUseCase };
