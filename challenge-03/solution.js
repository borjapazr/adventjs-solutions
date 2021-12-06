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

export { isValid };
