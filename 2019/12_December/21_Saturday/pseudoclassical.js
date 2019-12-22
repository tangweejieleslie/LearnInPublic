// Additional References

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
// https://davidshariff.com/blog/javascript-inheritance-patterns/

Function.prototype.inherits = function (Parent) {
    this.prototype = new Parent();
    return this;
};

var Pokemon = function (name) {
    this.name = name;
    this.resistance = [];
    this.weakness = [];
    this.type = "";
};

var FireType = function (name) {
    this.name = name;
    this.type = "Fire";
    this.resistance = ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"];
    this.weakness = ["Water", "Ground", "Rock"];
}.inherits(Pokemon);


var charmander = new FireType("Charmander");
console.log(charmander.resistance);
console.log(charmander.name);



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
    this.bark = function () {
        console.log("bark");
    };
}.inherits(Mammal);

var myDog = new Dog("Growlithe");

myDog.get_species();
myDog.bark(2);
myCat.get_species();