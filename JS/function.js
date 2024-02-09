function add (x,y) {
    return x+y;
}

console.log("addition: ", add(67,54));

var ans = function (x,y)
{
    return x*y;
}

console.log("anonymous function for multiplication:", ans(5,20));

var div=(x,y) => {return x/y};
console.log("arrow function for division: " ,div(100,5));