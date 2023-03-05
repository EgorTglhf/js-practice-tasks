export default function decode(exp) {
  let result = '';
  let openBracketIndex = 0;
  let closeBracketIndex = 0;
  let multiplier = 0;
  let multiplierIndex = 0;

  while (true) {
    if (exp.search('\\[') === -1) break; // exit if there is no a bracket

    [openBracketIndex, closeBracketIndex] = searchCloseBracket(exp); // search a pair of brackets

    multiplierIndex = getIndexMultiplier(exp, openBracketIndex);
    multiplier = exp.slice(multiplierIndex, openBracketIndex); // take a count before a bracket

    result = exp.slice(0, multiplierIndex); // take a part before count before bracket
    result += exp
      .slice(openBracketIndex + 1, closeBracketIndex)
      .repeat(multiplier); // concatenate brackets inner
    result += exp.slice(closeBracketIndex + 1); // concatenate a part after brackets

    exp = result;
    result = '';
  }

  return exp;
}

function searchCloseBracket(exp) {
  const stack = [];
  let openBracketIndex = 0;
  let closeBracketIndex = 0;
  for (let i in exp) {
    if (exp[i] !== '[' && exp[i] !== ']') continue;

    if (exp[i] === '[') {
      if (stack.length === 0) openBracketIndex = i;
      stack.push('[');
    }
    if (exp[i] === ']' && stack[stack.length - 1] === '[') {
      stack.pop();
      if (stack.length === 0) {
        closeBracketIndex = i;
        break;
      }
    }
  }

  return [Number(openBracketIndex), Number(closeBracketIndex)];
}

function getIndexMultiplier(exp, indexBracket) {
  let indexMultiplier = indexBracket - 1;

  while (!isNaN(parseInt(exp[indexMultiplier - 1]))) {
    indexMultiplier -= 1;
  }

  return indexMultiplier;
}
