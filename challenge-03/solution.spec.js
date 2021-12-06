import { isValid } from './solution';

describe('Challenge 03: El Grinch quiere fastidiar la Navidad!', () =>
  describe('Te letter should be', () => {
    it.each(['bici coche (balón) bici coche peluche', '(muñeca) consola bici'])('valid when input is %p', input => {
      expect(isValid(input)).toBeTruthy();
    });

    it.each(['bici coche (balón bici coche', 'peluche (bici [coche) bici coche balón', '(peluche {) bici', '() bici'])(
      'not valid when input is %p',
      input => {
        expect(isValid(input)).toBeFalsy();
      }
    );
  }));
