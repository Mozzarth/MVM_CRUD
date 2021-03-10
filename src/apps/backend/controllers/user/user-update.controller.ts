
import { UserUpdateUseCase } from "./../../../app/user/update/application/user-update.usecase";
import { IUserUpdateDto } from "../../../app/user/update/application/user-update.dto";
import { NextFunction, Request, Response } from "express";
import { userUpdateUseCase } from "../../../app/user/update/application";

class UserUpdateController {

    constructor(private userUpdateUseCase: UserUpdateUseCase) { }


    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            let userDto: IUserUpdateDto = req.body
            userDto.id = req.params.id
            const userUpdate = await this.userUpdateUseCase.handle(userDto)
            return res.status(200).send(userUpdate?.toPrimitives())
        } catch (error) {
            throw next(error)
        }
    }
}

const userUpdateController = new UserUpdateController(userUpdateUseCase)
export { userUpdateController }