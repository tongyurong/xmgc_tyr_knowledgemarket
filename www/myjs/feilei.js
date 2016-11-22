/**
 * Created by Administrator on 2016/10/9.
 */

$(document).ready(function(){
    $(".f-f0").click(function(){
       var data=$(this).html();
        $('.f-f0').attr('href','./class_selection.html?data='+data);
    })
})