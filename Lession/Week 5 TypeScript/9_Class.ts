
// class Student{
//     private readonly name: string;

//     public constructor(name :string){
//         this.name =name;
//     }
// }

// let st = new Student("thida")
// st.name ="dara";

// console.log(st);

// interface Shape {
//     getArea: () => number;
// }

// class Rectangle implements Shape{
//     public constructor(protected readonly width: number, protected readonly height: number){
        
//     }    
//     public getArea(){
//         return this.width * this.height;
//     }

// }

// let are = new Rectangle (10,20);
// console.log(are.getArea());

abstract class Polygon {
    public abstract getArea():number;

    public toString() : string{
        return `Polygon[area=${this.getArea()}]`;
    }
}


class Rectangle extends Polygon{
    public constructor(protected readonly width: number, protected readonly height:number){
        super();
    }

    public getArea(){
        return this.width * this.height;
    }
}

let are2 = new Rectangle(10,20);
console.log(are2.toString())
