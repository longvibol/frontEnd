var p1 = document.getElementById("p1");

function show(){
  // alert("Hello Vibol");
  // DOM doucment Object
  //document.getElementById("p1").innerHTML="Sea Game 2024!";
  //document.getElementById("p1").style.display = "none";
  //document.getElementById("image1").src = "../Week 3 JavaScrip/image/css.png";
  //document.getElementById("p1").style.fontSize = "40px";

  var age = 20;
  var name = 'Dara';

  const l = 20;

  //document.getElementById("p1").innerHTML= name;

  var names = ["Dara","Thida","Seyha"];

  var st1 = {name:"dara",age:20,gender:"Male"}

  for(var i = 0; i<names.length; i++){
    //console.log(names[i]);
  }

  var text = "";
  for(let n in names){
    text+=names[n] + "<br>"
    
  }
  document.getElementById("p1").innerHTML = text;

  for (key in st1){
    console.log(key + ":" + st1[key])
  }
  // console.log(st1);
  // console.log(st1.name);
  // console.log(st1["gender"]);

}

function display(text){
    console.log("======================");
    console.log(text);
    console.log("======================");
  }

  function sum(a,b){
    return a+b;
  }

  function sumCall(){
    var number = sum(3,4);
    // document.write(number);
    p1.innerHTML = number;

    var st = new student("vibol",25);

    st.setAge(11);
    console.log(st.name + " " + st.age);

  }

  

