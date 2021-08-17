



// var books = ['bangla', 'english', 'math', 'history'];

// কোন একটি array এর element এর অবস্থান জানতে indexOf() ব্যবহার করতে হয় যেমনঃ-
// var index = books.indexOf('history')
// console.log(index);

// ------------------------------------------

// কত নাম্বারে কে আছে জানতে 
// var index = books[1];
// console.log(index);


// ------------------------------------------

// কোনো একটি array এর উপাদান এর মান পরিবর্তন করতে হয় 
// var numbers = [50, 60, 70, 80];

// numbers[1] = 100;
// numbers[3] = 500;
// console.log(numbers)

// ------------------------------------------

// কোনো একটি array তে নতুন কোনো element যোগ করতে চাই push ব্যবহার করতে হয় ,যেমনঃ
// var numbers = [50, 60, 70, 80];
// numbers.push(50);
// numbers.push(100);

// console.log(numbers);

// ------------------------------------------

// কোনো একটি array ের কোনো একটি Element বাদ বা remove করে দিতে pop() ব্যবহার করতে হয়, যেমনঃ
// var numbers = [50, 60, 70, 80];
// numbers.pop();
// numbers.pop();


// console.log(numbers);

// ------------------------------------------
// var numbers = [50, 60, 70, 80];

// var lastItem = numbers.pop();


// console.log(lastItem);

// ------------------------------------------//


// যদি কোনো একটি Array এর কোনো একটি Element এর  fastItem remove করতে হয় তাহলে shift() ব্যবহার করতে হয়,যেমনঃঃ
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);

// var numbers = [5, 10, 20, 30];
// numbers.shift();
// console.log(numbers);

// যদি কোনো একটি Array এর কোনো একটি Element এর  fastItem এ কোনো কিছু add করতে হয় তাহলে unshift() ব্যবহার করতে হয়,যেমনঃঃ

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon", "Pineapple");
// console.log(fruits)

// var numbers = [5, 10, 20, 30];
// numbers.unshift(12, 50);
// console.log(numbers);

// --------------------------------------------------------------



// 17-5 Compare variables and Comparison operator
// একটার সাথে আরেকটার তুলোনা করতে এইভাবে করতে হয়

// var yourLove = 99;
// var myLove = 100;

// console.log(yourLove > myLove);
// console.log(yourLove < myLove);
// console.log(yourLove == myLove);
// console.log(yourLove != myLove);




// --------------------------------------------------

//17-6 Make conditional decision, if-else, comparison
// var canacurPrice = 50;
// var myMony = 10;

// if (canacurPrice == myMony) {
//     console.log("canacur khamu")
// } else {
//     console.log("canacur khaitam na")
// }



// --------------------------------------------------



// 17-7 Handle multiple conditions, and or

// var job = false;
// var taka = true;
// var house = false;
// var takaSave = 6000000;

// if ((job == true || takaSave < 5000000) && (house == true || job == true)) {
//     console.log("biye korbo")
// } else {
//     console.log("biye korbo na")
// }







// --------------------------------------------------




// 17-8 (Advanced) Multi stage condition and nested conditions



// var cockled = 50;
// var badam = 100;
// var potato = 10;


// var myMony = 200;

// if (cockled < myMony) {

//     if (cockled > potato) {
//         console.log("potato khamu")
//     }

//     console.log("cockled khamo")

// }



// else {
//     console.log("kicho e khamo na")
// }




// var books = ["bangla", "english", "Math"];

// var indexNumber = books.indexOf("Math");
// console.log(indexNumber);


var books = ["bangla", "english", "Math"];

// books[1] = "history";
// console.log(books);

// console.log(books.indexOf("english"));
// console.log(books[0]);