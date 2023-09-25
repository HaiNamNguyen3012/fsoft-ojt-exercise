//input: 2 arrays
//output: an array of the same elements in two arrays

//Create 2 arrays with random values
let sizeOfArray = 10;
let maxVal = 10;

let a = createRandomArray(sizeOfArray, maxVal);
console.log(a);
let b = createRandomArray(sizeOfArray, maxVal);
console.log(a);
//Find list of common elements
let c = findCommonElement(a, b);

//Print the list
console.log(a);
console.log(b);
printArray(`Array: ${c}`);

function printArray(arr) {
  if (arr === null) return;
  console.log(arr);
}
function findCommonElement(arr1, arr2) {
  let resultArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        resultArr.push(arr1[i]);
        break;
      }
    }
  }
  return resultArr;
}

function createRandomArray(n, maxVal) {
  let randomArray = [];

  for (let i = 0; i < n; i++) {
    randomArray.push(Math.floor(Math.random() * maxVal) + 1);
  }
  return randomArray;
}
