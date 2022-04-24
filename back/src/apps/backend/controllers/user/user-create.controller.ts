import { UserCreateUseCase } from '../../../app/user/create/application/user-create.usecase';
import { createUserUseCase } from '../../../app/user/create/application/user-create.usecase';
import { IUserCreateDto } from '../../../app/user/create/application/user-create.dto';
import { NextFunction, Request, Response } from 'express';

class CreateUserController {
  constructor(private createUser: UserCreateUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const user: IUserCreateDto = req.body;
      const host = `${req.protocol}://${req.get('host')}/api/user/active`;
      const userCreated = await this.createUser.execute(user, host);
      let response: any = userCreated.toPrimitives();
      delete response.password;
      return res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
}

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
