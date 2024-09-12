// function test(): number | string{
//     return 5;
// }

// let limit = test();
// console.log(limit);

// function test(): void{
//     let d = new Date;
//     console.log(d);
// }

// function sum1(a:number, b:number){
//     return a+b;
// }

// function sum(a, b){
//     return a+b;
// }

// let s = sum("2",3);
// console.log(s);


// function info(a:number, message?: string){
//     if (message != undefined){

//         console.log(message+" : "+a);
//     }else{
//         console.log(a);
//     }
    
// }

// info(20);
// info(45,"Test")


// function add (a:number, b:number, c:number = 10){
//     return a + b + c;
// }


// let y = add(5,3);
// let y2 =add(5,3,6);

// console.log(y);
// console.log(y2);


function getArea({width,height}:{width:number, height:number}){

    return width*height;
}

let area = getArea({width:20,height:30});
console.log(area);






