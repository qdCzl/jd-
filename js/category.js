window.onload = function () {  
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
         // 可以支持多张轮播图显示 属性一定要加 内容滚动的距离如果不加无法计算
         slidesPerView: 'auto',
         freeMode: true, // 是否添加滑动的惯性
      })   

      //计算出吸顶效果的最小位移距离 父容器高度 - 子容器的高度  防止底部拉上去
    var parent = document.querySelector('.swiper-container');
    var children = document.querySelector('.swiper-slide');
    var minTranslateY = parent.offsetHeight - children.offsetHeight;


    var liList = document.querySelectorAll('.left li')
    var swiper_wrapper = document.querySelector('.left .swiper-wrapper')
    var translateY
    for (let i = 0; i < liList.length; i++) {
       
       liList[i].onclick = function () {  
        translateY = -i * liList[i].offsetHeight
          console.log(translateY);
          if (translateY<minTranslateY) {
            translateY = minTranslateY
          }
          swiper_wrapper.style.transform = `translateY(${translateY}px)`
          swiper_wrapper.style.transition = 'transform .2s'
          
          for (var j = 0; j < liList.length; j++) {
            //把所有的li都移除active类名,哪个被点击就给哪个添加
            liList[j].classList.remove('active')
            this.classList.add('active')
          }
          
       }
    }
    
}
