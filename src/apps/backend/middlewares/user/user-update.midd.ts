import { body, param } from "express-validator";
import { validRouterExpressValidator } from "../shared";


export function userUpdateMidd(){
    return [
        param("id").exists().isUUID().withMessage("id invalido"),
        body('nombre').optional().isString().exists().isLength({ min: 2 }).withMessage("Minimo dos caracteres"),
        body('apellido').optional().isString().exists().isLength({ min: 2 }).withMessage("Minimo dos caracteres"),
        body('email').optional().isString().exists().isEmail(),
        body('telefono').optional().isInt().exists().withMessage('Telefono es requerido'),
        validRouterExpressValidator
    ]
}