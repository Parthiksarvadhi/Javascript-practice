let arr=[10,20,30,40,50];
console.log("Array Length:",arr.length);
console.log("Array Element at index 2:",arr[2]);
arr[2]=100;
console.log(arr[2]);
arr.push(60);
console.log("After push 60:",arr);//push ma last ma add thay

arr.pop();
console.log("After pop:",arr);//pop ma last element remove thay

arr.unshift(5);
console.log("After unshift 5:",arr);//unshift ma first ma add thay

arr.shift();
console.log("After shift:",arr);//shift ma first element remove thay


let arr1=[...arr];//spread operator
console.log("arr1 using spread operator:",arr1);
let evens = arr.filter((n) => n % 2 === 0);
console.log("filter (evens):", evens);

console.log(arr.includes(20));//includes check kare ke element array ma che ke nai
console.log(arr.reverse())
let datadestructuring=[...arr1];
console.log("datadestructuring:",datadestructuring[0]);