let students : {id:number, name:string, gender?:string};
students ={id:1, name: "Dara"};

// console.log(students.name);

const car = {model:"Toyota"};
// console.log(students);

let ob : {[index:string]:string} = {};

//key = name, gender
//value = Dara, Male 
// we can add many as we can 

ob.name = "Dara";
ob.gender = "Male";

console.log(ob);

