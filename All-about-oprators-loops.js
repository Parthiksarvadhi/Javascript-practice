const arr = [50,55,80,90,45];
 let sum=0;
for(let i=0;i<arr.length;i++){
   
    if(arr[i]%2===0){
        sum+=arr[i];
        
    }

}
let i=0;
console.log("even numbers summ:",sum);
while ( i < arr.length) {
   sum += arr[i];
  i++;
}g
console.log("total sum using while loop:",sum);