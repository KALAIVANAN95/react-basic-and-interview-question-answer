
function addTwoSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                return [i,j]                       or                 return [arr[i],arr[j]]
            }
        }
    }
}

console.log(addTwoSum([2,4,5,6,7,1],9))

===============================================================================================================

function duplicateFind(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                return arr[i]
            }
        }
    }
}

console.log(duplicateFind([1,2,2,2,2,3,5]))

const arr=[1,22,22,2,4,5,5]
const res=[...new Set(arr)]
console.log(res)

