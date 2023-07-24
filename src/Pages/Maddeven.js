// 1.odd or Even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((values) => {
  return values % 2 === 0;
});

const oddNumbers = numbers.filter((value) => {
  return value % 2 === 1;
});

console.log(evenNumbers, "evenNumbers");
console.log(oddNumbers, "OddNumbers");

//=========================================\\

// 2.duplicate array remove functions
const arrays = ["KALAI", "VANAN", "CENA", "KALAI"];
const filteredarray = [...new Set(arrays)];
console.log(filteredarray);

//=========================================\\

// 3.reverese array remove functions

const rollnumbers = [5, 6, 9, 3];
const result = rollnumbers.sort((a, b) => {
  return b - a;
});

console.log(result);

const students = [
  { id: 1, name: "KALAI" },
  { id: 2, name: "CENA" },
  { id: 3, name: "VANA" },
];

let reuslts = students.sort((a, b) => {
  if (a.name < b.name) return -1;

  if (a.name > b.name) return 1;

  return 0;
});
console.log(reuslts, "reuslts");

//=========================================\\

//Closure

function outerScopeFunction() {
  var outerValue = 20;

  var innerScopeFunction = function () {
    console.log(outerValue + 4);
  };

  return innerScopeFunction;
}

console.log(outerScopeFunction);

//Most interview questions -
//empty array
var fruits = ["Apple", "Orange", "One"];

fruits.length = 0;
//var fruits = []
// while(fruits.length){
//     fruits.pop()
// }
console.log(fruits);
//=========================================\\

//setTimeout
setTimeout(() => {
  console.log("This is setTimeout");
}, 1000);

//=========================================\\

//String reverse
// const str='Hello World';
// output='olleh dlroW'

function stringReversWord(str) {
  const splitString = str.split(/[ ,]+/);

  let final_result = "";
  let cache = "";

  for (let i = 0; i < splitString.length; i++) {
    for (let j = 0; j < splitString[i].length; j++) {
      cache = splitString[i][j] + cache;
    }
    final_result = final_result + " " + cache;

    cache = "";
  }

  return final_result;
}
console.log(stringReversWord("Hello World"));
//=========================================\\
//Map - Executes callback for each array element
//and returns new array
let price = [20, 30, 13];
let priceInr = price.map((x) => x * 83);
console.log("This is inr values", priceInr);

//=========================================\\
// filter method example
//Filter-Returns new array by checking each value of original
//arr using call back function

const costs = [35, 234, 12, 34, 54, 123];

const lessthan100 = costs.filter((x) => x < 100);

console.log("lessthan100 values", lessthan100);

//=========================================\\
// Reduce method example
//Reduct - excutes reducer callback and returns accumulated result

const adds = [35, 234, 12, 34, 54, 123];
let carttotal = adds.reduce((acc, el) => acc + el);

console.log("The total is", carttotal);

//or
const arr2d = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

let count = arr2d.flat().reduce(
  (accu, curr) => {
    if (accu[curr]) {
      accu[curr]++;
    } else {
      accu[curr] = 1;
    }

    return accu;
  },

  {}
);

console.log("Count the character", count);

//=========================================\\
//Callback function example
function mainFun(getCall) {
  console.log("Main Function runing");
  getCall();
}

function callBack() {
  console.log("CallBack function runing");
}

mainFun(callBack);

//=========================================\\
//Callback function example

function userInputs(getCallback) {
  //  const datas = prompt("Enter your name:")
  const datas = "test";
  getCallback(datas);
}
function display(datas) {
  // alert(`Name: ${datas}`)
}
userInputs(display);

//=========================================\\
//Promise example
// 1.Pending
// 2.Fulfilled
// 3.Failed

// let myPromise = new Promise(function(myResolve,myReject){
//     myResolve()//When Successfull
//     myReject()//When error
// })

// myPromise.then(function(value){
//     code if successfull
// }.catch(function(error) {code if erro})

// )

let developer = true;

let promise = new Promise((myResolve, myReject) => {
  if (developer) {
    myResolve("Completed successfully");
  } else {
    myReject("Not completed");
  }
});

promise
  .then((successMsg) => {
    console.log(successMsg);
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
});
