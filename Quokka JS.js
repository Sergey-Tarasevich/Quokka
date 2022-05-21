/* eslint-disable no-octal */
/* eslint-disable no-unused-vars */
// Qoukka JS

// obj create. obj to arr
const person = {
  name: 'Sergey',
  surname: 'Tarasevich',
}

//create empty arr with key and value
const arrValue = []
const arrKey = []

for (let value in person) {
  arrValue.push(person[value])
}

for (let key in person) {
  arrKey.push(key)
}

//
arrValue
arrKey

//result arr
const arrResultSpread = [...arrKey, ...arrValue]
arrResultSpread

// Object to array  // Объект в массив
const arrObjEntries = Object.entries(person)
arrObjEntries

const arrResultConcat = arrKey.concat() + ',' + arrValue.concat()
arrResultConcat

const arrResultObjKeys = Object.keys(person)
arrResultObjKeys

const arrGetOwnProperty = Object.getOwnPropertyNames(person)
arrGetOwnProperty

//key in obj
console.log('name' in person)
console.log('Name' in person)

// eslint-disable-next-line no-prototype-builtins
const arrHasOwnProperty = Object.hasOwnProperty('name')
arrHasOwnProperty

// copy obj
const personChild = Object.assign({}, person)
personChild

const personChild2 = { ...personChild }
personChild2

const personChild3 = {}
for (let key in person) {
  personChild3[key] = person[key]
  console.log(personChild3[key])
}
personChild3

//деструктуризация

// String => Array => Object
let strToArr = 'Hello World'

const arrFromStr = [...strToArr]
arrFromStr

const objFromArr = Object.assign({}, arrFromStr)
objFromArr

//arr Fib
const arrFib = [0, 1]

function fib(num) {
  for (let i = 2; i <= num; i++) {
    const prevNum1 = arrFib[i - 1]
    const prevNum2 = arrFib[i - 2]

    arrFib[i] = prevNum1 + prevNum2
    arrFib.push(arrFib[i])
  }
  return arrFib.pop()
}
fib(7)
arrFib

//fib recursion
const fib2 = num => {
  if (num < 2) {
    return num
  }
  return fib2(num - 1) + fib2(num - 2)
}

//prototype - __proto__ - function constructor - class

//ES5
// function Cat(name, color) {
//   this.name = name
//   this.color = color
// }

// Cat.prototype.say = () => console.log("MYAU")

class Cat {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  say() {
    return console.log('MYAU')
  }
}

const cat = new Cat('Milan', 'Leopard')
// console.log(cat)
cat.say()

//example prototype and this
const sergey = {
  name: 'Sergey',
  age: 33,
  logInfoAbout: function () {
    // console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    // console.groupEnd()
  },
}
// sergey.logInfoAbout()

const denis = {
  name: 'Denis',
  age: 30,
  __proto__: sergey,
}
// denis.logInfoAbout()

//closure
function funcA() {
  const a = 'a'

  function funcB() {
    const b = 'b'

    function funcC() {
      const c = 'c'
      // console.log('c:', a, b, c);
    }
    funcC()
    // console.log('b:', a, b)
  }
  funcB()
  //console.log('a:', a)
}
funcA()

//scope
let a = 1
let b = 2

{
  a = 3
  let b = 4
  // console.log(a);
  // console.log(b);
}
// console.log(a);
// console.log(b);

let c = 777
var d = 999
d

function scope() {
  let c = 111
  console.log(c)
}
console.log(scope())

//IIFE
let iife = ((a, b) => a + b)(40, 2)
iife

//function bind //Переписать bind(байнд)
function bind(context, fn) {
  return function (...args) {
    return fn.apply(context, args)
  }
}

// Анаграмма
let str1 = 'Friends'
let str2 = 'Dnesifr'
const anagram = (str1, str2) => {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  return str1.split('').sort().join('') === str2.split('').sort().join('')
}
// console.log(anagram(str1, str2)) //true
// console.log(anagram('Cat', 'Tac')) //true

// Check if a number is even or odd (Проверка на четность, является ли число четным)
const isEven = num => num % 2 === 0
// console.log(isEven(2));

// Return new array with even number  //Вернуть новый массив с четными числами
const numArray = [2, 4, 5, 7, -10, 777, 0]
const evenArray = numArray.filter(num => num % 2 === 0)
// console.log(evenArray)

