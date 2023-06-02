// const cars = [
//   {
//     "name": "カローラ",
//     "type": "セダン",
//     "brand": "TOYOTA"
//   },
//   {
//     "name": "フィット",
//     "type": "コンパクト",
//     "brand": "HONDA"
//   },
//   {
//     "name": "ハイゼット",
//     "type": "軽自動",
//     "brand": "ダイハツ"
//   }
// ]

// console.log(cars[2].name)

const btn = document.querySelector('#btn')
const info = document.querySelector('#car-info')
const request = new XMLHttpRequest()
let counter = 1

btn.addEventListener('click', () => {
  request.open('get', `https://norixx.github.io/jquery_elearing/cars${counter}.json`)

  request.onload = () => {
    console.log(request.responseText)
    if (request.status === 200) {
      const res = JSON.parse(request.responseText)
      outputHtml(res)
    } else {
      console.log('サーバに接続しましたが、エラーとなりました')
    }

    if (counter <= 3) {
      btn.removeAttribute('disabled')
    }
  }

  request.onerror = () => {
    console.log('接続エラーです')
    btn.removeAttribute('disabled')
  }

  request.send()
  btn.setAttribute('disabled', 'disabled')
  counter++
})

// [{},{},{}]
function outputHtml(res) {
  let html = ''
  res.forEach(obj => {
    // console.log(`<p>${obj.name}</p>`)
    const colors = obj.colors.join(' / ')
    html += `<p>${obj.name} - ${obj.type} (${obj.brand})色: ${colors}</p>`
  })
  info.insertAdjacentHTML('beforeend', html)
}
