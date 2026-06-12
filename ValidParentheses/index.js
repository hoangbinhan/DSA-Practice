const VALUE = {
  "(": ")",
  "{": "}",
  "[": "]",
};

const validParentheses = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const value = s[i];
    if (VALUE[value]) stack.push(value);
    else {
      const pop = stack.pop();
      if (VALUE[pop] !== value) return false;
    }
  }
  return true;
};

const s = "()";
console.log("RESULT", validParentheses(s));

const s1 = "()[]{}";
console.log("RESULT", validParentheses(s1));

const s2 = "(]";
console.log("RESULT", validParentheses(s2));

const s3 = "([)]";
console.log("RESULT", validParentheses(s3));

const s4 = "{[]}";
console.log("RESULT", validParentheses(s4));
