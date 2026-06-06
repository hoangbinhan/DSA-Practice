const nums = [2, 7, 11, 15],
  target = 9;

const bruteForce = (nums, target) => {
  const length = nums.length;
  if (length < 2) return null;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
};

// const result = bruteForce(nums, target);
// console.log("RESULT:>> ", result);

const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const complement = target - value;

    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(value, i);
  }
  return [];
};

const result = twoSum(nums, target);
console.log("RESULT:>> ", result);
