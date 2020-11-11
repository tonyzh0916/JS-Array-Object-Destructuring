const personOne = {
  name:'Kyle',
  age:24,
  address:{
    city:'Somewhere',
    state:'One of them'
  }
}

const personTwo  ={
  name:'Sally',
  age:32,
  address:{
    city:'Somewhere else',
    state:'Another one of them'
  }
}

const {name, age} = personTwo
const {name:firestName}= personTwo;

console.log(name);
console.log(age);
console.log(firestName);

//////////////////////////////////////////
console.log("--------------------------------------------------------------")
const {name:lastName, ...rest} =  personTwo 
newArray = {...personOne, age:21, favorateFood:'meat'}
//console.log(lastName)
//console.log(rest);
console.log(newArray);

const example1 = {
  number:12,
  class:'math',
  professor:'Tony'
}

const example2 = {
  professor:'Aaron'
}

console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")

const example3 = {...example1,...example2}
console.log(example3)

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
function printUser({name, age, favoriteFood = 'rice'}){
  console.log(`Name is: ${name}. Age is ${age}. Food is ${favoriteFood}`);
}

printUser(personOne);