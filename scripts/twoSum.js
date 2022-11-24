// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] + nums[i + 1] === target)
//             return [i, i + 1];
//     }
// }
//
// console.log(twoSum([2, 7, 11, 15], 9));


// let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20]
// let k = 4
//
// function maxSum(array, k) {
//     let max = -Infinity
//     let sum
//     for (let i = 0; i < array.length-k; i++) {
//         sum = 0
//         sum = array[i] + array[i + 1] + array[i + 2] + array[i + 3]
//         // console.log(sum);
//     if (sum > max) max = sum
//     }
//     return max;
// }
//
// console.log(maxSum(arr, k));

arr = [2,9,6,3,12,2,4]
arr2 = [2,3,6,9,13,21,42]
array1 = [3,2,5,33,10,23,100,100]

function isUnique(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (j===i)  continue
            if (array[j] === array[i]) {
                return false
            }
        }
     }
    return true
}

const isUnique2 = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i]===array[i+1]) {

        }

    }
}

// function isUnique(array, k) {
//     let sum;
//     for (let i = 0; i < array.length; i++) {
//         sum = array[i] + array[]
//     }
// }


console.log(isUnique(arr));
console.log(isUnique(arr2));
console.log(isUnique(array1));
