// topics(2019_10_17_Thursday: recap / javascript - 3)
// 1: map method


// this "map" is one of method Returns the result as new array instead of manipulating the original
const student = ['gustabo', "ronan", "jun"]
student.map((student) => console.log(`hi,${student}`));

// you don't have to put Parenthesis if there is only one parameter.
const greetings1 = student.map(student => `hi, ${student}`);
console.log(`greetings`, greetings1);

// common mistake!! if you want to use {}, you need to write return!
// const greetings = student.map(student => {
//     `hi, ${student}`
//     );}

const greetings2 = student.map(student => {
    //  more culculation.....
    return `hi, ${student}`
});
console.log(greetings2);

const greetings22 = student.map((student,index) => {
    //  more culculation.....
    return `hi, ${student} index:${index}`
});
console.log(greetings22);

// 
const getstudentgreetings = (student) => `hi ,${student}`
const greetingReturn2 = student.map(
    (student) => getstudentgreetings(student))
console.log(greetingReturn2);

// shorthand way of passing para inside a function
// 単純に変数のなかに処理を書いて、mapの中にごちゃごちゃアロー関数書くのを防いでる。
const greetingReturn3 = student.map(getstudentgreetings)
console.log("greetingsReturn3", greetingReturn3);


// -----filter

// const student = ['gustabo', "ronan", "jun"]

// must retun a boolean to filter 
const filteredResult = student.filter(student => student.length > 4)
console.log(filteredResult);


// ----- 3 .splice

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// syntax of splice
// array.splice(index, deleateCount, item1, ....., itemX)

//ex1 : insert 6,7 before 10
const number = [1, 5, 10];
number.splice(2, 0, 6, 7)
console.log(number)
// the output:[1,5,6,7,10]


// ex2 : Remove 0 (zero) elements from index 2, and insert "drum"
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"] 
// removed is [], no elements removed


// ex3 :Remove 1 element from index 3
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"] 

// ex4 :Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"] 
// removed is ["angel", "clown"]



// -----5.foreach
// for-each is one of shorthands of for statement.

/* ex1 */
const a = [1, 5, 7, 9]
// for
for (let i=0; i < a.length; i++) {
    console.log(a[i])
}

// for each
a.forEach(item => console.log(item))


// // なんでこれだとundifinedになるんだろう？
// foreachの書き方もうちょっと調べてみよう
let result = a.forEach(item => console.log(`i love ${item}`))
console.log("result", result);
// うーん、中にCONSOLE書くとうまくいくなぁ。

// これもだめ。よくわからん、、、
// let result = a.forEach((item,index) => {
//     a[index] = item * 2;
// })
// console.log("result", result);

let results = a.forEach((item,index) => {
    return a[index] = item*2
})
console.log(results)

// なんで、上のだとうまくいくのに、したのだとundefined になっちゃうんだろう？？？
// const b = [];
//  a.forEach((item,index) => {
//     b.push(item*2)
// })
// console.log(b)

// const c = [];
// let results1 = a.forEach((item,index) => {
//     b.push(item*2)
// })
// console.log(results1)

// ふーん、mapだとreturnで、foreachではできなかった処理が簡単にできるのね。
// mapとforeachではreturnの扱いにどんな違いがあるっていうの！！？？？
let results1 = a.map((item) => {
   return item*2
})
console.log(results1)



// 多分コールバック関数が関係してる！あとで気が向いたら調べまくる！！

let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

fruits.forEach(function(fruitItem) {
    console.log("I want to eat a" + fruitItem);
});


// let result = animals.forEach(animal => console.log(`i love animals`))


// reduce
let numbers = [1, 1, 1, 1, 2]
// 構造的には、第一引数に累積値、第二引数に現在処理されてる要素を書き込む。
let totalNum = numbers.reduce((total, currentNum) => total + currentNum)
console.log(totalNum)

// find----
let cars = ["mitsubish", "toyota", "ford", "benz", "ferrari"]
let found = cars.find((car, index) => car === "ford")
console.log(found);

// 9 include(return a boolean)
// used a lot!!!
console.log(`is there a volswagen?`,cars.includes("volswagen"))
console.log(`is there a volswagen?`, cars.includes("toyota"))

// 10 some(return boolean)
let isFound = cars.some(car => car === "ford");
console.log("isFound", true)

// indexOf
let indexOFferrari = cars.indexOf("fferrari")
let indexOFTasla = cars.indexOf("tesla")

console.log("indexifferrari", indexOFferrari);
console.log("indexTesla", indexOFTasla)


class Student{

    static studentName ="nobu"
    constructor(name, age) {
        // if you declear this : grobal variable inside of a class
        this.name = name;
        this.age = age;
    }
   
    greetStudent() {
        return `Hi , ${this.name}`
    }
}

const firstStudent = new Student("ayako",32)
console.log("grretstudent", firstStudent.greetStudent(), firstStudent.age);


// class Student{
//     constructor(name, age) {
//         // if you declear this : grobal variable inside of a class
//         this.name = name;
//         // private variable :cannot use it outside constructor
//         const studentName = name;
//     }

//     greetStudent() {
//         return `Hi , ${studentName}`
//     }
// }
//  error message shows up because studentName is private variable . Use "this" instead of const and let in this case

function checkAlive(health) {
    return health > 0;
}
console.log(checkAlive(5))