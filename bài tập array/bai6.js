// Input: an array
// Output: a new array of elements that appear more than once in arr1 and element appear one time in this array

//create an array with random length
let numOfEl = 50;
let maxVal = 100;
let arr1 = createRandomArray(numOfEl, maxVal);

//Create a new array of elements that appear more than once in array 1 and don't have any element appear more than one time
let result = getDuplicate(arr1);

//print result
console.log(result);

function getDuplicate(arr){
    let count = {};
    let duplicates = [];

    // Count the occurrences of each element in arr
    for(let i = 0; i < arr.length; i++){
        if(count[arr[i]]){
            count[arr[i]]++;
        } else{
            count[arr[i]] = 1;
        }
    }
    console.log(count);
    duplicates = arr1.filter((element) => count[element] > 1);

    duplicates = [...new Set(duplicates)];
    return duplicates;
}

function createRandomArray(n, maxVal){
    let randomArray = [];

    for(let i = 0; i < n; i++){
        randomArray.push(Math.floor(Math.random()*maxVal) + 1)
    } 
    return randomArray;
}