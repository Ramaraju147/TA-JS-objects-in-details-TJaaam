let animalMethods = {
    eat(){
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation(newLocation){
        this.location = newLocation;
    },
    summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}

function AnimalObject(){
    let animal = Object.create(animalMethods);
    animal.location = 'Ohio';
    animal.numberOfLegs = 4;
    return animal;
}

let dogMethods = {
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName(newName){
        this.name = newName;
    },
    changeColor(newColor){
        this.color = newColor;
    },
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

function Dog(name,color){
    let dog = Object.create(dogMethods);
    dog.name = name;
    dog.color = color;
    Object.setPrototypeOf(dogMethods,new AnimalObject)
    return dog;
}


let catMethods = {
    meow(){
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName(newName){
        this.name = newName;
    },
    changeColorOfEyes(newColor){
        this.colorOfEyes = newColor
    },
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}

function Cat(name,colorOfEyes){
    let cat = Object.create(catMethods);
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;
    Object.setPrototypeOf(catMethods,new AnimalObject);
    return cat;
}