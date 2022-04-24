import { validRouterExpressValidator } from "../shared"
import { param } from "express-validator"

function userFindByEmailMidd(){
    return [
        param("email").exists().isEmail().withMessage("Email no valido"),
        validRouterExpressValidator
    ]
}
function userFindByIdMidd(){
    return [
        param("id").exists().isUUID().withMessage("UUID no valido"),
        validRouterExpressValidator
    ]
}
function userFindByNameMidd(){
    return [
        param("name")
        .exists()
        .isString()
        .isLength({min : 1})
        .withMessage("Nombre por lo menos un caracter"),
        validRouterExpressValidator
    ]
}

export {
    userFindByIdMidd,
    userFindByNameMidd,
    userFindByEmailMidd
}