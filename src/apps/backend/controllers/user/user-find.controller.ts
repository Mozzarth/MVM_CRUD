import { UserFindUseCase } from "../../../app/user/find/application/user-find.usecase";
import { Request, NextFunction, Response } from "express";
import { userFindUseCase } from "../../../app/user/find/application";


export class UserFindController {
    constructor(private userFind: UserFindUseCase) { }

    async byEmail(req: Request, res: Response, next: NextFunction) {
        try {
            const email = req.params.email
            const user = await this.userFind.byEmail(email)
            const response = user == undefined ? undefined : user.toPrimitives()
            return res.status(user == undefined ? 204 : 200).json(response);
        } catch (error) { next(error) }
    }
    async byId(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id
            const user = await this.userFind.byId(id)
            const response = user == undefined ? undefined : user.toPrimitives()
            return res.status(user == undefined ? 204 : 200).json(response);
        } catch (error) { next(error) }
    }
    async byName(req: Request, res: Response, next: NextFunction) {
        try {
            const name = req.params.name
            const users = await this.userFind.byName(name)
            const response = users == undefined ?
                undefined : users.map(user => user.toPrimitives())
            return res.status(users == undefined ? 204 : 200).json(response);
        } catch (error) { next(error) }
    }
    async all(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.userFind.all()
            const response = users == undefined ?
                undefined : users.map(user => user.toPrimitives())
            return res.status(users == undefined ? 204 : 200).json(response);
        } catch (error) { next(error) }
    }

}

const userFindController = new UserFindController(userFindUseCase)
export { userFindController }