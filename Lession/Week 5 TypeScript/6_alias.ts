
//---Aliasie 

// type Vibol = string;
// let n:Vibol = "Vibol";

// console.log(n);


//--- Interface---

interface Rectangle{
    width: number,
    height: number
};
let rec1:Rectangle = {width:20,height:30};
console.log(rec1);

//-- extends interace mean we can get all the fiele from extend interface 

interface ColorRectangle extends Rectangle{color:String};
let rec2:ColorRectangle ={
    width:20,height:30,color:"Red"
}
console.log(rec2);

