//-----Include Methods-------
// let myArray= ["Apple","Carrot","Orange"];
// let res = myArray.includes("Banana");
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
// // let res = person.find((person)=>{
// //     return person.name === "Gokul";
// // })
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

//------IndexOf-----------
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
// let values = [10,20,50,40,50,60,30,20,70,10,90];
// let res = values.lastIndexOf(20);
// console.log(res)