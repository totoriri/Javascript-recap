
// topics(2019_10_15_tuesday: recap/javascript-1)
// 1: The difference between var , let and const.
// 2: how to convert date types (number ↔︎ string)
// 3: how to acsess the key and value that objects have.
// 4: distructing array
// 5: shorthand to write if statement.
    
    
// topic:1 --------------------------------------------------------

// just cheacking variable after changing value (mutable)
var name = "risa"
console.log("1:name", name);

name = "ali"
console.log("1:name", name);

// es6(let is mutable)
let animal = "cat"
console.log("1:animal", animal,3)

animal = "dog";
console.log("1:animal", animal);

// const is not mutable.
// so , this shows error if you  assained value to the variable.
const age = 31
console.log("1:age", age)
// age = 50


// topic:2  -------------------------------------------------------------
// converting  the string to number to calculate.
const count = "1"
const updatedCount = parseInt(count);
console.log(count + 1);


// the second line of this code covert string to number.
// tostring　covert number to string.
const counts = "1234"
const updatedCounts = parseInt(counts);
console.log("2:number", updatedCounts + 1);

console.log(`3:template literlals`, `my age is ${age}`);

// tostring() example1
const num = 10000000000000; 
const digits = num.toString().length; 
console.log("digits :" + digits);  // the output is desits : 14 

// tostring() example2
const array = ["りんご","みかん","メロン","もも","バナナ"]
console.log("好きなフルーツは、" + array.toString());


// topic :3 --------------------------------------------------------
const risaObj = {
    name: "risa",
    age: 24,
    profession: "front-end developer",
    pet: ["cat", "dog"]
}

console.log("6:pets", risaObj.pet);

// this is how to print the value that object has.
console.log(risaObj.profession)
// this is how to acess the value inside an array using index number.
console.log(risaObj.pet[0])

console.log(risaObj["profession"]);

const jobtitle = "profession";
console.log(risaObj[jobtitle]);


// You can access object properties in two ways: . or [] 
const obj = {
    key: "value"
};
// .dot
console.log(obj.key); // => "value"
// []
console.log(obj["key"]); // => "value"


// this is the difference between []squreblacket and .(dot)
const keyName = "webdev";

let classes = {
    [keyName]: "this is webdev"
}

console.log(classes[keyName]);
// you need to write webdev because of dot and variable declearion.
console.log(classes.webdev);

// ex2(どうやってvalue 取り出すかの例２)
let fruit1 = "apple1";
let bag1 = {
    [fruit1]: 5,
};
alert(bag1.apple1);


// これは文字列として、扱われてる。
let fruit2 = "apple2";
let bag2 = {
    fruit2: 5,
};
alert(bag2.fruit2);


// topic:4 -----------------------------------------------------------
const {pet,profession} = risaObj;
console.log("6:pets", pet, age);

// 同じオブジェクトのプロパティを何度もアクセスする場合に、何度もオブジェクト.プロパティ名と書くと冗長となりやすい。 そのため、短い名前で利用できるように、そのプロパティを変数として定義し直すことがある。
// 次のコードでは、languagesオブジェクトのプロパティをそれぞれ変数jaとenと定義し直している。

const languages1 = {
    ja: "日本語",
    en: "英語"
};
const ja1 = languages1.ja;
const en1 = languages1.en;
console.log(ja1); // => "日本語"
console.log(en1); // => "英語"

// このようなオブジェクトのプロパティを変数として定義し直すときには、分割代入（Destructuring assignment）が利用できる。

// オブジェクトの分割代入では、左辺にオブジェクトリテラルのような構文で変数名を定義する。 右辺のオブジェクトから対応するプロパティ名が、左辺で定義した変数に代入される。

// 次のコードでは、先程のコードと同じようにlanguagesオブジェクトからjaとenプロパティを取り出して変数として定義している。 代入演算子のオペランドとして左辺と右辺それぞれにjaとenと書いていたのが、分割代入では一箇所に書くことができる。

const languages2 = {
    ja1: "日本語",
    en1: "英語"
};

const { ja2, en2 } = languages2;
console.log(ja2); // => "日本語"
console.log(en2); // => "英語"



// array（doning the same thing as 上）
const students = ["vlad", "isao","risa","cedric"];

const [firstStudent, secondStudent,thirdStudent] = students;
console.log('4:destructing', firstStudent, secondStudent, thirdStudent);



// topic:5 --------------------------------------------------------
// if statement
const number1 = 3;
const number2 = 5;

const result = number1 === number2 ? "number 1 is same as number2" :"number1 is not same as  number2"
console.log("7:conditional",result)