//methods arr
const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21]

const fill = arr.fill(0, 0000, 3)
fill

const reduce = arr.reduce((acc, num) => acc + num, 0)
reduce

const map = arr.map(num => num ** 2)
map

const filter = arr.filter(num => num % 2 === 0)
filter

const forEach = arr.forEach(el => console.log(el * 5))
forEach

const find = arr.find(el => el === 5)
find

const findIndex = arr.findIndex(num => num === 21)
findIndex

const some = arr.some(num => num === 7)
some

const every = arr.every(num => num)
every

const sort = arr.sort()
sort

// Find Average of Numbers  //Среднее значение массива

const averageNum = arr => arr.reduce((a, b) => a + b) / arr.length
// console.log(averageNum([1, 2, 3, 4]))

const averageNum2 = (...args) => args.reduce((a, b) => a + b) / args.length
// console.log(averageNum2(2, 4, 5, 6));

// Remove Duplicated from Array   //Удаление дубликатов(повторов) из массива
// You can easily remove duplicates with Set in JavaScript. Its a life saver.
const removeDuplicates = arr => [...new Set(arr)]
// console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]))

// Какая строка встречается чаще всего
function highestFrequency(array) {
  const map = {}
  let maxFreq = 0
  let maxFreqStr = array[0]

  for (let i = 0; i < array.length; i++) {
    const current = array[i]

    if (map[current]) {
      map[current]++
    } else {
      map[current] = 1
    }

    if (map[current] > maxFreq) {
      maxFreq = map[current]
      maxFreqStr = current
    }
  }

  return maxFreqStr
}

// console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
// console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
// console.log(highestFrequency(['abc', 'def'])) // -> abc
// console.log(
//   highestFrequency([
//     'abc',
//     'abc',
//     'def',
//     'def',
//     'def',
//     'ghi',
//     'ghi',
//     'ghi',
//     'ghi',
//   ])
// ) // -> ghi

// Remove Duplicated from String   //Удаление дубликатов(повторов) из строки
// I
const removeDupes = str => Array.from(new Set(str)).join('')
// console.log(removeDupes('abcd')) // -> 'abcd'
// console.log(removeDupes('aabbccdd')) // -> 'abcd'
// console.log(removeDupes('abcddbca')) // -> 'abcd'
// console.log(removeDupes('abababcdcdcd')) // -> 'abcd'

// II
function removeDupes2(str) {
  const chars = {}
  const res = []

  for (let i = 0; i < str.length; i++) {
    if (!chars[str[i]]) {
      chars[str[i]] = true
      res.push(str[i])
    }
  }
  return res.join('')
}
// console.log(removeDupes2('abcd')) // -> 'abcd'
// console.log(removeDupes2('aabbccdd')) // -> 'abcd'
// console.log(removeDupes2('abcddbca')) // -> 'abcd'
// console.log(removeDupes2('abababcdcdcd')) // -> 'abcd'

// new Map
const newMap = new Map()
newMap.set('777', '999s')
newMap.set(1.5, 2.5)
newMap.set(123, 's123')
newMap

const arrNewMap = [...newMap]
arrNewMap
const arrNewMapResult = arrNewMap.map(value => parseInt(value))
arrNewMapResult

/// show number 12 in arr // Показать номер 12 в массиве
const arrTwelve = [
  [1, 4, 19],
  [2, 5, 8, 12],
  [100, 55, 18],
]
const result = arrTwelve.flat().find(num => num === 12)
const result2 = arrTwelve[1][3]
// result
// result2

// func reverse str and save space  // Перевернуть строку и сохранить пробелы
const reverse = function (str) {
  const arr = [...str].filter(el => el !== ' ')
  return str.replace(/\S/g, () => arr.pop())
}
// console.log(reverse.length);
// console.log(reverse('Hello World!'));

// Replace symbol in string   // Удалить символ из строки
// g - глобальное сопоставление
// i -игнорировать регистр
// m - сопоставление по нескольким строкам
const strToReplace = str => str.replace(/Hi/g, 'Hello')
// console.log(strToReplace('Hi world!'))
const strToReplaceAll = str => str.replaceAll(/\bhi\b/gi, 'Hello')
// \bString\b - глобальный флаг, чтобы заменить только слово целиком, а не часть букв из слова
// console.log(strToReplaceAll('He say Hi to world, and she say hi to him'))

