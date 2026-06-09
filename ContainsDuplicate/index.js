const nums = [1, 2, 3, 1],
  nums2 = [1, 2, 3, 4],
  nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

const containsDuplicate = (nums) => {
  let dups = {};
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (!dups[value]) dups[value] = 1;
    else return true;
  }
  return false;
};

console.log("RESULT:>> ", containsDuplicate(nums));
console.log("RESULT:>> ", containsDuplicate(nums2));
console.log("RESULT:>> ", containsDuplicate(nums3));
