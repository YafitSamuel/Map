// let myMap = new Map();
// myMap.set("banana", "yelow");
// myMap.set("melon", "blue");
// myMap.set("avocado", "green");
// myMap.set("apple", "gree");
// myMap.set("orange", "orange");
// console.log(myMap);
// ==============2==================
// myMap.get(bana)

// ==============3==================

// myMap.set("Grapes", "purple");
// console.log(myMap);

// ==============4===================

// myMap.set("Blueberries", "");

// ==============5===================

// console.log(myMap.keys());

// ===============6==================

// console.log(myMap.values());

// ===============7==================
// for (let item of myMap.values()) {
//   if (item == "orange") {
//     console.log(item);
//   }
// }
// ===============8==================

// let oneMap = new Map();
// oneMap.set("yafit", 12);
// oneMap.set("keren", 23);
// oneMap.set("eynav", 44);
// oneMap.set("eden", 39);

// console.log(oneMap.values());
// console.log(oneMap.keys());

// for (let key of oneMap.keys()) {
//     onetr.innerHTML += `<td>${key}</td>`
//     twotr.innerHTML += `<td>${oneMap.get(key)}</td>`

// }

// let categorMap = new Map();
// categorMap.set("color", ["red","pink","blue","black"]);
// categorMap.set("fruit", ["avocdo","melon","banana","orange"]);
// categorMap.set("names", ["yafit","eden","keren","tikva"]);

// console.log(categorMap.values());
// console.log(categorMap.keys());

// let carMap = new Map();
// carMap.set("toyota", {snk:1200,color:"red"})
// carMap.set("volvo", {snk:1600, color:"pink"})
// carMap.set("jeep", {snk:2000,color:"blue"})

// console.log(get("toyota"));

// ===========================================================================================================================================================

// class Computer {
//   company;
//   model;
//   color;
//   year;
//   constructor(company, model, color, year) {
//     this.company = company;
//     this.model = model;
//     this.color = color;
//     this.year = year;
//   }
// }

// let computer1 = new Computer("yafit", "lenovo", "red", 1889);
// let computer2 = new Computer("kern", "dell", "pink", 2000);
// let computer3 = new Computer("tikva", "hp", "blue", 444);
// let computer4 = new Computer("eden", "asos", "black", 2222);

// let computerMap = new Map();
// computerMap.set("lenovo", { computer1 });
// computerMap.set("dell", { computer2 });
// computerMap.set("hp", { computer3 });

// compArray = [computer1, computer2, computer3, computer4];
// compArray.forEach((compItem) => {
//   computerMap.set(compItem.model, compItem);
// });
// console.log(computerMap);

// computerMap.has("key");

// BigInt.onclick = () => {
//   computerMap.has("lenovo") ? alert("yes lenovo") : alert("no lenovo");
// };

class Student {
  firstName;
  lastName;
  age;
  gradsAvr;
  constructor(firstName, lastName, age, gradsAvr) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gradsAvr = gradsAvr;
  }
 
}

let student1 = new Student("yafit", "samuel", 20, 100);
let student2 = new Student("tikva", "hiilu", "red", 1889);
let student3 = new Student("kern", "yosef", "pink", 2000);

let array = [student1, student2, student3];
let students = new Map([]);

array.forEach((item) => {
  students.set(item.firstName, item);
  div1.innerHTML += `<div class="divStayle" id="${item.firstName}"> ${item.firstName}</div>`;
});
console.log(students);



let divStayle = document.getElementsByClassName("divStayle");


for (let i = 0; i < divStayle.length; i++) {
  divStayle[i].onmouseover = () => {
    divStayle[i].style.width="200px" 
    divStayle[i].style.height="200px" 

    console.log(students.get( divStayle[i].id));
    divStayle[i].innerText +=  students.get( divStayle[i].id).lastName
   
  };
  divStayle[i].onmouseout=()=>{
    divStayle[i].innerText = divStayle[i].id
    divStayle[i].style.width="" 
    divStayle[i].style.height="" 
  }
}



     