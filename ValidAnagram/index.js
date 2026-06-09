const s = "anagram",
  t = "nagaram";

const checkAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  let objS = {},
    objT = {};
  for (let i = 0; i < s.length; i++) {
    console.log("s[i]", s[i]);
    if (!objS[s[i]]) {
      objS[s[i]] = 1;
    } else objS[s[i]] = objS[s[i]] + 1;

    if (!objT[t[i]]) {
      objT[t[i]] = 1;
    } else objT[t[i]] = objT[t[i]] + 1;
  }

  const keys = Object.keys(objS);
  for (let i = 0; i < keys.length; i++) {
    if (objS[keys[i]] !== objT[keys[i]]) return false;
  }
  return true;
};

const checkAnagramV2 = (s, t) => {
  if (s.length !== t.length) return false;
  const count = {};
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
    count[t[i]] = (count[t[i]] || 0) - 1;
  }
  console.log("count", count);
  return Object.values(count).every((v) => v === 0);
};

const result = checkAnagramV2(s, t);
console.log("RESULT:>> ", result);
