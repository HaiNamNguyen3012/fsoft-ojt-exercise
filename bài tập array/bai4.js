//Input: An array with random element
//Output: An array that have elements appear only one

//create an array with random length
let numOfEl = 50;
let maxVal = 100;
let sourceArray = createRandomArray(numOfEl, maxVal);

//create a new array that an old array elements appear only one
//Cách 1: dùng set
const set1 = new Set(sourceArray);

//Cách 2: không dùng set
const resultArr = [sourceArray[0]];
for(let i = 1; i < sourceArray.length; i++){
    if(!resultArr.includes(sourceArray[i])){
        resultArr.push(sourceArray[i]);
    }
}

//print array
console.log(sourceArray);
console.log(set1);
console.log(resultArr);

function createRandomArray(n, maxVal){
    let randomArray = [];

    for(let i = 0; i < n; i++){
        randomArray.push(Math.floor(Math.random()*maxVal) + 1)
    } 
    return randomArray;
}