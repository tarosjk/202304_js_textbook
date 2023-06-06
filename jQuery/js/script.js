// $(document).ready(function () {
//   alert('jQuery動作テスト');
// });

// .style.color = 'green'
$('h1').css('color', 'green')
console.log($('h1')[0])

$('.site-header-nav li a').css('color', 'pink')

$('.mv-copy').next().css('text-decoration', 'underline')

$('.service-card')
  .parent()
  .css('border', '1px solid orange')

$('.site-footer-sns').children().css('color', 'orange')

$('.works-panel').find('.works-title').css('border-bottom', '2px solid #000')

$('.contact-logo').closest('div').css('background', '#eee')

// const tweet = '<div class="tweet-content">イエローマジックデザインワークショップを開催しました。「普段何気なく使っているモノの見方を変えて見る」をテーマに、参加者のいろんなアイデアと作品が生まれました。</div>';

// const $tweetContainer = $('.tweet-container')
// $tweetContainer.append(tweet)
// $tweetContainer.html(tweet)

let display = true
// on => addEventListener
$('#quick-news-btn').on('click', e => {
  if (display) {
    $('.quick-news-content').wrap('<div class="hidden">')
    $(e.target).text('+ ニュースを開く')
    display = false
  } else {
    $('.quick-news-content').unwrap()
    $(e.target).text('× ニュースを閉じる')
    display = true
  }

})


$('.works-desc').empty()
$('.works-desc').remove()

// $('.works-thumb img').removeAttr('alt')
const alt = $('.works-thumb img').attr('alt')
console.log(alt)
$('.works-thumb img').attr('alt', '古い家具')

// クラス追加・削除
// $('.faq-openclose').addClass('is-open')
// $('.faq-openclose').toggleClass('is-open')

// イベント操作
$('body').on('click', '.faq-openclose', e => {
  console.log('クリックしました')
  // $(e.target).off('click')
  $(e.target).toggleClass('is-open')
})
// これと同等: $('.faq-openclose').click(e=>{})
// ダブルクリック .on('dblclick') == dblclick()
// ホバー .on('mouseenter') .on('mouseleave') == hover(()=>{}, () => {})

$(document).ready(() => {
  $('.site-header-logo').css('border-bottom', '2px solid #000')
})
// $(() => {})

$(window).on('load', () => {
  console.log('ページロード完了')
  $('.loader').remove()
})

// イベントオブジェクト
$('.faq-list *').on('click', e => {
  console.dir(e)
  e.stopPropagation()
})

// マウス追従
const mouseFollow = $('.mouse-follow')
let
  mouseX = 0, //マウスのX座標
  mouseY = 0, //マウスのY座標
  currentX = 0, // 現在のX座標(lerpの結果)
  currentY = 0  // 現在のY座標(lerpの結果)
$(window).on('mousemove', e => {
  // console.log(e.clientX, e.clientY)
  mouseX = e.clientX
  mouseY = e.clientY
  // mouseFollow.css({
  //   'left': e.clientX,
  //   'top': e.clientY
  // })
})

function updateFollowPosition() {
  let nowX = lerp(currentX, mouseX, 0.1)
  let nowY = lerp(currentY, mouseY, 0.1)
  currentX = nowX
  currentY = nowY
  mouseFollow.css({
    'left': nowX,
    'top': nowY
  })
  requestAnimationFrame(updateFollowPosition)
}
updateFollowPosition()

// c: current(現在値) d: destination(目的値) e: easing(イージング)
function lerp(c, d, e = 0.05) {
  return c + (d - c) * e
}

$('a, .faq-openclose').hover(
  // mouseenter
  () => {
    $('body').addClass('link-active')
  },

  // mouseleave
  () => {
    $('body').removeClass('link-active')
  }
)

// フェードイン・フェードアウト
$('.tweet-show').on('click', () => {
  $('.tweet-content-ls16').fadeIn(1000, function () {
    $(this).css('background-color', 'yellow')
  })
})
$('.tweet-hide').on('click', () => {
  $('.tweet-content-ls16').fadeOut()
})

// 表示・非表示・トグル
$('.faq-openclose').on('click', e => {
  const dd = $(e.target).parent().next()

  // show / hide
  // if (dd.is(':visible')) {
  //   dd.hide()
  // } else {
  //   dd.show()
  // }
  // dd.toggle(!dd.is(':visible'))

  $(e.target).toggleClass('is-open')

  // slideDown / slideUp / slideToggle
  // dd.slideDown(7000)
  dd.stop().slideToggle(!dd.is(':visible'))
})

// コンテンツ切り替え（タイマー処理）
const tweets = [
  '「DX支援」に当社のサービスがお役に立てるかもしれません。',
  '良いデザインはどっち？ クイズを解くだけで、デザインの知識がどんどん身につく画期的なデザイン手法を紹介',
  '現場監督からWebデザイナーに転職。建築現場責任者として活躍されていた川本さんのキャリアチェンジの理由は？',
  'Webデザインの勉強やトレンドキャッチに役立つSNSアカウントおすすめ25選'
];

const tweetContent = $('.tweet-content-ls19')
let counter = 0
tweetContent.text(tweets[counter]).fadeIn()

let intervalID = setInterval(() => {
  tweetContent.text(tweets[counter]).fadeOut(400, () => {
    counter++
    console.log(tweets[counter])
    if (counter === tweets.length) {
      counter = 0
      clearInterval(intervalID)
    }
    tweetContent.text(tweets[counter]).fadeIn()
  })
}, 3000)
console.log('インターバルID', intervalID)

// inView
$(window).on('load', () => {
  const $serviceList = $('.service-list')
  $(window).on('scroll', () => {
    let isInView = $serviceList.inView('topOnly', 150)
    if (isInView) {
      console.log('要素がビューポートに入りました')
    } else {
      console.log('要素がビューポートから外れました')
    }
    if (isInView && !$serviceList.hasClass('in-view')) {
      $serviceList.addClass('in-view')
    }
  })
  $(window).trigger('scroll') //仮想的にスクロールイベントを発生

})

// slick
$('.works-container').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  // fade: true,
  speed: 1000,
  pauseOnHover: false,
  responsive: [
    // 768
    {
      breakpoint: 768,
      settings: {
        autoplaySpeed: 1000,
      }
    },
    // 960
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
      }
    }
  ],
})

// lax.js - パララックス効果
$(window).on('load', () => {
  // lax.jsの起動
  lax.init()

  // ドライバーの設定
  // 第１引数: ドライバー名, 第2引数: ドライバー関数
  lax.addDriver(
    'parallaxY',
    () => {
      return window.scrollY
    },
    {}
  )

  // 要素の追加
  // 第1引数: セレクタ, 第2引数: ドライバーに対するCSSプロパティのアニメーション設定(複数設定可), 第3引数: オプション
  lax.addElements(
    '.lax-target',
    {
      parallaxY: {
        translateY: [
          // ドライバーのマップ値
          // [0, 3000],
          ['elInY', 'elOutY'],
          // ドライバーのマップ値に対するプロパティ値
          // [-80, 100]
          {
            767: [-80, 60], //スモールスクリーン用
            768: [-80, 100] //デスクトップ用
          }
        ],
        opacity: [
          ['elInY', 'elInY+200'],
          [0, 1]
        ]
      }
    }
  )

})