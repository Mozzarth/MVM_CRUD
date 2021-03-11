import { param } from "express-validator";



export function userDeleteMidd(){
    return [
            param("id").exists().isUUID().withMessage("Id invalido")
    ]
}