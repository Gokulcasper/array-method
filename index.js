// ---------------- FINDING  ELEMENTS -----------------

// -----Include Methods-------(return give value is have or not )
// let myArray= ["Apple","Carrot","Orange"];
// let res = myArray.includes("Banana");
// console.log(res) //False
// if(res){
//     console.log("Happy!");
// }else{
//     console.log("Sad!")
// }

//------Find-------//(return array values or object Values by using key values)
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

//------FindIndex-------- (Find index of give value)
// let number=[10,20,30,40];
// let res = number.findIndex((num)=>{
//     return num > 30;
// })
// console.log(res)
// let result = number.findIndex((value)=>{
// return value === 30;
// })
// console.log(result)

// ------IndexOf----------- (Find Index & Also change values by using that find index)
// let names = ["Gokul","Raj","Bhuvi"];
// let res = names.indexOf("Raj");
// console.log(res)
// names[res] = "Baba";
// console.log(names)
// let res1 = names.indexOf("Mani");
// console.log(res1)
// if(res1 === -1)
// {
//     console.log("yeeee, Happy!");
// }else{
//     console.log("Ohhh, Sad!");
// }

//-------LastIndexOf------------- //(Find repeted last value)
// let values = [10,20,50,40,50,60,30,20,70,10,20,50];
// let res = values.lastIndexOf(20);
// console.log(res)
//


// ---------------- ADDING ELEMENTS -----------------------

//-------Push-------- (add the give value at end of an array)
// let number = [1,2,3,4,5];
// let value = number.push(6,7);
// console.log(number,value);

//------Unshift------- (add the give value at Starting of an array)
// let number = [1,2,3,4,5];
// number.unshift(0);
// number.unshift(1,-1);
// let total = number.unshift(2);
// console.log(number);
// console.log(total);

//------Splice-------- (index of correction value then deleted values, optionally given added value)
// let number = [1,2,9,4,5,6,7];
// let deleted = number.splice(2,0,3);
// console.log(deleted)
// console.log(number) 
// let number = [5,4,3,9,8];
// let deleted = number.splice(2,3);
// console.log(deleted)
// console.log(number) 

// ------------------ REMOVING ELEMENTS ---------------------

//-------Pop-------- (remove the value at end of an array)
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

//-------Shift------- (remove the value at Starting of an array)
// let number = [1,2,3,4,5];
// let total = number.shift();
// console.log(number);
// console.log(total);

//-------Splice------ (index of correction value then deleted values, optionally given added value)
// let number = [5,4,3,9,8];
// let deleted = number.splice(3,1);
// console.log(deleted)
// console.log(number) 

// ------------ COMBINING & SLICING --------------

//------Concat------- (Combine two or more arrays)
// let a=[1,2,3,4,5];
// let b=[9,8,7,6];
// let c=[11,22,33,44,55];
// let d=a.concat(b,c);
// console.log(d);
// let e=d.push(4);
// console.log(d);
// let f=d.shift();
// console.log(d);

//------slice-----(index of value to wanted value)
// let number = [4,9,3,7,5];
// let number2=number.slice(3,5)
// console.log(number)
// console.log(number2)

// ------------- JOINING ARRAY ELEMENT -------------------

//--------Join-------- (seperated by given Symbol)
// let place = ["Ooty","Wayanad","Kodaikanal","Varkalaa"];
// let touristPlace = place.join(" / ");
// console.log("I wanna Visit "+touristPlace);

// ------------- SORTING ARRAY ELEMENT ------------------

//--------Sort-------- (arrange given element by using two key values)
// let number=[100,500,34,5,350,120,600];
// number.sort((a,b)=>{
//     return a-b;
// });
// console.log(number);
// let student = [
//     {id:3,name:"Gokul"},
//     {id:2,name:"Raj"},
//     {id:4,name:"Mani"},
// ]
// student.sort((a,b)=>{
//     return a.id - b.id;
// });
// student.sort((a,b)=>{
//     if(a.name < b.name) return -1;
//     if(a.name > b.name) return 1;
//     return 0;
// });
// console.log(student);

// ------------------- Filter --------------------------
// let humanNames=["Gokul","Raj","Mani","Mala"];
// let result = humanNames.filter((name)=>{
//     return name.length <= 3;
// })
// console.log(result);

// ------------------- Split --------------------------
// let humanNames="I am Leaning About Javascript";
// let result = humanNames.split('');
// console.log(result);

// -------------------- Map -------------------------
// let value=[1,2,3,4,5];
// let result = value.map((val)=>{
//     return val*10;
// })
// console.log(result);
const people=[
    {id:1,fName:"gokul",lName:"raj"},
    {id:2,fName:"mani",lName:"kandan"},
    {id:3,fName:"thiru",lName:"mala"},
]
// let res = people.map((pep)=>{
//     return [pep.fName,pep.lName].join("-");
//     // return pep.fName+pep.lName;
// })
// console.log(res);
let res = people.map((pep)=>{
let fullNAME = [pep.fName,pep.lName].join(" ");
let result ={id:pep.id,fullName:fullNAME};
return result;
})
console.log(res)