---
title: 7 Beginner's Tricks in Using Arrays in JavaScript
published: true
description: Some tricks that I've learned from "JavaScript: The Good Parts" by Douglas Crockford.
tags: #javascript, #beginners, #todayilearned
---

References:
1. JavaScript: The Good Parts by Douglas Crockford, 2008. Page 58-64.
2. [Mozilla JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Note: Beginner is a relative and subjective descriptive term. I define "tricks" as ways of writing JavaScript to manage arrays. In my case, the ideas and concepts illustrated in the book: "JavaScript: The Good Parts" are things that I didn't realize before.

Article Updates:
* 

<hr>

# 1. Arrays vs Objects

JavaScript Arrays are essentially objects. In the beginning, I simply assumed that both are the same thing; but in reality, arrays inherit from `Array.prototype`. Which gives arrays access to some useful methods. 

In his book, Crockford mentioned a Rule of Thumb: "Use Arrays when **property names** are small sequential integers, else use objects".

I guess the rationale is to ease the retrieval of data. For example, rankings data would benefit from being stored in an Array rather than an Object. A simple loop would enumerate the rankings in order. On the other hand, it would make sense to store stats about the rankings in an object with properties such as "Best Timing", "Contributions", "Identity", etc.
 
# 2. How to Differentiate Arrays and Objects

Using `typeof` operator, we observe that an array would be flagged as `object`. I would imagine that verification of whether an array is indeed an array or just an object would be useful in writing unit tests. 

The below is a code snippet from the book which allows us to check if the variable is indeed an Array.


```javascript

// Return true if value is an Array
var is_array = function (value) {
    return Object.prototype.toString.apply(value) === '[object Array]'; 
}
```


# 3. Enumeration

Since arrays are objects, we could use `for...in` to enumerate properties of an array. The problem of doing so is that the prototype chain would be traversed; leading to unrelated properties being enumerated. 

The suggested way of enumerating values in an array is to use a `for` loop.
~
```javascript
var i;
for(i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}
```
~
# 4. Augmenting Array with New Methods

We can augment `Array.prototype` to introduce new behaviors to all arrays in the program. Let's say we want to add `some_function` that can be used by all Array objects, we can do so as shown below:

```javascript
Array.some_function = function () {
    // insert code of the function
    return some_value;
};
```

To introduce new behavior to specific arrays, we simply add a new property to them. For example, let's say we want to add a `total` function to a data_array, we can do so as shown below:

```javascript
data_array.total = function(){
    // insert code here to sum up values in the array
    return total;
}
```
# 5. Array Initialization

By default, JavaScript Arrays are not initialized. For example `var newArray = []` would simply create an empty array. Attempting to access `newArray[94]` would return `undefined`.

Let's say we want to initialize the array with value `0`, we can simply write a for loop to iterate through the array and assign each index with the value. But having to do so each time you want to initialize an array would lead to code repetition. A smarter way is to create an Array function as shown:

```javascript
Array.init = function (size, initial_value) {
    var i;
    var array = [];
    for (i = 0; i < size; i += 1) {
        array[i] = initial_value;
    }
    return array;
};

// Initialize an Array, size 10, with value 0
var zeroArray = Array.init(10,0);
```

# 6. Deleting Elements in Array

While we can simply remove an element from an array by using `delete myArray[2]`, doing so would create a "hole" in the array. 

One way we can delete elements from an array without leaving holes behind is to use the `splice` method. 

```javascript
myArray.splice(target_index,number_of_elements);
```

Splice would remove the desired number of elements starting from the target index as shown above and remove the holes left behind. However, this is done by removing and reinserting the values after the hole to the new slot, which means it might take some time if the array is large. 

# 7. Adding Elements to Array

The first thing that comes to mind is to assign the new element to the end of the array through `myArray[myArray.length]`. 

But there is a `push` method that's available to array that can let us do the same thing. 

```javascript
myArray.push(myElement)
```


<hr>

I've ordered the tricks from the most impactful to the least impactful, at least to me. The biggest eyeopener for me is the idea of extending arrays with custom methods as a way to reduce code repetition. 

Thank you for reading and I hope that you gained something from this article. :smile:
