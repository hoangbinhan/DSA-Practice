// Problem: Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target. Return the indices as an array [index1, index2] (1-indexed), where index1 < index2.
// You must use only O(1) extra space.
// Input:  numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: 2 + 7 = 9, so index1=1, index2=2

// Input:  numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: 2 + 4 = 6

// Input:  numbers = [-1,0], target = -1
// Output: [1,2]

const TwoSum = (arr, target) => {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left + 1, right + 1];

    if (sum > target) {
      right--;
      continue;
    } else if (sum < target) {
      left++;
      continue;
    }
  }
};

// Test cases
const test1 = [2, 7, 11, 15];
console.log("Test 1 RESULT:>> ", TwoSum(test1, 9), "Expected: [1,2]");

const test2 = [2, 3, 4];
console.log("Test 2 RESULT:>> ", TwoSum(test2, 6), "Expected: [1,3]");

const test3 = [-1, 0];
console.log("Test 3 RESULT:>> ", TwoSum(test3, -1), "Expected: [1,2]");

const test4 = [1, 2, 3, 4, 4, 9, 56, 90];
console.log("Test 4 RESULT:>> ", TwoSum(test4, 8), "Expected: [3,4]");

const test5 = [-10, -3, 0, 5, 7, 12, 20, 35];
console.log("Test 5 RESULT:>> ", TwoSum(test5, 17), "Expected: [4,6]");

const test6 = [0, 0, 1, 2, 5, 7, 11, 11, 15];
console.log("Test 6 RESULT:>> ", TwoSum(test6, 22), "Expected: [8,9]");

const test7 = [1, 3, 4, 5, 7, 10, 11];
console.log("Test 7 RESULT:>> ", TwoSum(test7, 9), "Expected: [3,4]");
