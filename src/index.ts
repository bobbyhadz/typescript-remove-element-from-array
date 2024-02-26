export {};

// EXAMPLE 1 - Remove Element(s) from an Array in TypeScript

const arr: string[] = ['one', 'two', 'three', 'four'];

const index = arr.indexOf('two');
console.log(index); // 👉️ 1

if (index !== -1) {
  arr.splice(index, 1);
}

// 👇️ ['one', 'three', 'four']
console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 2 - Remove an Object from an Array in TypeScript

// const arr: { id: number }[] = [{ id: 1 }, { id: 4 }, { id: 8 }];

// const indexOfObject = arr.findIndex((object) => {
//   return object.id === 4;
// });

// console.log(indexOfObject); // 👉️ 1

// if (indexOfObject !== -1) {
//   arr.splice(indexOfObject, 1);
// }

// // 👇️ [{id: 1}, {id: 8}]
// console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 3 - Remove the Last element from an Array

// const arr: string[] = ['bobby', 'hadz', 'com'];

// const removed = arr.pop();
// console.log(removed); // 👉️ 'com'

// // 👇️ ['bobby', 'hadz']
// console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 3 - Remove the First element from an Array

// const arr: string[] = ['bobby', 'hadz', 'com'];

// const removed = arr.shift();
// console.log(removed); // 👉️ 'bobby'

// // 👇️ ['hadz', 'com']
// console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 4 - Filter out Elements from Array that don't satisfy a condition

// const arr: string[] = ['bobby', 'hadz', 'hadz', 'com'];

// const newArr: string[] = arr.filter((element) => {
//   return element !== 'hadz';
// });

// // 👇️ [ 'bobby', 'com' ]
// console.log(newArr);

// ---------------------------------------------------

// // EXAMPLE 5 - Never use the Delete Operator with Arrays

// const arr: string[] = ['bobby', 'hadz', 'com'];

// delete arr[1];

// console.log(arr); // 👉️ ['bobby', , 'com']

// console.log(arr.length); // 👉️ 3
