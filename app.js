function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name) {
  return `Good afternoon ${name.repeat(3)}`;
}

function greet(name, callback) {
  console.log(`${callback(name)}, my name is John`);
}

greet("bobo", morning);
greet("susy", afternoon);

// function greetMorning(name) {
//   const myName = "john";
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }

// function greetAfternoon(name) {
//   const myName = "john";
//   console.log(`Good afternoon ${name}, my name is ${myName}`);
// }

// greetMorning("bobo");
// greetAfternoon("susy");
