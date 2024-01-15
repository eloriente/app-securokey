// Vendors
import { expect, describe, it } from 'vitest';
// Utils
import { generatePassword } from '../passwordGenerator.util';
import { verifyPasswordContent } from '../../verify-password-content/verify-password-content.util';
// Types
import { PasswordGeneratorOptionsType } from '../types/password-generator-options.type';
// Constants
import constants from '../contants/password-generator.constants';

describe('App / Utils / PasswordGenerator', () => {

  const length: number = 12;

  it('should return a password with 12 caracters', () => {
    const options: PasswordGeneratorOptionsType = {
      letters: true,
      numbers: true,
      special_characters: true
    }
    const password = generatePassword(length, options);

    expect(password).toHaveLength(length);
  });

  it('should return a password with letters only', () => {
    const options: PasswordGeneratorOptionsType = {
      letters: true,
      numbers: false,
      special_characters: false
    };
    const password = generatePassword(length, options);
    const verifiedPassword = verifyPasswordContent(password, constants.LOWERCASE+constants.UPPERCASE);

    expect(verifiedPassword).toBe(true);
  });

  it('should return a password with numbers only', () => {
    const options: PasswordGeneratorOptionsType = {
      letters: false,
      numbers: true,
      special_characters: false
    };
    const password = generatePassword(length, options);
    const verifiedPassword = verifyPasswordContent(password, constants.NUMBERS);

    expect(verifiedPassword).toBe(true);
  });

  it('should return a password with special characters only', () => {
    const options: PasswordGeneratorOptionsType = {
      letters: false,
      numbers: false,
      special_characters: true
    };
    const password = generatePassword(length, options);
    const verifiedPassword = verifyPasswordContent(password, constants.SPECIAL_CHARACTERS);

    expect(verifiedPassword).toBe(true);
  });

  it('should return a password with all the options', () => {
    const options: PasswordGeneratorOptionsType = {
      letters: true,
      numbers: true,
      special_characters: true
    };
    const password = generatePassword(length, options);
    const verifiedLettersPassword = verifyPasswordContent(password, constants.LOWERCASE+constants.UPPERCASE);
    const verifiedNumbersPassword = verifyPasswordContent(password, constants.NUMBERS);
    const verifiedSpecialCharactersPassword = verifyPasswordContent(password, constants.SPECIAL_CHARACTERS);

    const verifiedPassword = (verifiedLettersPassword && verifiedNumbersPassword && verifiedSpecialCharactersPassword)
      ? true : false;

    expect(verifiedPassword).toBe(true);
  });
});