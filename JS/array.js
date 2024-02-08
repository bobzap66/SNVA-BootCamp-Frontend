const emptyArray = [];
const numbers=[1,2,3,4,5,6,7];
const fruits = ["apple", "banana", "orange"];

console.log("Numbers array:" + numbers);
console.log("Fruts Array:" +fruits);
console.log("length of Fruits Array:" + fruits.length);
console.log(numbers[1]);
console.log("2nd element: " + numbers[1]);
console.log("3d element of Fruits: " + fruits[2]);
console.log("Before push method:" + numbers);
numbers.push(25);
console.log("after push method: "+ numbers);
console.log("before pop method: " + fruits);
fruits.pop(); 
console.log("after pop method: " + fruits);
console.log("before shift method: " + numbers);
numbers.shift();
console.log("after shift method: " + numbers);
console.log("before unshift method:" + numbers);
numbers.unshift(90);
console.log("after unshift method: " + numbers);
console.log("Array Iteration");
for( let i = 0; i < numbers.length; i++)
{
    console.log("i = " + i + " and value = " + numbers[i]);
}