
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
===============================================================================================================
    function removeDupilcate(arr){
    let result=[]
    
    for(let i=0;i<arr.length;i++){
        
        let found=false
        
        for(let j=0;j<result.length;j++){
            if(arr[i]===result[j]){
                found=true
            }
        }
        if(!found){
            result.push(arr[i])
        }
    }
    return result
}
============================================================================================================
function reverseArray(arr){
let result=[]
for(let i=arr.length-1;i>=0;i--){
result.push(arr[i])
}
return result
}

console.log(
reverseArray([1,2,3,4,5])
)
console.log(removeDupilcate([1,2,2,3,4,5,5]))
console.log(res)

