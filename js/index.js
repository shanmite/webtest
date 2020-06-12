$(document).ready(function(){
$("#back").hide()
$(window).scroll(function () {   //页面加载时，获取滚动条高度
    var distance = $(document).scrollTop()  //获取滚动条高度
    if (distance <= 300) {
        $("#back").hide(500)
    }
    else {
        $("#back").show(500)
    }
})
$("#back").click(function () {
    scrollTo(0, 0)
})    
});
