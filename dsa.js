// 01.Binarysearch
const recursiveBinarysearch = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);
};
const search = (arr, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (middleIndex == target) {
    return middleIndex;
  }
  if (target) {
    return middleIndex;
  }
};
// console.log(recursiveBinarysearch([-2, 67, 8, 99, 19], 67));

// 02 - find index first occurence in string
const subStrCheck = (mainstr, subStr) => {
  const m = mainstr.length;
  const n = subStr.length;
  for (i = 0; i < m; i++) {
    let flag = true;
    for (j = 0; j < n; j++) {
      if (mainstr[i + j] !== subStr[j]) {
        flag = false;
        break;
      }
    }
    if (flag) return i;
  }
  return -1;
};
// console.log(subStrCheck("leetcodes", "codes"));

//03 selectionsort
const selectionSort = (arr) => {
  for (i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
  // return arr;
};
// console.log(selectionSort([-2, 5, 1000, -7]), "selectionsort");

//04 bubbleSort check right a[i] big swap
const bubbleSort = (a) => {
  for (i = 0; i < a.length; i++) {
    for (j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
};
// console.log(bubbleSort([-2, 5, 1000, -7]), "bubbleSort");

// 05. inselectionSort -check letf arr[j] > arr[i] check j big
const inselectionSort = (arr) => {
  for (i = 0; i < arr.length; i++) {
    const currentIndex = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentIndex) {
      arr[j + 1] = arr[j];
      j--;
      console.log(arr, "arr");
    }
    arr[j + 1] = currentIndex;
  }
  return arr;
};
// console.log(inselectionSort([-2, 5, 100, -7]));

// 06.Mergesort
const margesort = (arr) => {
  // console.log(arr, "leftArr");
  if (arr.length < 2) return arr;
  const midIndex = Math.floor(arr.length / 2);
  const leftArr = margesort(arr.slice(0, midIndex));
  const rightArr = margesort(arr.slice(midIndex));
  return margeFun(leftArr, rightArr);
};
const margeFun = (leftArr, rightArr) => {
  // const result = [];
  // let leftIndex = 0;
  // let rightIndex = 0;
  // console.log(leftArr, rightArr);
  // while (leftArr.length > leftIndex && rightArr.length > rightIndex) {
  //   if (leftArr[leftIndex] < rightArr[rightIndex]) {
  //     result.push(leftArr[leftIndex]);
  //     leftIndex++;
  //   } else {
  //     result.push(rightArr[rightIndex]);
  //     rightIndex++;
  //   }
  // }
  // while (leftArr.length > leftIndex) {
  //   result.push(leftArr[leftIndex]);
  //   leftIndex++;
  // }
  // while (rightArr.length > rightIndex) {
  //   result.push(rightArr[rightIndex]);
  //   rightIndex++;
  // }
  const result = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] <= rightArr[0]) {
      result.push(leftArr.shift());
      // console.log(result, "left");
    } else {
      result.push(rightArr.shift());
      // console.log(result, "right");
    }
    return [...result, ...leftArr, ...rightArr];
  }
};
//logic
//[-2, 5, 100, -7, 8, 1, 45, 99]
//Left
// left<right
// [-2, 5, 100, -7]
// [[-2, 5] [100, -7]]
// [-2] < [100] -2 true take left value
// [5] < [-7] -7
// [-2, -7]
//Right
// [8, 1, 45, 99]
// [[8,1] [45, 99]]
// [45] > [8] 8 suppose true take right value
// [99] > [1 ] 1
// [8, 1]
// [1]
// console.log(margesort([-2, 5, 100, -7, 8, 1, 45, 99]), "final");

