import { UserDeleteUseCase } from "../../../app/user/delete/application/user-delete.usecase";
import { userDeleteUseCase } from "../../../app/user/delete/application";
import { Request, NextFunction, Response } from "express";


class UserDeleteController {
    
    constructor(private userDeleteUse: UserDeleteUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id
            await this.userDeleteUse.handle(id)
            return res.status(200).send()
        } catch (error) {
            next(error)
        }
    }
}


const userDeleteController = new UserDeleteController(userDeleteUseCase)
export { userDeleteController }