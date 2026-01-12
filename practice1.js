// // // function say(){
// // //     console.log("hei");
// // // }
// // // function data(f){
// // //     f();
// // // }

// // // data(say);

// // // console.log("---arrow funtion----");

// // // const sum=(a,b)=>a+b;
// // // let a=5;
// // // let b=5;
// // // console.log(sum(a,b));

// // // let x= ()=>console.log("hello");
// // // console.log(x);
// // // x();

// // let b=  (...a)=>console.log(a);
// // b(1,2,3,4);

// // let data=[10,20,30]
// // console.log(...data);


// // const test=new Object();
// // test.name={x:"rohit"};
// // test.age=20;

// // console.log(test["age"]);
// // test.age=23;
// // console.log(test["age"]);

// // const name=test.name.x;// it call desturucturing
// // console.log(name);

// // const data1=structuredClone(test);
// // data1.name.x="parthik";
// // console.log(test);
// // console.log(data1);
// // const data2=new Map();
// // data2.set("1","name");
// // console.log(data2.get("1"));


// // const data3=new Set();
// // data3.add(1);
// // data3.add(2);
// // data3.add(1);
// // console.log(data3);

// // let dat=JSON.stringify(test);
// // console.log(dat);
// // console.log(JSON.parse(dat));

// // var x=5;
// function hi(){
//     var a=5;
// console.log(a);
// function b(){
//     a++;
//     console.log(a);
// }
//     //console.log(b());
// }

// let x=hi();
// x();
// x();

const knightIsAwake=false;

const archerIsAwake = true;
const prisonerIsAwake = false;
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if(knightIsAwake || archerIsAwake || prisonerIsAwake ==true ){
  console.log("reu");
    return true;
  }
  console.log("spy");
    
}
canSpy(false,false,false);

let data=[1,2,3];
data.shift()
