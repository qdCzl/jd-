window.onload = function () {
    //顶部透明度变化
    headerEffect()
    //倒计时
    downTime()
    //轮播图
    slide()
}

function headerEffect() {
    var header = document.querySelector('#header')
    var slideH = document.querySelector('#slide').offsetHeight
    var scrollOut = document.documentElement.scrollTop + document.body.scrollTop

    var opacity = scrollOut / slideH

    header.style.backgroundColor = `rgba(233,34,35,${opacity})`
    //根据滚出去的高度来添加透明度
    window.onscroll = function () {
        scrollOut = document.documentElement.scrollTop + document.body.scrollTop
        var opacity = scrollOut / slideH
        if (opacity >= 1) {
            opacity = 1
        }
        header.style.backgroundColor = `rgba(233,34,35,${opacity})`
    }

}

//倒计时
/* 1.设置一个总时长
   2.添加定时器
   3.计算出每个span的值
   4.赋值
   5.定时器结束
*/
function downTime() {
    var total = 360000
    var spanList = document.querySelectorAll('.seckill-downtime>span')

    var hour = Math.floor(total / 3600)
    var minute = Math.floor(total % 3600/60)
    var sec = Math.floor(total % 3600%60)
   
    spanList[0].innerHTML = Math.floor(hour/10)
    spanList[1].innerHTML = hour%10
    spanList[3].innerHTML = Math.floor(minute/10)
    spanList[4].innerHTML = minute%10
    spanList[6].innerHTML = Math.floor(sec/10)
    spanList[7].innerHTML = sec%10

    var timeID = setInterval(function () {  
        total--
        var hour = Math.floor(total / 3600)
        var minute = Math.floor(total % 3600/60)
        var sec = Math.floor(total % 3600%60)
       
        spanList[0].innerHTML = Math.floor(hour/10)
        spanList[1].innerHTML = hour%10
        spanList[3].innerHTML = Math.floor(minute/10)
        spanList[4].innerHTML = minute%10
        spanList[6].innerHTML = Math.floor(sec/10)
        spanList[7].innerHTML = sec%10
    },1000)
}

function slide() {  
    var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
        
      })  
}