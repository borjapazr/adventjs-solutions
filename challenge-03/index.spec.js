const isValid = letter => {
  const hasEmptyParentheses = letter.replace(/\s+/g, '').includes('()');

  const parenthesesSequence = [...letter.replace(/[^()]/g, '')];
  const expectCloseStack = [];
  const hasBalancedParentheses =
    parenthesesSequence.every(b => (b === '(' ? expectCloseStack.push(b) : expectCloseStack.pop())) &&
    !expectCloseStack.length;

  const parenthesesBlocks = letter.match(/(?:\()[^()]*?(?:\))/g);
  const hasWrongCharacters = parenthesesBlocks
    ? parenthesesBlocks.some(b => b.includes('{') || b.includes('['))
    : false;

  return hasBalancedParentheses && !hasEmptyParentheses && !hasWrongCharacters;
};

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
