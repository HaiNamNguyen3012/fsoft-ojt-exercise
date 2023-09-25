//input: an array

//output: an array of pair element whose sum is equal to a given number

//create an array with random length
let numOfEl = 10;
let maxVal = 20;
let sourceArray = createRandomArray(numOfEl, maxVal);

//find pair element whose sum is equal to a given number
let targetSum = 20;

let targetArray = findPairWithSum(sourceArray, targetSum);

// print array
console.log(targetArray);

function findPairWithSum(arr, sum){
    const result = [];
    const hash = {};
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === sum){
                result.push([arr[i], arr[j]]);
            }
        }
    }
    return result;
}
function createRandomArray(n, maxVal){
    let randomArray = [];

    for(let i = 0; i < n; i++){
        randomArray.push(Math.floor(Math.random()*maxVal) + 1)
    } 
    return randomArray;
}