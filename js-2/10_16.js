// topics (2019_10_16_wednesday: recap/javascript-2)
// 1: objects inside an array.
// ・how to acsess object values inside an array.
// ・null
// ・how to check the object value exsist or not.
// 2: arrow function
// 3: methods to manipulate elements inside an array
// ・pop(), push(), shift(), unshift()
// 4: looping
// ・for,  for..of, for..in(es6), while , do..while
//   (→ how can we print each elements inside an array of  object?)


// topic:1-------------------------------------------------------------------
// It is common to assign some object to array in javascript.
const classObj = [
    {
        name: "ayako",
        type: "teacher",
        // この,は、jsonだとエラーが起こるらしいけど、javascriptだと大丈夫らしい。
        age: 31,
    },
    {
        name: "risa",
        type: "student",
        age: 25,

    },
    {
        name: "gustabo",
        type: "student",
        age:20,
    }, 
    null
]

// we don't have  index[3](= 4th object in this case) ,so  at first "undifined" is printed. 
// and if you add null to index[3] ,the output will be "null".
console.log("classObj", classObj[3]);
// !! (vinvin operator)is used to check whether the value  exist or not.
// if exist , the output is "true"(⇆"false")
console.log("classObj", !!classObj[1].age);

// using if statement (true of false)
console.log("classObj", classObj[1].age?"age exist!":"age dosent exist!");

// null and undifined are "false" when using as a boolean.
console.log("classObj2", classObj[3] ? "this exsists" : "this dosenot exsist###"); // "this is desenot exsist" is printed because of null
console.log("classObj2", !classObj[3] ? "this exsists" : "this dosenot exsist");

// assigning  a conditional statement to isYoung valiable.
let isYoung = classObj[2].age < 30;
console.log("classObj2", isYoung ? "the person is youngest" : "the person is not youngest");
// なんか｜｜だと、どっちかが行われる処理になるらしいよ。だからtrueが表示される。
// ＆＆だと、trueだと、＆＆以下の処理が行われるって処理になるらしい。
console.log("classObj2", isYoung && "the person is youngest!!!")


// topic:2 -------------------------------------------------------------
const sayHello = (name) => {
    return `hello,${name}`
}
// なぜrisaをbacktickで囲う必要があるのか。
// →risa は変数じゃないから。この場合文字列を引数に渡してる。変数で渡したいなら、変数宣言どっかでしとけばいい。
// （試しに下の自分で作った例みてみて！！）
console.log(`sayHello`, sayHello(`risa`));

// ex
let fruit = "apple"
function favorite(name) {
    return `i love ${name}`
}
console.log(favorite(fruit));


// topi:3-----------------------------------------------------------

/* when you want to add a new element to an array ... unshift() or push()  */

let animalArr = ["giraff", "cat"];

// unshift() method add one or more element at the beginning of an array the new length of the array.
animalArr.unshift("alpaca");
console.log("animals", animalArr)
// push() method add one of more elemnt to the end of an array and returns the new length of the array.
animalArr.push("lion");
console.log(animalArr);



/* when you want to remove an element from an array ... shift() or pop()*/

// shift() method removes the first element from an array.
animalArr.shift();
// pop() method removes the last element from and array and returns that element.
animalArr.pop();
console.log(animalArr);

// ちなみに引数に　変数.pop()を渡すと、outputはremoveされたelementになる。
// returnとしては、取り除く系のpop()とshift()はその取り除かれた要素を、逆に付け加える系の pushとunshiftは新しいarrayのlengthを返すっていう共通点。
console.log(animalArr.pop());


// topic:4 ------------------------------------------------------------------


let houseType = ["bachelor", "condo", "apartment", "house", "basement"]

// for 
for (let i = 0; i < houseType.length; i++) {
    console.log(`housetype no.${i}.${houseType[i]}`);
}

// for ... of = this statement creates a loop itetating over iterable object like array .
for (let type of houseType) {
    console.log(`${type}`)
}

// the output : printed ["bachelor", "condo", "apartment", "house", "basement"] 5 times.
// (it's because this array is assigned to the variable "type" each time)
for (let type of houseType) {
    console.log(`${houseType}`)
}


// for ... in
// array loops for in :give you index 
for (let typeIndex in houseType) {
    console.log(typeIndex);
}

for (let typeIndex in houseType) {
    console.log(houseType[typeIndex]);
}



// ex2
var obj = {
    name: 'John',
    age: 45,
    country: 'Japan'
}

// got properties . passed item to print all properties.
// the output: name age country (key)
for( var item in obj ) {
    console.log( item );
}

// got  values of each property. that's why you need to use obj[item].
// the output: John 45 Japan (value)
for ( var item in obj ) {
    console.log( obj[item] );
}

// another example
let weather = {
    temperature: "30 celcius",
    city: "vancouver",
    date:"Nov 16th"
}

// for..in give you index 
for (let key in weather) {
    console.log("key", key ,weather[key])
}

//結what is the difference between for..in and for..of
let alphabet = ["a", "b", "c", "d"]
for (var n in alphabet) console.log(n);
// the output: 0 1 2 3 (index)
for (var n of alphabet) console.log(n);
// the output: a b c d (value)
