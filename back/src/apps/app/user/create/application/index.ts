import { FindUserMySqlRepository } from '../../find/infrastructure/user-find.repository';
import { CreateUserMySqlRepository } from '../infrastructure/user-create-mysql.repository';
import { UserCreateUseCase } from './user-create.usecase';

const userCreate = new UserCreateUseCase(
  new CreateUserMySqlRepository(),
  new FindUserMySqlRepository()
);

export { userCreate };
