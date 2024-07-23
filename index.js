// ---------------- FINDING  ELEMENTS -----------------

// -----Include Methods-------
// let myArray= ["Apple","Carrot","Orange"];
// let res = myArray.includes("Banana");
// console.log(res) //False
// if(res){
//     console.log("Happy!");
// }else{
//     console.log("Sad!")
// }

//------Find-------//(return array or object Values)
// let person = [
//     {
//         name:"Gokul",
//         number:1
//     },
//     {
//         name:"Raj",
//         number:2
//     },
//     {
//         name:"Ajay",
//         number:3
//     }
// ]
// let res = person.find((person)=>{
//     return person.name === "Gokul";
// })
// console.log(res)
// let res1= person.find(findPerson);
// function findPerson(person){
//     return person.name === "Raj"; 
// }
// console.log(res1);

//------FindIndex--------
// let number=[10,20,30,40];
// let res = number.findIndex((num)=>{
//     return num > 10;
// })
// console.log(res)
// let result = number.findIndex((value)=>{
// return value === 30;
// })
// console.log(result)

// ------IndexOf-----------
// let names = ["Gokul","Raj","Bhuvi"];
// let res = names.indexOf("Raj");
// console.log(res)
// names[res] = "Baba";
// console.log(names)
// let res1 = names.indexOf("Mani");
// console.log(res1)
// if(res1 > -1)
// {
//     console.log("yeeee, Happy!");
// }else{
//     console.log("Ohhh, Sad!");
// }

//-------LastIndexOf-------------
// let values = [10,20,50,40,50,60,30,20,70,10,20,50];
// let res = values.lastIndexOf(20);
// console.log(res)
//


// ---------------- ADDING ELEMENTS -----------------------

//-------Push--------
// let number = [1,2,3,4,5];
// let value = number.push(6,7);
// console.log(number,value);

//------Unshift-------
// let number = [1,2,3,4,5];
// number.unshift(0);
// number.unshift(1,-1);
// let total = number.unshift(2);
// console.log(number);
// console.log(total);

//------Splice--------
// let number = [5,4,3,9,8];
// let deleted = number.splice(2,0,7,6);
// console.log(deleted)
// console.log(number) 

// ------------------ REMOVING ELEMENTS ---------------------

//-------Pop--------
// let number = [1,2,3,4,5];
// let value = number.pop();
// console.log(number)
// console.log(value)
// let value1 = number.pop();
// console.log(number);
// console.log(value1)
// let value2 = number.pop();
// console.log(number);
// console.log(value2)

//-------Shift-------
// let number = [1,2,3,4,5];
// let total = number.shift();
// console.log(number);
// console.log(total);

//-------Splice------
// let number = [5,4,3,9,8];
// let deleted = number.splice(3,1);
// console.log(deleted)
// console.log(number) 

// ------------ COMBINING & SLICING --------------

//------Concat-------
// let a=[1,2,3,4,5];
// let b=[9,8,7,6];
// let c=[11,22,33,44,55];
// let d=a.concat(b,c);
// console.log(d);
// let e=d.push(4);
// console.log(d);
// let f=d.shift();
// console.log(d);

//------slice-----
// let number = [1,2,3,4,5];
// let number2=number.slice(1,3)
// console.log(number)
// console.log(number2)