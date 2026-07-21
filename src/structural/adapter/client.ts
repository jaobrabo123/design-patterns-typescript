import { EmailValidatorClassAdapter } from "./validation/email-validator-class-adapter";
import { emailValidatorFnAdapter } from "./validation/email-validator-fn-adapter";
import {
    EmailValidatorFnProtocol,
    EmailValidatorProtocol,
} from "./validation/email-validator-protocol";

function validaEmailClass(emailValidator: EmailValidatorProtocol, email: string): void {
    if (emailValidator.isEmail(email)) {
        console.log("Email válido");
    } else {
        console.log("Email inválido");
    }
}

validaEmailClass(new EmailValidatorClassAdapter(), "joao@emailcom");

function validaEmailFn(emailValidator: EmailValidatorFnProtocol, email: string): void {
    if (emailValidator(email)) {
        console.log("Email válido");
    } else {
        console.log("Email inválido");
    }
}

validaEmailFn(emailValidatorFnAdapter, "joao@emailcom");
