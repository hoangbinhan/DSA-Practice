const encode = (strs) => {
  return strs.map((str) => `${str.length}#${str}`).join("");
};

const decode = (s) => {
  const result = [];
  let i = 0;

  while (i < s.length) {
    let j = i;
    while (s[j] !== "#") j++;

    const len = parseInt(s.slice(i, j));
    result.push(s.slice(j + 1, j + 1 + len));
    i = j + 1 + len;
  }

  return result;
};

console.log(encode(["hello", "world"]));

console.log(decode("5#hello5#world"));
