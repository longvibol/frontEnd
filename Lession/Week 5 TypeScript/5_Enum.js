// enum Day{
//     MON =5,
//     TUE =8,
//     WEN,
//     THU,
//     FRI,
//     STA
// }
var Day;
(function (Day) {
    Day["MON"] = "Monday";
    Day["TUE"] = "Tueday";
    Day["WEN"] = "Wenesday";
    Day["THU"] = "Thurday";
    Day["FRI"] = "Friday";
    Day["STA"] = "Staturday";
})(Day || (Day = {}));
console.log(Day.THU); // no intitial value = 3
// console.log(Day.THU); // intitail valeu on MON = 5 it will show 
// let dayNum:Day = Day.FRI; // we supose the input from outside what Day.FRI
// if(dayNum > Day.FRI){
//     console.log('Holiday');
// }else {
//     console.log("Working Day");
// }
