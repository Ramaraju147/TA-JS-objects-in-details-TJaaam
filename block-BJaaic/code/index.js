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

function AnimalObject(location,numberOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
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

function Dog(location,numberOfLegs,name,color){
    let dog = AnimalObject(location,numberOfLegs);
    Object.setPrototypeOf(dog,dogMethods);
    Object.setPrototypeOf(dogMethods,animalMethods);
    dog.name = name;
    dog.color = color;
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

function Cat(location,numberOfLegs,name,colorOfEyes){
    let cat = AnimalObject(location,numberOfLegs);
    Object.setPrototypeOf(cat,catMethods);
    Object.setPrototypeOf(catMethods,animalMethods);
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;
    return cat;
}