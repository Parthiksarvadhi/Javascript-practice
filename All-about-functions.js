function add(x, y) {
  return x + y;
}
// Arrow function 
let multiply=((x, y) => x * y);
// function expression 
let subtract = function (x, y) {
  return x - y;
}

console.log("Addition:", add(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Subtraction:", subtract(10, 5));


//function return funtion also high order function pn che
function calculation(x,y){
    addition=add(x,y);
    
    return {addition};
}

//coluser vadu topic variable yaad rakhe inside inner function
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log("Count:", count);
  };
}

let count = outer();
count();
count();
count();
//async await function
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data done"), 2000);
  });
}

async function fetchData() {
  let result = await getData(); 
  console.log(result);
}

fetchData();
