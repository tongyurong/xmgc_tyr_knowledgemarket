/*大家都在学*/
$(function(){
    $('.all_bgimg').mouseover(function(){
        $(this).css('background-color','red')
    })
})

/*首页返回顶部按钮*/
$(function(){
    var totop=$('#totop')
    $(window).scroll(function(){
        if ($(window).scrollTop()>800){
            $(totop).show(500)
        }
        else $(totop).hide(500)
    })
})



/*课程详情tab切换*/

/*课程筛选默认排序页*/

