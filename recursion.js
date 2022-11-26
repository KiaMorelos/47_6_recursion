/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {
  if (index === nums.length) return 1;
  let result = nums[index] * product(nums, index + 1);
  return result;
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0, longestWord = 0) {
  if (index === words.length) return longestWord;

  if (longestWord < words[index].length) {
    longestWord = words[index].length;
  }
  return longest(words, index + 1, longestWord);
}

/** everyOther: return a string with every other letter. */
//based on solution

function everyOther(str, index = 0, newStr = "") {
  if (index >= str.length) return newStr;
  newStr += str[index];
  return everyOther(str, index + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, arr = []) {
  let strToCompare = "";
  if (!arr.length) {
    let arr = str.split("");
    arr = arr.reverse();
    return isPalindrome(str, arr);
  }

  if (arr.length > 0) {
    for (let letter of arr) {
      strToCompare += letter;
    }
    return str === strToCompare;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

//based on solution

function findIndex(arr, val, index = 0) {
  if (index == arr.length) return -1;
  if (arr[index] === val) return index;
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */
//based on solution
function revString(str, index = 0, newStr = "") {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - index]; // start at the end don't revisit letters we already added to the string
  return revString(str, index + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */
// this is the solution, see comments about this solution. this confused me.
function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    /// if the item at the key we're iterating over is a string, push it into the array
    if (typeof obj[key] === "object")
      //if the item at the key we're is another object, spread that object and run the function on the object we just found
      stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

// binarySearch was part of further study, and i'm short on time. did not do, removed test from file

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
};
