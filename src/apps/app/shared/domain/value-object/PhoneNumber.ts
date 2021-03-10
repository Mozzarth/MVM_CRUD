import { InvalidArgumentError } from "./invalidArgumentError"


// Value Object
export class PhoneNumber {

    public readonly value: number

    constructor(numero: number) {
        this.isValidNumber(numero)
        this.value = numero
    }
    private isValidNumber(numero: number) {
        if (isNaN(numero)) { throw new InvalidArgumentError(`No es un numero valido ${numero}`) }
    }

    public toEqual(number: number) {
        return this.value == number
    }
    public toString(): string {
        return this.value.toString()
    }

}