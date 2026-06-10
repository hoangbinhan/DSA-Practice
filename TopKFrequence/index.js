let nums = [6, 5, 5, 5, 5, 8, 11, 23, 34653, 1, 1, 1, 2, 2, 3],
  k = 2;

const topFrequent = (nums, k) => {
  //   const map = new Map();
  //   for (const num of nums) {
  //     map.set(num, (map.get(num) || 0) + 1);
  //   }
  //   return [...map.entries()]
  //     .sort((a, b) => b[1] - a[1])
  //     .slice(0, k)
  //     .map(([num]) => num);

  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, freq] of freqMap) {
    console.log("[num, freq]", [num, freq]);
    buckets[freq].push(num);
  }
  console.log("buckets", buckets);

  const result = [];
  for (let i = buckets.length - 1; i >= 0; i--) {
    for (const num of buckets[i]) {
      result.push(num);
      if (result.length === k) return result;
    }
  }
};

console.log("RESULT:>>", topFrequent(nums, k));
