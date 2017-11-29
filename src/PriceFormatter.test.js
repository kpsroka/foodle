import * as PriceFormatter from './PriceFormatter';

describe('PriceFormatter', () => {
  const LEGAL_STRINGS_AND_VALUES = [
      ['0', 0],
      ['0000000,00', 0],
      ['123,', 12300],
      ['0123.4', 12340],
      ['   00123,45 ', 12345]
  ];

  const ILLEGAL_STRINGS = ['', '    ', '123 123', '123,456', '123abc', 'x'];

  describe('formatPrice', () => {
    test('formats 0 to "0,00 zł"', () => {
      expect(PriceFormatter.formatPrice(0)).toBe('0,00 zł');
    });

    test('formats 123 to "1,23 zł"', () => {
      expect(PriceFormatter.formatPrice(123)).toBe('1,23 zł');
    })
  });

  describe('parsePrice', () => {
    test('parses legal strings to their values', () => {
      LEGAL_STRINGS_AND_VALUES.forEach(
          ([stringInput, numberValue]) => {
            expect(PriceFormatter.parsePrice(stringInput)).toBe(numberValue);
          });
    });

    test('throws Error on illegal strings', () => {
      ILLEGAL_STRINGS.forEach(
          illegalStringInput => {
            expect(() => { PriceFormatter.parsePrice(illegalStringInput); }).toThrow(Error);
          });
    });
  });

  describe('isValidPriceString', () => {
    test('returns true for legal strings', () => {
      LEGAL_STRINGS_AND_VALUES
          .map(entry => entry[0])
          .forEach(stringInput => {
            expect(PriceFormatter.isValidPriceString(stringInput)).toBe(true);
          });
    });

    test('returns false for illegal strings', () => {
      ILLEGAL_STRINGS.forEach(stringInput => {
        expect(PriceFormatter.isValidPriceString(stringInput)).toBe(false);
      });

    });
  });
});
