
const data = require('../../../2019-javascript-2/class-01/class-1-data.json');

// console.log(data[1].address.street);

// function helloWorld(name){
//  return `Hello ${name} !`
// }

// console.log(helloWorld(`Riley`));


data.forEach(function(elem){
//   console.log(elem.address.street);
//   console.log(elem.address.city);
//   console.log(elem.address.state);
//   console.log(elem.address.zip);
//   console.log(elem.sex);
     console.log(elem.favoriteToy);
})


const allNames = data.map(elem => elem.name);


console.log(allNames);
console.log("*******");

const allMaleNames = data.filter(function(elem){
 return elem.sex === "M";
})

console.log(allMaleNames);
console.log("***********************");


const allFemaleNames = data.filter(elem => elem.sex==="F"); 
console.log(allFemaleNames);