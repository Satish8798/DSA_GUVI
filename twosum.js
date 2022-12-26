const e = require("express");

let array = [1, 2, 3, 2, 5, 6];
let sum = 6;
let memory = new Map();
for (let i = 0; i < array.length; i++) {
  let diffValue = sum - array[i];
  if (memory.has(diffValue)) {
    console.log(memory)
    console.log( [i, memory.get(diffValue)]);
  } else {
    memory.set(array[i],i)
  }
}
