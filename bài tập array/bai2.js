//input: an array
//output: 2 elements have a greatest sum

//Create an array with random values
let numOfEl = 50;
let maxVal = 100;
let sourceArray = createRandomArray(numOfEl, maxVal);
//find 2 elements have a greatest sum
let resultArr = findTwoElementHaveGreatestSum(sourceArray);

//print 2 elements
console.log(resultArr);

function findTwoElementHaveGreatestSum(arr){
    let sortedArray = arr.sort((a, b) => b - a);
    let twoGreatestElements = sortedArray.slice(0,2);
    return twoGreatestElements
}

function createRandomArray(n, maxVal){
    let randomArray = [];

    for(let i = 0; i < n; i++){
        randomArray.push(Math.floor(Math.random()*maxVal) + 1);
    }
    return randomArray;
}