var Color;
(function (Color) {
    Color[Color["WHITE"] = 0] = "WHITE";
    Color[Color["RED"] = 1] = "RED";
    Color[Color["YELLOW"] = 2] = "YELLOW";
})(Color || (Color = {}));
var myColor = Color.WHITE;
console.log(myColor);
