// Constants
import constants from './contants/password-generator.constants';
// Types
import { PasswordGeneratorOptionsType } from './types/password-generator-options.type';

export function generatePassword(length: number, options: PasswordGeneratorOptionsType): string {
  let caracteres: string = ``;
  
  if(options.letters) caracteres = `${caracteres+constants.LOWERCASE+constants.UPPERCASE}`;
  if(options.numbers) caracteres = `${caracteres+constants.NUMBERS}`;
  if(options.special_characters) caracteres = `${caracteres+constants.SPECIAL_CHARACTERS}`;

  let cadenaGenerada: string = '';

  for (let i = 0; i < length; i++) {
    const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    cadenaGenerada += caracterAleatorio;
  }

  return cadenaGenerada;
}