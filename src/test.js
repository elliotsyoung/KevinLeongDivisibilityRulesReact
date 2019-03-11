let arr1 = [1,2,3,4,5,6,7,8,9];
//How to get the last element in the array
const lastElement = arr1[arr1.length-1];
console.log(lastElement);

//How to double every element in the array
let arr2 = [1,2,3,4,5,6,7,8,9];
let arr2_doubled = [];
for(let number of arr2) {
    const doubled_number = number * 2;
    arr2_doubled.push(doubled_number);
}
console.log(arr2_doubled);

// How string.split() works
const greeting = "Hello Kevin I hope you are having a good morning";
const greeting_words = greeting.split("");
console.log(greeting_words);

//How Javascript adds Strings
let num1 = "4";
let num2 = "5";
let num3 = num1 + num2;
console.log(num3);

let num4 = parseInt(num1) + parseInt(num2);
console.log(num4);



//How we can separate a number into its separate digits
const number = 7445690;
const number_string = number.toString();
//The digits string is an array
const digits_string = number_string.split("");
console.log(digits_string);

// Here is how we can convert each string in the digits array into a number
let digits = [];
for(let number_string of digits_string){
    const number = parseInt(number_string);
    digits.push(number)
}
console.log(digits);

//Understanding higher order functions
//A higher order is just a function that takes another function as an argument

const number_array_3 = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const doubled_number_array_3 = number_array_3.map((number) => { return number * 2});

console.log(doubled_number_array_3);


let message = "Hello Kelton this is a message from Elliot";

let words = message.split(" ");

console.log(words);

let bad_words = ["Elliot", "Java", "pineapple"]



let numbers_to_sum = [1,2,3,4];
// "1+2+3+4"
let sum = 0;

for(let i = 0; i < numbers_to_sum.length; i++){
    sum = sum + numbers_to_sum[i];
}
console.log(sum)