// Reverse a string (Перевернуть строку)
const reverse2 = str => str.split('').reverse().join('')
// console.log(reverse2('hello world'))

// fn find in arr first el => to String => between word '***' symbol
const arrStr = ['bitcoin', 'take', 'over', 'the', 'world', 'apple']
const twoSort = arrStr => arrStr.sort()[0].split('').join('***')

// console.log(twoSort(arrStr));

// Capitalise a String  //Первая буква строки с заглавной буквы
// Javascript doesn’t have an inbuilt capitalise function, so we can use the following code for the purpose.
const capitalizeFirstWord = str => str.charAt(0).toUpperCase() + str.slice(1)
// console.log(capitalizeFirstWord("follow for more"))

// Сheck whether a string contains a substring - Проверить имеет ли строка подстроку (символы)
// 1 - includes
let mainString = 'hello'
let subString = 'hell'
// console.log(mainString.includes(subString))

// 2 - indexOf
let mainString2 = 'hello'
let subString2 = 'hell'
// console.log(mainString2.indexOf(subString2) !== -1)

// 3 - RegEx
let mainString3 = 'hello'
let regex = /hell/ // true, содержит часть букв в строке
// let mainString3 = "hello", regex = /\hell\b/  // false, строгое сравнение букв до последнего символа
// console.log(regex.test(mainString3))

// 4 - String - Array - String    // вернет undefined === false, слово целиком, если есть совпадения
let mainString4 = 'hello'
let subString4 = 'hell'
const mainString4Arr = mainString4
  .split(',')
  .find(words => words === subString4)
// console.log(mainString4Arr)

// Check if a string starts with another string   // Проверить начинается ли строка с какой-то строки или буквы
// console.log("Good morning".startsWith("G")) //true
// console.log("Good morning".startsWith("Good"))  //true
// console.log("Good morning".startsWith("morning")) //false

// Return max number from num  // Вернуть максимальное число из числа
function getMax(num) {
  return +String(num)
    .split('')
    .sort((a, b) => b - a)
    .join('')
}
// console.log(getMax(1668));
// console.log(getMax(79453));
// console.log(getMax(123));

// string. need return string without # - 1 symbol
function cleanString(str) {
  return [...str].reduce(
    (acc, val) => (val === '#' ? acc.slice(0, -1) : acc + val),
    ''
  )
}

//console.log(cleanString('Herr##lld#o'));

// copy arr
const originalArr = ['test', 777]
originalArr
const copy1 = [...originalArr]
copy1
const copy2 = originalArr.concat()
copy2
const copy3 = originalArr.slice()
copy3
const copy4 = Array.from(originalArr)
copy4
// best solution copy multi levels arr / obj
const copy5 = JSON.parse(JSON.stringify(originalArr))
copy5

// random value in arr  // Рандомное число из массива
const randomArr = [777, 999, 33, 'Serg', 'Cat']
randomArr.sort(() => 0.5 - Math.random())
randomArr

// half number half 2 fill(0)

function manipulate(num) {
  const numToString = String(num)

  const halfLengthString = Math.floor(numToString.length / 2)

  let result =
    halfLengthString * 2 === numToString.length
      ? +(numToString.slice(0, halfLengthString) + '0'.repeat(halfLengthString))
      : +(
          numToString.slice(0, halfLengthString) +
          '0'.repeat(halfLengthString + 1)
        )

  return result
}
//console.log(manipulate(8173648710293847));

// seconds solution
// function manipulate(num) {
//   let arr = [...String(num)]
//   const indexArr = Math.floor(arr.length / 2)
//   for(let i = indexArr; i < arr.length; i++) {
//     arr[i] = 0
//   }
//   let result = +(arr.join(''))
//   return result
//   }

// function BMI
function bmi(weight, height) {
  let bmi = +(weight / Math.pow(height, 2))

  return bmi <= 18.5
    ? 'Underweight'
    : bmi <= 25
    ? 'Normal'
    : bmi <= 30
    ? 'Overweight'
    : 'Obese'
}

//console.log(bmi(100, 1.95));

