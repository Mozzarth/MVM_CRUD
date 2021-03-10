import { EmailAddres } from '../../../shared/domain/value-object/EmailAdress';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { User } from '../../create/domain/user';

export interface IFindUserRepository {
  byEmail(email: EmailAddres): Promise<User | undefined>;
  byId(id: Uuid): Promise<User | undefined>;
  byName(name : string): Promise<User[] | undefined>;
  all(): Promise<User[] | undefined>;
}
