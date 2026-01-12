//gloable funtion scope
var a=10;
let b=20;
const c=30;

function testdata(){
    let d='hii'
    let a=50;
    console.log("Inside Function");
    console.log("var a:",a);
    console.log("let b:",b);
    console.log("const c:",c);
    console.log("d:",d);
}
//scope funtion che
//console.log(d);
// error const cant assign 
// c=20;
testdata
();
console.log(a)