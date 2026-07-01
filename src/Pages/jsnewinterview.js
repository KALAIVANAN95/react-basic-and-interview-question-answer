function reverseString(str){
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev=rev+str[i]
    }
    return rev
}
console.log(reverseString("KALAI"))

function palindrome(str){
    let pali="";
    for(let i=str.length-1;i>=0;i--){
        pali=pali+str[i]
    }
    if(pali===str){
        console.log("This is palindrome", pali)
    }else{
        console.log("This is not palindrome", pali)
    }
    return pali
}
palindrome("racecars")

function vowelsCheck(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==="i" || str[i]==="a"){
            count++
        }
    }
    return count
}
console.log(vowelsCheck("kalai"))

function largestNumber(arr){
    let bigNo=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>bigNo){
            bigNo=arr[i]
        }
    }
    return bigNo
}
console.log(largestNumber([10,30,0,203]))

function smallestNumber(arr){
    let smallNo=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallNo){
            smallNo=arr[i];
        }
    }
    return smallNo
}
console.log(smallestNumber([1,2,3,4,5,6,9,0]))

function secondBigNo(arr){
    let first=arr[0]
    let sec=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>first){
            sec=first;
            first=arr[i]
        }else if(arr[i]>sec&& arr[i] !==first){
            sec=arr[i]
        }
    }
    return sec
}
console.log(secondBigNo([100,300,2000,500,260]))

function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
console.log(sumArray([1,2,4,5,1]))

function countEven(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            count++
        }
    }
    return count
}
console.log(countEven([1,2,3,4,5,6]))

function duplicateChar(str){
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            if(str[i] === str[j]){
                console.log(str[i]);
            }
        }
    }
}

duplicateChar("kalai");

function countWords(str){
    let words = str.split(" ");
    return words.length;
}

console.log(countWords("I am Kalai"));


function maxChar(str){
    let count = {};

    for(let char of str){
        count[char] = (count[char] || 0) + 1;
    }

    console.log(count);
}

maxChar("kalai");

function secondLarget(arr){
    let first=arr[0]
    let secon=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>first){
            secon=first
            first=arr[i]
        }else if(arr[i]>secon&&arr[i] !==first){
            secon=arr[i]
        }
    }
    return secon
}
console.log(secondLarget([1,2,2,3,34,34,24,]))

function duplicateRemove(str){
    let newValue=[...new Set(str)]
    console.log(newValue)
    return newValue
}
duplicateRemove([1,2,3,4,5,4,2,4,5,6])

function countValue(str,target){
    let counts=0
    for(let i=0;i<str.length;i++){
        if(str[i]===target){
            counts++
        }
    }
    console.log(counts)
    return counts
}
countValue("kalai","a")

function counterLength(str){
    console.log(str)
    return str.length
}
console.log(counterLength("kalai"))
    ==================================

    function largestNumber(arr){
    let bigNo=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>bigNo){
            bigNo=arr[i]
        }
    }
    console.log(bigNo)
    return bigNo
}
largestNumber([20,23,204,234,2343])

function removeDublicate(arr){
    let result=[...new Set(arr)]
    console.log(result)
    return result
}
removeDublicate([2,3,3,45,6,65,42,2])

function countChar(str,target){
    let newVal=0
    for(let i=0;i<str.length;i++){
        if(str[i]===target){
            newVal++
        }
    }
    console.log(newVal)
    return newVal
}
countChar("KALAI","A")


function sumValue(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    console.log(sum)
    return sum
}
sumValue([2,3,3])

function evenNu(arr){
    let newVals=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            newVals.push(arr[i])
        }
    }
    console.log(newVals)
    return newVals
    
}
evenNu([1,2,3,4,5,6,6,8,10])



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
    const arr=[1,2,2,3,4,4,5,88,99,99,88]
const result = [...new Set(arr)]
console.log(result)

const results=arr.filter((value,index)=>{
    return arr.indexOf(value)===index
})
console.log(results)

===============================================================================================================
    function checkPolindrome(str){
    let reverse= str.split("").reverse().join("")
    if(str===reverse){
        console.log("Polindrome", reverse)
    }else{
        console.log("Not Polindrome", reverse)
    }
}
checkPolindrome("madam")

function checkPo(str){
    let reverses=""
    for(let i=str.length-1;i>=0;i--){
        reverses+=str[i]
    }
    return str === reverses;

}
console.log(checkPo("madam"))
