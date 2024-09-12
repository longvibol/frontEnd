// class Student{
//     private readonly name: string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Polygon = /** @class */ (function () {
    function Polygon() {
    }
    Polygon.prototype.toString = function () {
        return "Polygon[area=".concat(this.getArea(), "]");
    };
    return Polygon;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Polygon));
var are2 = new Rectangle(10, 20);
console.log(are2.toString());
