// Input:  ["leet", "code", "love", "you"]
// encode → some single string
// decode → ["leet", "code", "love", "you"]

function encode(strs) {
  const data = strs.join(",");
  return btoa(data);
}

function decode(str) {
  return atob(str).split(",");
}

let strs = ["leet", "code", "love", "you"];
let encodeData = encode(strs);
console.log("encodeData", encodeData);
let decodeData = decode(encodeData);
console.log("decodeData", decodeData);
