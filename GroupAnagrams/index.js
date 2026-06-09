const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
//  [["bat"],["nat","tan"],["ate","eat","tea"]]

const strs1 = [""];
//  [[""]]

const strs2 = ["a"];
//  [["a"]]

// const groupAnagrams = (strs = []) => {
//   const map = new Map();
//   strs
//     .map((v) => v.split("").sort().join(""))
//     .map((item, index) => {
//       if (map.has(item)) {
//         const data = map.get(item) || [];
//         data.push(strs[index]);
//         map.set(item, data);
//       } else {
//         map.set(item, [strs[index]]);
//       }
//       return item;
//     });
//   const data = [...map.values()];
//   return data;
// };

const groupAnagrams = (strs) => {
  const map = new Map();

  for (const str of strs) {
    const key = str.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
    console.log(map);
  }

  return Array.from(map.values());
};

groupAnagrams(strs);
groupAnagrams(strs1);
groupAnagrams(strs2);
