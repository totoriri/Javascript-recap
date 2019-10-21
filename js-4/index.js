
// you don't use this so much whe you use react.(this is more backend thing)
// map もオブジェクトもkey で情報管理していくものだけど、大きく違うのはmap はkey に様々なdate type のものを格納できる。
const map = new Map();
map.set("key1", "student1").set(2, 40).set("isHere", true)
console.log("map", map)

console.log(map.get(2))
console.log(map.has("4"))
console.log(map.size)

const map2 = new Map([
    ["canada", "vancouver"],
    ["japan", "tokyo"],
    ["spain", "madrid"]
])

// the output is "canada","japan","spain"
for (let country of map2.keys()) {
    console.log("country",country)
}
for (let city of map2.values()) {
    console.log("country",city)
}
for (let item of map2) {
    console.log("country",item)
}

// set もあんまりfront-end では使わないらしいよ
let set = new Set();
set.add({ name:"Ayako"})
set.add({ name:"Francois"})
set.add({ name: "Shin" })
console.log("set", set)
set.add({ name: "shin" })

console.log("set", set.size)

set.forEach((value, value2, set) => {
    console.log("foreach", value, value2, set);
})


// rest とspread operator めちゃ使うってさ。
// spread object よく使うてさ。string の spreadはあんまり使わない
// function addition(className, ...students) {
//     console.log(`these are the students for ${className}  class:`, students);
// }

// addition("web dev 2", "paulo", "gustavo", "vlad", "jun")

function addition(className, ...students) {
    console.log(`these are the students for ${className}  class:`, students);

    students.map((student) => {
        student.gender === "female" && console.log("female student", student)
    })
}

addition("web dev 2",
    { name: "paulo", gender: "male" },
    { name: "risa", gender: "female" },
    { name: "vlad", gender: "male" },
    { name: "jun", gender: "male" }
)


// spread operator
let numArr = [5, 7, 8, 9, 5, 3]


console.log("spread number", ...numArr)
// output:{0: 5, 1: 7, 2: 8, 3: 9, 4: 5, 5: 3}
console.log("added extra element with new  array", { ...numArr })
// output: [5, 7, 8, 9, 5, 3]
console.log("added extra element with new  array", [...numArr])

let seagull = {
    color: "white",
    sound: "noisy",
    floatsOnsea:true
}

// overriding object values
console.log("spread arr", { ...seagull, breakColor: "yello" })
// the value of color is overrided to "yellow" 
console.log("spread arr", { ...seagull, color: "yello" })


function alertMe() {
    console.log("ahhh")
}

// 1st parameter has to be a function!()はいらない！エラーになる　
// This rule is actually the same for ALL methods that has function as argument(like map , settimeout) 
setTimeout(alertMe,10)
setTimeout(() => {
    alertMe();
}, 15);

// これはparameterとして渡すときに、（）が必要なパターン
// function returnString() {
//     return "hiiiii"
// }
// console.log(returnString());

function tick() {
    console.log(new Date().getSeconds())
}

const tickVar = setInterval(tick, 100)
setTimeout(() => clearInterval(tickVar), 10000)