// Array to Map to Object   // Массив в Мар в Объект
const arrToObject = [1, 2, 'Serg', 777, 'Company', 'Epam World']
// 1
const mapArrToObj = new Map([
  [1, 2],
  ['Serg', 777],
  ['Company', 'Epam World'],
])
const ObjFromArr = Object.fromEntries(mapArrToObj)
ObjFromArr
// 2
const mapArrToObj2 = new Map([[...arrToObject]])
const ObjFromArr2 = Object.fromEntries(mapArrToObj2)
ObjFromArr2

// Carry
function carry() {
  return function (a) {
    return function (b) {
      return a + b
    }
  }
}

let carryResult = carry()
// console.log( carryResult(40)(2));

// task Merge 2 arrays
function mergeArrays(a, b) {
  const resArr = []
  const MaxLength = Math.max(a.length, b.length)

  for (let i = 0; i < MaxLength; i++) {
    resArr.push(a[i])
    resArr.push(b[i])
  }
  resArr

  return resArr
}

// console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5, 6, 7, 8,]));
//['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]);

// Find the minimum sum which is obtained from summing each Two integers product     //Найдите минимальную сумму, которая получается в результате суммирования произведения каждых двух целых чисел
// minSum({5,4,2,3}) ==> 5*2 + 3*4 => return (22)
function minSum(arr) {
  arr.sort((a, b) => a - b)

  let minSumRes = 0

  while (arr.length) {
    minSumRes += arr.pop() * arr.shift()
  }

  return minSumRes
}

minSum([5, 4, 2, 3])

// Find sum from two min number from array    //Найти сумму из двух минимальных чисел из массива
const arrNums = [30, 100, 1, 77, 15, 2, 11, 8, 12, 3, 10, 19, 22]

function sumSmallest(arrNums) {
  let minResNumFirst = arrNums[0]
  let minResNumSecond = arrNums[1]
  for (let num of arrNums) {
    if (num <= minResNumFirst) {
      minResNumSecond = minResNumFirst
      minResNumFirst = num
    } else if (num <= minResNumSecond) {
      minResNumSecond = num
    }
  }
  let sumTwoMinNum = minResNumFirst + minResNumSecond

  return sumTwoMinNum
}
// console.log(sumSmallest(arrNums));

// return array from string with arr(index) % !== 0
function getEvenChar(str) {
  if (!str || str.length > 100 || str.length < 2) return `This String is FALSE`

  return [...str].filter((item, i) => i % 2 !== 0)
}

console.log(getEvenChar('abcdefghijklmno'))
console.log(getEvenChar('a'))

var arrMn = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

for (let j = 0; j < arrMn.length; j++) {
  for (let n = 0; n < arrMn.length; n++) {
    if (n === arrMn.length - 1) console.log(arrMn[j][n])
    else console.log(arrMn[1][2] + ', ')
  }
}

// method flat(Infinity)   // Плоский массив, вернуть из многомерного массива одномерный, убрать многомерность в массиве
// I
const arr4 = [1, 2, [3, 4, [[5, 6, [7, 8, [9, 10]]]]]]
const arrFlat = arr4.flat(Infinity)
// arrFlat
// II
function flatten(arr4) {
  const res = []

  for (let i = 0; i < arr4.length; i++) {
    if (Array.isArray(arr4[i])) {
      const flat = flatten(arr4[i])
      for (let j = 0; j < flat.length; j++) {
        res.push(flat[j])
      }
    } else {
      res.push(arr4[i])
    }
  }

  return res
}
// console.log(flatten(arr4));

function returnY() {
  'use strict'

  y = 123

  return y
}

// Arr return numbers key - value   // Вернуть массив со значением ключ-число: значение
const arrValueNum = ['a', 'b', 'c', 'd', 'e', 'f']
const arrValueNumResult = arrValueNum.map((el, ind) => `${ind + 1}: ${el}`)
arrValueNumResult

// return from object key with value from function
// answer 1 - [1, 2] // answer 2 - [3, undefined]

// function pluck(arrPluck, key) {
//     const pluckResult = []
//     for (let i = 0; i < arrPluck.length; i++) {
//             pluckResult.push(arrPluck[i][key])
//         }
//         return pluckResult
//     }

function pluck(arrPluck, key) {
  return arrPluck.map(el => el[key])
}

console.log(pluck([{ a: 1 }, { a: 2 }], 'a'))
console.log(pluck([{ a: 1, b: 3 }, { a: 2 }], 'b'))

