// Arrays are objects

var data = [1,2,3,4,5];

var add = function(a,b){
    return a + b;
}

data.total = function(){
    return this.reduce(add, 0);
}

data.sub = 10;

console.log(data.total());
console.log(data.length);