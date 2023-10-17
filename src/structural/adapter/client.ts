import { EmailValidatorAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email is valid (CLASS)');
  } else {
    console.log('Email is invalid (CLASS)');
  }
}
function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Email is valid (FN)');
  } else {
    console.log('Email is invalid (FN)');
  }
}

validaEmailClass(new EmailValidatorAdapter(), 'sergio@gmial.com');
validaEmailFn(emailValidatorFnAdapter, 'sergio@gmial.com');
