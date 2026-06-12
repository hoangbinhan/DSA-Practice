const nums = [1, 2, 3, 4],
  nums2 = [-1, 1, 0, -3, 3];

const productOfArrayExceptSelf = (nums) => {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i] === 0 ? 1 : nums[i];
    product *= value;
  }
  const result = nums.map((item) => (item === 0 ? 0 : product / item));
  console.log("result", result);
};

productOfArrayExceptSelf(nums);
productOfArrayExceptSelf(nums2);
