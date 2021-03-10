import { userFindByEmailMidd, userFindByIdMidd, userFindByNameMidd } from '../middlewares/user/user-find.midd';
import { createUserController } from '../controllers/user/user-create.controller';
import { userDeleteController } from '../controllers/user/user-delete.controller';
import { userFindController } from '../controllers/user/user-find.controller';
import { createUserMidd } from '../middlewares/user/user-create.midd';
import { userDeleteMidd } from '../middlewares/user/user-delete.midd';
import { Router } from 'express';
import { userUpdateController } from '../controllers/user/user-update.controller';
import { userUpdateMidd } from '../middlewares/user/user-update.midd';

const userRouter = Router();

userRouter.post('', createUserMidd(), createUserController.handle.bind(createUserController));

userRouter.get('/id/:id', userFindByIdMidd(), userFindController.byId.bind(userFindController))
userRouter.get('/email/:email', userFindByEmailMidd(), userFindController.byEmail.bind(userFindController))
userRouter.get('/name/:name', userFindByNameMidd(), userFindController.byName.bind(userFindController))
userRouter.get('', userFindController.all.bind(userFindController))
userRouter.delete('/:id', userDeleteMidd(), userDeleteController.handle.bind(userDeleteController))
userRouter.put('/:id', userUpdateMidd(), userUpdateController.handle.bind(userUpdateController))

export { userRouter };
