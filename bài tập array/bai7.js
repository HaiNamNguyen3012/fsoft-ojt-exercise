// Input: an array
// Output: a new object count how many times the element appear
//create an array with random length
let arr1 = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'];

//Create a new array of elements that appear more than once in array 1 and don't have any element appear more than one time
let result = getDuplicate(arr1);

//print result
console.log(result);

function getDuplicate(arr){
    let count = {};

    // Count the occurrences of each element in arr
    for(let i = 0; i < arr.length; i++){
        if(count[arr[i]]){
            count[arr[i]]++;
        } else{
            count[arr[i]] = 1;
        }
    }
    return count;
}