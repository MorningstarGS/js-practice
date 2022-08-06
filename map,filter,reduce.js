const arr = [5, 2, 2, 3, 4, 6];

// ⭐MAP⭐
// Double of arr
function double(x) {
  return x * 2;
}
// Triple of arr
function triple(x) {
  return x * 3;
}
// Binary of arr
function binary(x) {
  return x.toString(2);
}
const outputMap = arr.map(binary);
console.log(outputMap);
/**
 * -- Higher Order Functions
 * const output = arr.map(function binary(x) {
 *  return x.toString(2);
 * });
 * const output = arr.map((x) => return x.toString(2)); with arrow func
 */

// ⭐FILTER⭐

const outputFilter = arr.filter((x) => x % 2 === 0); //for odd number (x%2)
console.log(outputFilter);

// ⭐REDUCE⭐
// to find sum or max number
//Tradition way to do sum using FOR Loop
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.lenght; i++) {
    sum = sum + arr[i];
    // if (arr[i] > sum) {
    //   sum = arr[i];
    // }
  }

  return sum; //logging this will give o/p 21
}

// curr >> values of inputs/array(arr[i])  acc >> result what we need from array
const outputReduce = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  // acc = acc + curr; // for sum
  return max;
}, 0);
console.log(outputReduce);

const users = [
  { firstName: 'Gaurav', lastName: 'Suhanda', age: 26 },
  { firstName: 'Elon', lastName: 'Musk', age: 50 },
  { firstName: 'Jeff', lastName: 'Bezos', age: 60 },
  { firstName: 'Ileana', lastName: 'DCruz', age: 26 },
];

const outputUsers = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(outputUsers);
const outputUsersFilter = users
  .filter((x) => x.age < 30)
  .map((x) => x.firstName);
console.log(outputUsersFilter);
