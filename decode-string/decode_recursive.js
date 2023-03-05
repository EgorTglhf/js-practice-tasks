export default function decodeString(exp) {
  const mapBracket = getMapBracket(exp);

  return decode(exp, 0, exp.length - 1, mapBracket);
}

function getMapBracket(exp) {
  // function return map open_bracket_index => close_bracket_index
  const stack = [];
  const mapBracket = new Map();
  for (let i in exp) {
    if (exp[i] === '[') {
      stack.push(parseInt(i));
    }
    if (exp[i] === ']') {
      mapBracket.set(stack.pop(), parseInt(i));
    }
  }

  return mapBracket;
}

function decode(exp, startIndex, endIndex, mapBracket) {
  let i = 0;
  let resultString = '';
  let resultStringInner = '';
  let multiplierString = '';
  let rightBracketIndex = 0;

  for (i = startIndex; i <= endIndex; i++) {
    if (exp[i] === '[') {
      // if char is open_bracket recutsive call decode for inner string for bracket pair
      rightBracketIndex = mapBracket.get(parseInt(i));
      resultStringInner = decode(
        exp,
        parseInt(i) + 1,
        rightBracketIndex - 1,
        mapBracket
      );
      resultString += resultStringInner.repeat(parseInt(multiplierString));
      multiplierString = '';
      i = rightBracketIndex;
    } else if (isNaN(parseInt(exp[i]))) {
      // if char is a symbol add it to result_string
      resultString += exp[i];
    } else if (!isNaN(parseInt(exp[i]))) {
      // if char is a number add it to multiplier_string
      multiplierString += exp[i];
    }
  }

  return resultString;
}
