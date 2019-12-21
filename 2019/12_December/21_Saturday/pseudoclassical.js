// 
// Function.method('inherits', function (Parent) {
//     this.prototype = new Parent();
//     return this;
// });


Function.prototype.inherits = function (Parent) {
    this.prototype = new Parent();
    return this;
};


// function inherits(Parent){
//     this.prototype = new Parent();
//     return this;
// }

var Mammal = function (name) {
    this.name = name;
    this.species = "Mammal";
};

// Add Method to "Class"
Mammal.prototype.get_name = function () {
    console.log(this.name);
    return this.name;
}

Mammal.prototype.get_species = function () {
    console.log(this.species);
    return this.species;
}


// Create Instance
var Cat = function (name) {
    this.name = name;
    this.saying = "meow";
    this.species = "Cat";
}.inherits(Mammal);

var myCat = new Cat("Garfield");

myCat.get_name();

myCat.get_species();

// Create Instance
var Dog = function (name) {
    this.name = name;
    this.saying = "woof";
    this.species = "Dog";
}.inherits(Mammal);

var myDog = new Dog("Growlithe");

myDog.get_species();
myCat.get_species();