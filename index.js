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

//------Find-------
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


// ---------------- ADDING ELEMENTS -------------------

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
// let deleted = number.splice(2,1,7,6);
// console.log(deleted)
// console.log(number) 

// ------------------ REMOVING ELEMENTS ---------------------
