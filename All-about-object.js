let user = {
  name: "Parthik",
  age: 21,
  city:"surat"
};
console.log("User:", user);
console.log("User Name:", user.name);

user.age = 22; // update age
console.log("Age:", user.age);
delete user.city; // delete city
console.log("After deleting city:", user);

user.work = "SDA"; // add work
console.log("After adding work:", user);
user.work = {}
user.work.company='Sarvvadhi solutions'; // nested object
console.log("After adding company to work:", user.work.company);


let bike = {
  brand: "hero",
  model: "shine",
  start: function () {
    console.log(this.brand + " " + this.model + " is starting...");
  }
};

bike.start();

let parthik=Object.values(user);
console.log("Object keys:",parthik);
let keys=Object.keys(bike);
console.log("Object keys:",keys);

let entries=Object.entries(bike);
console.log("Object entries:",entries);