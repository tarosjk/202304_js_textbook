console.log('おはようございます')
// window.alert()
// alert('おはようございます')
/*コメント*/

document.body.innerHTML = '<h1>今日は雨です</h1>'

var box
let box2
let box3 = '雨'

let a, b, sum

a = 4
b = 5
sum = a + b
console.log(sum)

// 文字列型
let html = '<p class="weather">明日は晴れです</p>'
let html2 = "<p class=\"weather\">明日は晴れです</p>"

// ブーリアン
console.log(12 > 6)
console.log(12 < 6)

// Undefined
let notDefined
console.log(notDefined)

// データの型チェック
let checkType = 'バナナ'
console.log(typeof checkType)

// ショートハンド演算
let c = 5
// c = c + 3
c += 3
console.log(c)

// c += 1
c++ //後置き（優先度下）
console.log(c) // 9
console.log(++c) // 前置き（優先度上）
console.log(--c) //デクリメント

let d = 4
let e = '5'
let f = '焼き鳥'
console.log(typeof (d + e))

let price = 800
let str = 'ハンバーグの値段は' + price + '円です'
console.log(str)
console.log(d - e)
console.log(d - f)
console.log(typeof String(d))
console.log(typeof Number(f))

// テンプレートリテラル
let tmplt = `ハンバーグの値段は${price}円です`
// console.log(tmplt)

let g = 5
let h = '5'
if (g === h) {
  console.log('gとhは等しい')
}

console.log(!true)
console.log(!false)

let i = 0
if (i) {
  console.log('trueです')
} else {
  console.log('falseです')
}

console.log(5 == 4 && 8 == 8)
console.log(5 == 5 || 8 == 7)

let j = 8
let k = 7
j == k ? console.log('jとkは等しい') : console.log('jとkは等しくない')
let l = j == k ? '等しい' : '等しくない'
console.log(l)

let pens = ['red', 'orange', 'green', 'blue']
console.log(pens)
console.log(pens[1])

pens[3] = 'purple'
console.log(typeof pens)

console.log(pens.length)
// pens.length = 7

pens.reverse()
console.log(pens)
let deleted = pens.shift()
console.log(deleted)
pens.unshift('black', 'white')//引数
console.log(pens)
pens.pop()
pens.push('pink', 'skyblue')
console.log(pens)
pens.splice(2, 2)
console.log(pens)

let sliced = pens.slice(1, 3)
console.log(sliced)

let result = multiply(8, 5)
function multiply(a, b) {
  return a * b
  console.log('リターンの後') //無効
}
console.log(result)


// let divide = function (a, b) {
//   return a / b
// }
// アロー関数
// let divide = (a, b) => {
//   return a / b
// }
let divide = (a, b) => a / b
result = divide(40, 5)
console.log(result);

(function (yaki) {
  let result = 'あいうえお'
  console.log(result, yaki)
})(f)
console.log(result)

const tax = 0.1
const arr = ['blue', 'red', 'green']
arr[1] = 'pink'
console.log(arr)

function Car(maker, brand, type, color, year) {
  this.maker = maker
  this.brand = brand
  this.type = type
  this.color = color
  this.year = year
  this.updateYear = function () {
    return ++this.year
  }
}

const hondacar = new Car('HONDA', 'CIVIC', 'compact', ['red', 'sliver'], 2022)
console.log(hondacar.brand)
let year = hondacar.updateYear()
console.log(year)

const now = new Date()
console.log(now.getFullYear())
document.body.innerHTML =
  `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`

const old = new Date('1999-9-10')
if (old.getDay() == 5) {
  console.log('金曜日')
}

// 繰り返し処理
// for文
// for (初期化式; 繰り返し条件; 増減式) {}
for (let counter = 0; counter <= 10; counter++) {
  console.log(`カウンターの値は ${counter}`)
}
console.log(pens)
for (let i = 0; i < pens.length; i++) {
  console.log(`ペンの色は ${pens[i]}`)
  if (pens[i] === 'white') {
    console.log('当たり！')
  }
}
// for...of文
// for ( 変数 of 配列 ) { }
for (let color of pens) {
  console.log(`ペンの色は${color}です`)
}

// switch文