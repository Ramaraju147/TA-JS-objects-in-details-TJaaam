# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

// factory pattern

function User(name,id,noOfProjects){
    let user = {}
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;

    user.getProjects = function(){
        return this.noOfProjects
    }
    user.changeName = function(newName){
        this.name = newName;
        return this.name;
    }
    user.incrementProject = function(value = 1){
        this.noOfProjects += value;
        return this.noOfProjects
    }
    user.decrementProject = function(value = 1){
        this.noOfProjects -= value;
        return this.noOfProjects
    }
    return user;
}

// prototypal pattern

let userMethods = {
   getProjects(){
        return this.noOfProjects
    },
   changeName(newName){
        this.name = newName;
        return this.name;
    },
   incrementProject(value = 1){
        this.noOfProjects += value;
        return this.noOfProjects
    },
   decrementProject(value = 1){
        this.noOfProjects -= value;
        return this.noOfProjects
    }
}


function User(name,id,noOfProjects){
    let user = Object.create(userMethods)
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;
    return user;
}

// Pseudoclassical

function User(name,id,noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
    User.prototype = {
        getProjects(){
             return this.noOfProjects
         },
        changeName(newName){
             this.name = newName;
             return this.name;
         },
        incrementProject(value = 1){
             this.noOfProjects += value;
             return this.noOfProjects
         },
        decrementProject(value = 1){
             this.noOfProjects -= value;
             return this.noOfProjects
         }
     }
}

// Using Class


class User{
    constructor(name,id,noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
    }
    getProjects(){
         return this.noOfProjects
     }
    changeName(newName){
         this.name = newName;
         return this.name;
     }
    incrementProject(value = 1){
         this.noOfProjects += value;
         return this.noOfProjects
     }
    decrementProject(value = 1){
         this.noOfProjects -= value;
         return this.noOfProjects
     }
}