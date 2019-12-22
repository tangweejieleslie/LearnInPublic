// Arrays are objects

var data =  [4, 8, 15, 16, 23, 42];


var add = function (a, b) {
    return a + b;
}

data.total = function () {
    return this.reduce(add, 0);
}

data.sub = 10;

console.log(data.total());
console.log(data.length);

var is_array = function (value) {
    return Object.prototype.toString.apply(value) === '[object Array]';
}


Array.prototype.reduce = function (f, value) {
    var i;
    for (i = 0; i < this.length; i += 1) {
        value = f(this[i], value);
    }
    return value;
};


var sum = data.reduce(add, 0);
console.log(sum);


console.log(typeof data);
console.log(is_array(data));