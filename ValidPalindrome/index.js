// Problem: Given a string s, return true if it is a palindrome, considering only alphanumeric characters and ignoring case.
// Input:  s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input:  s = "race a car"
// Output: false

// Input:  s = " "
// Output: true
// Explanation: After removing non-alphanumeric characters, s becomes an empty string "" which is considered a palindrome.

const ValidPalindrome = (str) => {
  const cleanedStr = str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, "");

  for (let i = 0; i < cleanedStr.length; i++) {
    let left = i,
      right = cleanedStr.length - i - 1;
    if (cleanedStr[left] !== cleanedStr[right]) return false;
  }
  return true;
};

console.log(
  "ValidPalindrome:>> ",
  ValidPalindrome("A man, a plan, a canal: Panama"),
);

console.log("ValidPalindrome:>> ", ValidPalindrome("race a car"));

console.log("ValidPalindrome:>> ", ValidPalindrome(" "));
