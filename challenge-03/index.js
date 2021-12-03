const isValid = letter => {
  const hasEmptyParentheses = letter.replace(/\s+/g, '').includes('()');

  const parenthesesSequence = [...letter.replace(/[^\(\)]/g, '')];
  const expectCloseStack = [];
  const hasBalancedParentheses =
    parenthesesSequence.every(b => (b === '(' ? expectCloseStack.push(b) : expectCloseStack.pop())) &&
    !expectCloseStack.length;

  const parenthesesBlocks = letter.match(/(?:\()[^\(\)]*?(?:\))/g);
  const hasWrongCharacters = parenthesesBlocks
    ? parenthesesBlocks.some(b => b.includes('{') || b.includes('['))
    : false;

  return hasBalancedParentheses && !hasEmptyParentheses && !hasWrongCharacters;
};

const firstValidLetter = 'bici coche (balón) bici coche peluche'; // -> ✅
const secondValidLetter = '(muñeca) consola bici'; // -> ✅

const firstInvalidLetter = 'bici coche (balón bici coche'; // -> ❌
const secondInvalidLetter = 'peluche (bici [coche) bici coche balón'; // -> ❌
const thirdInvalidLetter = '(peluche {) bici'; // -> ❌
const fourthInvalidLetter = '() bici'; // -> ❌

console.log("Resultado de isValid('" + firstValidLetter + "'):", isValid(firstValidLetter));
console.log("Resultado de isValid('" + secondValidLetter + "'):", isValid(secondValidLetter));
console.log("Resultado de isValid('" + firstInvalidLetter + "'):", isValid(firstInvalidLetter));
console.log("Resultado de isValid('" + secondInvalidLetter + "'):", isValid(secondInvalidLetter));
console.log("Resultado de isValid('" + thirdInvalidLetter + "'):", isValid(thirdInvalidLetter));
console.log("Resultado de isValid('" + fourthInvalidLetter + "'):", isValid(fourthInvalidLetter));