//number word in string // Количество букв в строке
const strTodo = 'To do or not to do'
const count = strTodo.split('')
const totalWord = count.reduce((total, word) => {
  total[word] = (total[word] || 0) + 1
  return total
}, {})
// console.log(totalWord)

//fn sum(2, 7, 9, ...)
function sum(...arg) {
  return arg.reduce((acc, num) => acc + num, 0)
}
// console.log(sum(2, 7, 9, 15, 100));

//Find factorial  // Найти факториал от числа
// I
function fact(num) {
  if (num === 1) {
    return 1
  }
  return num * fact(num - 1)
}
// console.log(fact(4));

// II
function factorial(n) {
  // Начальный результат будет равен 1,
  // чтобы его можно было умножать на последующие числа.
  // 0 подходит только для подсчёта суммы,
  // потому что умножение на 0 всегда даёт 0.
  let result = 1

  for (let i = 0; i < n; i++) {
    // Так как наш счётчик начинается с 0
    // и растёт до n-1, нам нужно прибавить к нему
    // единицу, чтобы правильно рассчитать произведение.
    result *= i + 1
  }

  return result
}

// console.log(factorial(5)) // 120

const strProto = 'EPAM'
// console.log(strProto.length);

// JSON.stringify
// https://betterprogramming.pub/the-secrets-of-json-stringify-cf592f53b0f0
const objJSON = {
  a: '9',
  b: 9,
  c: true,
  d: function () {
    return `function test`
  },
  e: () => `arrow test`,
  f: {
    fKey: `fValue`,
    [Symbol('fKeySymbol')]: `fValueSymbol`,
  },
  g: new Date(),
  h: new Set(['new', 'Set']),
}
console.log(JSON.stringify(objJSON))
console.log(JSON.stringify(objJSON, ['a', 'b', 'c', 'g']))

// Второй аргумент - функция трансформер, чтобы изменять / прятать какие-то свойства. Если есть третий аргумент, но нет функции, тогда передаем null
// Третий аргумент - число, которое добавляет количество пробелов между свойствами, удобно читать
// Третий аргумент - строка, тогда символы будут добавлены перед ключами и свойствами, можно вставить 💩💩💩

const transformer = (key, value) => {
  // Проверка, чтобы отображался Set
  if (value instanceof Set) {
    return [...value.values()]
  }

  if (key === 'b') {
    if (value === 9) {
      return 'Number'
    }
  }
  return value
}
console.log(JSON.stringify(objJSON, transformer, 1))

// find people name with status from Set / Вывести имена людей, статус которых находится в Set
const VALID_STATUS = new Set(['Student', 'Junior', 'Middle'])
const people = [
  { name: 'Serg', age: 34, status: 'Junior' },
  { name: 'Den', age: 31, status: 'Middle' },
  { name: 'Olga', age: 32, status: 'Pause' },
]
const sortPeople = people
  .filter(person => VALID_STATUS.has(person.status))
  .map(person => person.name)
  .sort()

//find operating system details - найти сведения об операционной системе
// navigator.platform

//оператор 'запятая' выполняет слева-направо и возвращает последний item / операцию
const arrResult = num => (num, 0, 1, 2)
const resultArr = arrResult()
resultArr

//в консоль выведет клин из точек от меньшего к большему
function renderCurve() {
  for (let a = 1, b = 10; a * b; a++, b--)
    console.log(new Array(a * b).join('*'))
}

// renderCurve()

// Detect device (определить девайс)

const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
  )
    ? 'Mobile'
    : 'Desktop'
// console.log(detectDeviceType());

// Счетчик сколько букв в строке
function countWord() {
  let string = 'To do or not to do'
  const table = {}

  for (let char of string) {
    table[char] = table[char] + 1 || 1
  }
  return table
}
// console.log(countWord())

// Уникальные символы в строке, уникальность символов в строке
// I
const isUnique = str => new Set(str).size === str.length
// console.log(isUnique('abcdef')) // -> true
// console.log(isUnique('1234567')) // -> true
// console.log(isUnique('abcABC')) // -> true
// console.log(isUnique('abcadef')) // -> false

// II
function isUnique2(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false
    }
  }
  return true
}
// console.log(isUnique2('abcdef')) // -> true
// console.log(isUnique2('1234567')) // -> true
// console.log(isUnique2('abcABC')) // -> true
// console.log(isUnique2('abcadef')) // -> false

