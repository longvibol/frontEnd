class student{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    info(){
        return "this is my students class"
    }

    setAge(a){
        if(a > 18){
            this.age= a;
        }
        this.age = 10;
    }

}