

let size_of_array = 10;
let initial_value = 0;
let fruits = Array(size_of_array).fill(initial_value);
console.log(fruits);
// 1. Creating Arrays
let firstArray = ["a","b","c"];
let secondArray = ["d","e","f"];

// 2. Access an Array Item
console.log(firstArray[0]); // Results: "a"

// 3. Loop over an Array
firstArray.forEach(function(item, index, array){
    console.log(item, index); 
});
// Results: 
// a 0
// b 1
// c 2

// 4. Add new item to END of array
secondArray.push('g');
console.log(secondArray);
// Results: ["d","e","f", "g"]

// 5. Remove item from END of array
secondArray.pop();
console.log(secondArray);
// Results: ["d","e","f"]

// 6. Remove item from FRONT of array
secondArray.shift();
console.log(secondArray);
// Results: ["e","f"]

// 7. Add item to FRONT of array
secondArray.unshift("d");
console.log(secondArray);
// Results: ["d","e","f"]

// 8. Find INDEX of an item in array
let position = secondArray.indexOf('f');
// Results: 2

// 9. Remove Item by Index Position
secondArray.splice(position, 1); 
console.log(secondArray);
// Note, the second argument, in this case "1", 
// represent the number of array elements to be removed
// Results:  ["d","e"]

// 10. Copy an Array
let shallowCopy = secondArray.slice();
console.log(secondArray);
console.log(shallowCopy);
// Results: ShallowCopy === ["d","e"]

// 11. JavaScript properties that BEGIN with a digit MUST be accessed using bracket notation
// renderer.3d.setTexture(model, 'character.png');     // a syntax error
// renderer['3d'].setTexture(model, 'character.png');  // works properly


// 12. Combine two Arrays
let thirdArray = firstArray.concat(secondArray);
console.log(thirdArray);
// ["a","b","c", "d", "e"];

// 13. Combine all Array elements into a string
console.log(thirdArray.join()); // Results: a,b,c,d,e
console.log(thirdArray.join('')); // Results: abcde
console.log(thirdArray.join('-')); // Results: a-b-c-d-e

// 14. Reversing an Array (in place, i.e. destructive)
console.log(thirdArray.reverse()); // ["e", "d", "c", "b", "a"]

// 15. sort
let unsortedArray = ["Alphabet", "Zoo", "Products", "Computer Science", "Computer"];
console.log(unsortedArray.sort()); // Results: ["Alphabet", "Computer", "Computer Science", "Products", "Zoo" ]



// 16. Creating an Object

let newObj = {
    name: "I'm an object",
    values: [1,10,11,20],
    others: '',
    "1property": 'example of property name starting with digit'
};

// 17. Figure out what keys/properties are in an object
console.log(Object.keys(newObj));
// Results: [ 'name', 'values', 'others', '1property' ]

// 18. Show all values stored in the object
console.log(Object.values(newObj));

// Results:
// [ 'I\'m an object',
//   [ 1, 10, 11, 20 ],
//   '',
//   'example of property name starting with digit' ]

// 19. Show all key and values of the object
for (let [key, value] of Object.entries(newObj)) {
    console.log(`${key}: ${value}`);
}
// Results:
// name: I'm an object
// values: 1,10,11,20
// others:
// 1property: example of property name starting with digit

// 20. Accessing Object's Properties
// Two different ways to access properties, both produce same results
console.log(newObj.name);
console.log(newObj["name"]);
// But if the property name starts with a digit, we CANNOT use dot notation
console.log(newObj["1property"]);

// Set: collection of UNIQUE values, each value occur ONLY once
// 21. Creating a new Set
let newSet = new Set();

// 22. Adding new elements to a set
newSet.add(1); // Set[1]
newSet.add("text") // Set[1, "text"]

// 23. Check if element is in set
newSet.has(1); // true

// 24. Check size of set
console.log(newSet.size) // Results: 2

// 25. Delete element from set
newSet.delete(1) // Set["text"]

// 26. Set Operations: isSuperSet
function isSuperset(set, subset) {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}
// 27. Set Operations: union
function union(setA, setB) {
    let _union = new Set(setA);
    for (let elem of setB) {
        _union.add(elem);
    }
    return _union;
}

// 27. Set Operations: intersection
function intersection(setA, setB) {
    let _intersection = new Set();
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}
// 28. Set Operations: symmetricDifference
function symmetricDifference(setA, setB) {
    let _difference = new Set(setA);
    for (let elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem);
        } else {
            _difference.add(elem);
        }
    }
    return _difference;
}
// 29. Set Operations: difference
function difference(setA, setB) {
    let _difference = new Set(setA);
    for (let elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}

// Examples
let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);

console.log(isSuperset(setA, setB));            // => true
console.log(union(setA, setC));                 // => Set [1, 2, 3, 4, 5, 6]
console.log(intersection(setA, setC));          // => Set [3, 4]
console.log(symmetricDifference(setA, setC));   // => Set [1, 2, 5, 6]
console.log(difference(setA, setC));            // => Set [1, 2]

