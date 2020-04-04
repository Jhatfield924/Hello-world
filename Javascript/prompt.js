// Reasons why functions are good
// 1: Reuseability
// 2: Reuseability
// 3: Reuseability
// 4: Reuseability
// 5: Reuseability
// 6: Reuseability

var numbers = [1, 2];
var numbers2 = [15, 15, 15];
var numbers3 = [35, 2, 3, 4];
var people = [
  { name: "John", id: "5" },
  { name: "John5", id: "6" },
  { name: "John4", id: "4" },
  { name: "John3", id: "3" },
  { name: "John2", id: "2" },
  { name: "John1", id: "1" }
];

// printReverse(numbers);
// printReverse(numbers2);
// printReverse(numbers3);

// console.log(isUniform(numbers));
// console.log(isUniform(numbers2));
// console.log(isUniform(numbers3));

sumArray(people, "1");
// sumArray(numbers2);
// sumArray(numbers3);
// printReverseIfUniform(numbers2);
// printReverseIfUniform(numbers3);

function printReverse(color) {
  // Reorder array
  for (var i = color.length - 1; i >= 0; i--) {
    console.log(color[i]);
  }
  console.log("//////////////////////////////////////////////");

  //   Print array in new order
}

function printReverseIfUniform(arr) {
  if (!isUniform(arr)) {
    printReverse(arr);
  } else {
    console.log("NOT UNIFORM!");
  }
}

/*
    numbers2 = [10,2,3]

    [1,2,3] >= 0

 
    numbers2[1] = 2
    numbers2[2] = 3

    For loop structure

    for(let i = 0; i < arr; i++) {
        arr[i].doSomething
    }

    For each structure

    arr.forEach(num => 'do something with num here')


*/

function isUniform(arr) {
  // If every item is the same in an array, return true
  // else return false
  for (var i = 1; i < arr.length; i++) {
    if (arr[0] === arr[i]) {
    } else {
      return false;
    }
  }
  return true;
}

function sumArray(arr, id) {
  // come up with a way to iterate over an array
  // add the value of current varible to a sum
  // log sum to console
  //   var sum = 0;

  //   for (var i = 0; i < arr.length; i++) {
  //     sum += arr[i];
  var index = arr.findIndex(person => {
    return person.id === id;
  });
  if (index !== -1) {
    console.log(arr[index]);
  } else {
    console.log("person not found");
  }
  //   arr.forEach();
  //   arr.map(p => {
  //     return { name: p.name };
  //   });
  //   console.log(arr);
}

var arr1 = [1, 2, 3];
var arr2 = [2, 5];
/**
 * Array functions:
 *      splice(index, number) - removes a number of items starting at the position of index
 *      forEach()
 *      findIndex
 *
 *
 *
 *
 *      filter
 *      slice(index, number) - creates a new array starting at index and ending at number; Does not mutate old array
 *      some
 *      map
 *      reduce
 *      find
 *      sort
 *      includes
 */

/*
 Assign a variable to a value                       =

 Loosely compare a variable to another variable     ==

 Strictly compare a variable to another variable    ===
*/