// III
function isUnique3(str) {
  const chars = new Set()
  for (let i = 0; i < str.length; i++) {
    const current = str[i]

    if (chars.has(current)) {
      return false
    }

    chars.add(current)
  }
  return true
}
// console.log(isUnique3('abcdef')) // -> true
// console.log(isUnique3('1234567')) // -> true
// console.log(isUnique3('abcABC')) // -> true
// console.log(isUnique3('abcadef')) // -> false

// Convert RGB to Hex (Конвертация)
const rgbToHex = (r, g, b) =>
  '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)

// console.log(rgbToHex(0, 51, 255))
// Result: #0033ff

// Generate Random Hex (Генерация Hex)
// You can generate random hex colors with Math.random and padEnd properties.
const randomHex = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`
// console.log(randomHex());

// Redirect to URL - Перенаправление на другой URL (например, когда кто-то хочет зайти на url/admin)
// location  —  это метод для глобального объекта window, а поведение при настройке свойства href такое же, как при нажатии пользователем на ссылку.
const redirect = () => (location.href = 'http://natr.ru')

// Copy to Clipboard
// Easily copy any text to clipboard using navigator.clipboard.writeText.
const copyToClipboard = text => navigator.clipboard.writeText(text)
// console.log(copyToClipboard("Hello World"))

// Detect Dark Mode (Определить темный режим)
// Check if a user’s device is in dark mode with the following code
//.
// const isDarkMode =
//   window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
// console.log(isDarkMode) // Result: True or False

// Shuffle an Array (Перемешивание массива)
// Shuffling an array is super easy with sort and random methods.
// 1
const shuffleArray = arr => arr.sort(() => 0.5 - Math.random())

// console.log(shuffleArray([1, 2, 3, 4]));

// 2
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

list.sort(() => {
  return Math.random() - 0.5
})

// Get Selected Text (Получение выбранного текста с веб-страницы)
// Get the text the user has select using inbuilt getSelectionproperty.
const getSelectedText = () => window.getSelection().toString()
// getSelectedText();

// Get random boolean item (Получение произвольного логического значения)
const getRandomBoolean = () => Math.random() >= 0.5
// console.log(getRandomBoolean())
// console.log(getRandomBoolean())

// Check if array is empty (Проверка массива на пустоту)
// Simple one liner to check if an array is empty, will return true or false.
const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0
// console.log(isNotEmpty([1, 2, 3]));
// Result: true

// Check if object is empty (Проверка объекта на пустоту)
const isEmpty = obj =>
  Reflect.ownKeys(obj).length === 0 && obj.constructor === Object
// Здесь мы проверяем, равняется ли длина ключей объекта нулю и является ли переданный параметр фактическим объектом.

// Log Time from Date (Получение времени из даты)
// We can log time, in the format hour::minutes::seconds from a given date.

const timeFromDate = date => date.toTimeString().slice(0, 8)
// console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));

// Ожидание перед выполнением
const wait = async milliseconds =>
  new Promise(resolve => setTimeout(resolve, milliseconds))

// Clear All Cookies (Очистить все куки)
// You can easily clear all cookies stored in a web page by accessing the cookie using document.cookie and clearing it.
// const clearCookies = document.cookie
//   .split(';')
//   .forEach(
//     (cookie) =>
//       (document.cookie = cookie
//         .replace(/^ +/, '')
//         .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
//   )

// Find the number of days between two days (Вычисление разницы между двумя датами)
// Find the days between 2 given days using the following snippet.
const dayDiff = (date1, date2) =>
  Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
// console.log(dayDiff(new Date("2020-10-21"), new Date("2021-10-22")));
// Result: 366

// Find the day of year (Найти день в году, какой по счету)
// Find which is the day by a given date
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
// console.log(dayOfYear(new Date()))

// Check if Date is Valid (Проверка валидная ли дата, существовала ли)
// Use the following snippet to check if a given date is valid or not.
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf())
// console.log(isDateValid("December 17, 1995 03:24:00"))

const daysBetween = (date1, date2) =>
  Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24))
// При вычитании двух дат возвращаемое значение выдается в виде разницы в миллисекундах, для преобразования которых в дни нужно по очереди разделить их на миллисекунды, секунды, минуты и часы.
