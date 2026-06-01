
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
============================================================================================================
const arr=[1,2,3,4]
const result = arr.map((value)=>value*2)
console.log(result)
console.log("============================")

for(let i=0;i<arr.length;i++){
    console.log(arr[i]*2)
}

console.log("============================")
const arr1=[10,20,30]
const result1=arr1.map((value)=>value)
console.log(result1)

console.log("============================")

for(let i=0;i<arr1.length;i++){
    console.log(arr1[i])
}

console.log("============================")

const arr2=[10,20,30]
const result2=arr2.filter((value)=>value>15)
console.log(result2)
console.log("============================")
for(let i=0;i<arr2.length;i++){
    if(arr2[i]>15){
        console.log(arr2[i])
    }
}

console.log("============================")

const arr3=[10,20,30]
const result3=arr3.reduce((value,aa)=>value+aa,0)
console.log(result3)

console.log("============================")

let sum=0;
for(let i=0;i<arr3.length;i++){
sum=sum+arr3[i]
}
console.log(sum)

console.log("============================")

const arr4=[10,5,20,30,50]
let largest = arr4[0];

for(let i=0;i<arr4.length;i++){
   if(arr4[i] > largest){
      largest = arr4[i];
   }
}

console.log(largest); 
const result4 = arr4.filter(value => value > largest);
console.log(result4);

let str="KALAIV"
let res=""

for(let i=str.length-1;i>=0;i--){
    res=res+str[i]

}
console.log(res)


let strs = "madam";
let ress = "";

for(let i = strs.length - 1; i >= 0; i--){
    ress = ress + strs[i];
}

console.log(ress);

console.log(strs === ress);
============================================================================================================
