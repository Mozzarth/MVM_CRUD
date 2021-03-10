import { EmailAddres } from '../../../shared/domain/value-object/EmailAdress';
import { PhoneNumber } from '../../../shared/domain/value-object/PhoneNumber';
import { Uuid } from '../../../shared/domain/value-object/Uuid';

type parameters = { id?: Uuid; nombre : string, apellido : string, email: EmailAddres;telefono: PhoneNumber; active?: boolean };

export class User {
  public readonly id: Uuid;
  public readonly nombre : string;
  public readonly apellido: string;
  public readonly email: EmailAddres;
  public readonly telefono: PhoneNumber;

  public readonly active: boolean;

  constructor(params: parameters) {
    this.id = params.id == undefined ? Uuid.random() : params.id;
    this.nombre = params.nombre;
    this.apellido = params.apellido
    this.email = params.email;
    this.telefono = params.telefono
    this.active = params.active || false;
  }
  
  toPrimitives() {
    return {
      id: this.id.value,
      nombre: this.nombre,
      apellido : this.apellido,
      email: this.email.toString(),
      phoneNumber : this.telefono.value,
      active: this.active,
    };
  }
}