// 07 valid Anagram 0 of n
const isAnagram = (s, t) => {
  let map = new Map();
  if (s.length !== t.length) return false;
  // for (i = 0; i < s.length; i++) {
  //   map.set(s[i], (map.get(s[i]) || 0) + 1);
  // }
  // for (i = 0; i < t.length; i++) {
  //   if (!map.has(t[i])) return false;
  //   map.set(t[i], map.get(t[i]) - 1);
  //   if (map.get(t[i]) === 0) map.delete(t[i]);
  // }
  // return map.size === 0;

  //second
  // for (i = 0; i < s.length; i++) {
  //   if (map[s[i]]) map[s[i]]++;
  //   else map[s[i]] = 1;
  // }
  // for (i = 0; i < t.length; i++) {
  //   if (!map[t[i]]) return false;
  //   if (map[t[i]]) map[t[i]]--;
  // }
  // console.log(map);
  // return true;

  //third
  let usedIndices = new Set();
  for (let i = 0; i < s.length; i++) {
    let found = false;
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[j] && !usedIndices.has(j)) {
        usedIndices.add(j);
        found = true;
        break;
      }
    }
    if (!found) return false;
  }
  // { 1 } a
  // i[0]--a == j[0]--n flase j=1
  // i[0]--a == j[1]--a true {1} break j =0, i=1
  // { 1, 0 } a n
  // i[1]--n ==j[0]--n true {1, 0} break j =0, i=2
  // { 1, 0, 3 } a n g
  // i[2]--a == j[0]--n flase j=1
  // i[2]--a == j[1]--a true but we simenteniously check new Set() {1, 0} already 1 is there is false j=3
  // i[2]--a == j[2]--g false j=3
  // i[2]--a == j[3]--a true {1, 0, 3} break j =0, i=3
  // { 1, 0, 3, 2 }
  // { 1, 0, 3, 2, 4 }
  // { 1, 0, 3, 2, 4, 5 }
  // { 1, 0, 3, 2, 4, 5, 6 }
  return true;
};
// console.log(isAnagram("anagram", "nagaram"));

// 08. length  OfLongest Substring
const lengthOfLongestSubstring = (s) => {
  // const currentStr = [];
  // let maxLength = 0;
  // for (let index = 0; index < s.length; index++) {
  //   const element = s[index];
  //   const existingIndex = currentStr.indexOf(element);
  //   if (existingIndex !== -1) {
  //     currentStr.splice(0, index);
  //   }
  //   else{
  //     currentStr.push(element);
  //   }
  //   maxLength = Math.max(maxLength, currentStr.length);
  // }
  // return maxLength
  let start = 0;
  let maxLength = 0;
  const seen = new Map();
  for (let i = 0; i < s.length; i++) {
    if (seen.has(s[i])) {
      start = Math.max(seen.get(s[i]), start);
      console.log(seen.get(s[i]), start, "start");
    }
    seen.set(s[i], i);
    // console.log(i,start, "start");
    maxLength = Math.max(maxLength, i - start);
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("baabgh")); // Output should be 3

// 09. Reverse number
//reverse number 32bit singed (2147483648) values also accepted
var reverseNumber = function (x) {
  let n = Math.abs(x); // nagative value to passitive
  let reversed = 0;
  let maxInt32 = Math.pow(2, 31) - 1;
  let minInt32 = -Math.pow(2, 31);
  while (n > 0) {
    const digist = Math.floor(n % 10);
    reversed = reversed * 10 + digist; // 0
    if (reversed > maxInt32) {
      return 0;
    }
    n = Math.floor(n / 10);
  }
  if (x < 0 || reversed < minInt32 || reversed > maxInt32) {
    return 0;
  }
  return reversed;
  // logic
  //567
  //digist = 7 --Math.floor(n % 10)
  //reversed = reversed * 10 + digist
  //reversed = 0 * 10+ 7 = 7
  //remove 7 -- Math.floor(n / 10)
  // 56
  //digist = 6 
  //reversed = reversed * 10 + digist
  //reversed = 6 * 10 + 7 = 67
  //remove 6
  // 56
  //digist = 6 
  //reversed = reversed * 10 + digist
  //reversed = 6 * 10 + 7 = 67
  //remove 6
};
console.log(reverseNumber(567));
