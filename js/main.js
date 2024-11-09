// 1.
function firthNumber() {
    let ason = parseInt(prompt("1-sonni kiriting"))
    let bson = parseInt(prompt("2-sonni kiriting"))
    let cson = parseInt(prompt("3-sonni kiriting"))
    return Math.floor((ason + cson) / bson)
}
console.log("1-3 sonning yegindisi 2-sondan martta katta:", firthNumber());
// 2.
let number = prompt("Son kiriting") - 0;

function fn(son) {
    let result = 0 
    for(let i = 1; i <= son; i++){
        if(son % i ++){
            result += i
        }
    }
    console.log(result);
}
fn (number)
// 3.
const arrad = [3, 7, 2, 1, 4];
const max = Math.max(...arrad);
console.log("Eng katta qiymat:", max);
// 4.
const arr1 = [2, 1, 3, 4, 5, 6, 7];
const sum = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("yig'indi:", sum);
// 5.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function PromptN1(example) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2) {

        }
        else{
            console.log(array);
        }
    }   
}
PromptN1()
// 6.
let numbersList = prompt("SON kiriting")
function fn(arr){
    for(let i = 0 ; i < arr.length;i++){
        if(arr[i] % 2 == 0){
            arr[i] = 0
        }
    }
}
fn(numbersList)
console.log(numbersList);
// 7.
const firstNum = prompt("1-son kiriting") - 0
const action = prompt("Action kiriting") 
const secoundNum = prompt("2-son kiriting") - 0
switch(action){
    case "+":
        console.log(firstNum + secoundNum);
    break;
    case "-":
        console.log(firstNum - secoundNum);
    break;
    case "/":
        console.log(firstNum / secoundNum);
    break;
    case "*":
        console.log(firstNum * secoundNum);
    break;
}

// 1-Vazifa
// 1-.
function reverseThreeDigit() {
    const num = prompt("3 xonali son kiriting:");
    if (num.length === 3) {
        return parseInt(num.split('').reverse().join(''), 10);
    } else {
        return "Iltimos, faqat 3 xonali son kiriting.";
    }
}

console.log(reverseThreeDigit());
// 2-.
function calculateFactorial() {
    const num = parseInt(prompt("Son kiriting:"));
    
    if (isNaN(num) || num < 0) {
        return "Iltimos, musbat son kiriting.";
    }
    
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    
    return factorial;
}

console.log(calculateFactorial());
// 3-.
function compareAges(obj1, obj2) {
    if (obj1.age > obj2.age) {
        console.log(obj1.name);
    } else {
        console.log(obj2.name);
    }
}

compareAges({ name: "Botir", age: 22 }, { name: "Anvar", age: 20 });
// 4-.
function countDown(n) {
    if (n < 0) return;
    console.log(n);
    countDown(n - 1);
}

countDown(5);
// 5-.
let user = { name: "Shaxzod" };
let age = { age: 25 };
let userJob = { job: "Developer" };

function mergeObjects(...objs) {
    return Object.assign({}, ...objs);
}

console.log(mergeObjects(user, age, userJob));
// 6-.
const salaries = {
    aXodim: 150,
    bXodim: 180,
    cXodim: 210
};

function totalSalary(salaries) {
    return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
}

console.log(totalSalary(salaries));
// 7-.
function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([3, 7, 22, 9, 15]));
// 8-.
const arr2 = [2, 4, 6, 7, true, false, null, undefined];

function sumArray(arr) {
    return arr.reduce((sum, value) => sum + (typeof value === "number" ? value : 0), 0);
}

console.log(sumArray(arr2));


// 2-Vazifa 
// 1-.
const arr = [
    {
        id:1,
        name:"Botir",
        age: 20, 
        hobby: "Football",
    },
    {
        id:2,
        name:"Anvar",
        age: 22, 
        hobby: "Basketball",
    },
    {
        id:3,
        name:"Shohrux",
        age: 20, 
        hobby: "Football",
    },
    {
        id:4,
        name:"Akram",
        age: 22, 
        hobby: "Basketball",
    }
]
function getHobbies(arr) {
    return arr.map(item => [item.age, item.hobby]).flat();
}
console.log(getHobbies(arr));
// 2-.
const nums = [3, 4, 3, 2, 3, 4, 5, 6, 3, 5, 6, 7, 8, 9, 5, 4, 3];

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates(nums));
// 3-.
const numbers = [22, 112, 3, 4, 222, 123, 43];

function addMaxToFirstElement(arr) {
    const max = Math.max(...arr);
    const newArr = [...arr];
    newArr[0] += max;
    return newArr;
}

console.log(addMaxToFirstElement(numbers));
// 4-.
function addNameToArr(arr) {
    const name = prompt("Ism kiriting:");
    const exists = arr.some(item => item === name);
    if (!exists) arr.push(name);
    return arr;
}

console.log(addNameToArr(["Akram", "Botir", "Nurmuhammad"]));
// 5-.
function collectNumbers() {
    let nums = [];
    let num;
    do {
        num = prompt("Son kiriting (Yakunlash uchun bo'sh qoldiring):");
        if (num) nums.push(Number(num));
    } while (num);
    return nums.reverse();
}

console.log(collectNumbers());


