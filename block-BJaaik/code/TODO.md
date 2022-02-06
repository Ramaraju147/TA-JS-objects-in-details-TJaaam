## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)


class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age=age;
        this.gender = gender;
    }
    eat(){
        console.log("eats")
    }
    sleep(){
        console.log("sleep")
    }
    walk(){
        console.log("walk")
    }
}

class Player extennds Person{
    constructor(name,age,gender,sportsName){
        super(name,age,gender)
        this.sportsName = sportsName;
    }
    play(){
        console.log("plays")
    }
}

class Teacher extennds Person{
    constructor(name,age,gender,instituteName){
        super(name,age,gender)
        this.instituteName = instituteName;
    }
    teach(){
        console.log("teach")
    }
}

class Artist extennds Person{
    constructor(name,age,gender,kind){
        super(name,age,gender)
        this.kind = kind;
    }
    createArt(){
        console.log("create art")
    }
}

class Cricketer extennds Player{
    constructor(name,age,gender,sportsName,teamName){
        super(name,age,gender,sportsName)
        this.teamName = teamName;
    }
    playCricket(){
        console.log("play cricket")
    }
}


