// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`

import cipher from '../src/cipher';

describe('cipher', () => {

  it('cipher debería ser un objeto', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('debería arrojar TypeError cuando se invoca con tipos de argumento incorrectos', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    it('debería retornar "HIJKLMNOPQRSTUVW XYZABCDEFG" para "ABCDEFGHIJKLMNOP QRSTUVWXYZ" con offset 33', () => {
      expect(cipher.encode(33, 'ABCDEFGHIJKLMNOP QRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVW XYZABCDEFG');
    });

    // Hacker edition
    //
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
    //   expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
    // });

    // Hacker edition
    //
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // it('debería retornar " !@" para " !@"', () => {
    //   expect(cipher.encode(33, ' !@')).toBe(' !@');
    // });
  });

  describe('cipher.decode', () => {

    it('debería ser una function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('debería arrojar TypeError cuando se invoca con tipos de argumento incorrectos', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      expect(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
    it('debería retornar "ABCDEFGHIJ KLMNOPQRSTUVWXYZ" para "HIJKLMNOPQ RSTUVWXYZABCDEFG" con offset 33', () => {
      expect(cipher.decode(33, 'HIJKLMNOPQ RSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJ KLMNOPQRSTUVWXYZ');
    });

    //
    // Hacker edition
    //
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
    //   expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
    // });

    // Hacker edition
    //
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // it('debería retornar " !@" para " !@"', () => {
    //   expect(cipher.decode(33, ' !@')).toBe(' !@');
    // });
  });

});
