import { validRouterExpressValidator } from '../shared';
import { body } from 'express-validator';

function userCreateMidd() {
  return [
    body('nombre').isString().exists().isLength({min : 2}).withMessage("Minimo dos caracteres"),
    body('apellido').isString().exists().isLength({min : 2}).withMessage("Minimo dos caracteres"),
    body('email').isString().exists().isEmail(),
    body('telefono').isInt().exists().withMessage('Telefono es requerido'),
    validRouterExpressValidator,
  ];
}

export { userCreateMidd as createUserMidd };
