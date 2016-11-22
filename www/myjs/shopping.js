/**
 * Created by 佟煜荣 on 2016/10/20.
 */
$(document).ready(function (){

        var shopCart=Cookies.get("ShopCate");
    if(shopCart==null){
        $(".goods").hide();
        return
    }else {
        $('#nogoods').hide();
        var CatArr=shopCart.split(",");
        var data={
        CatArr:CatArr,
        }
      $.post('../api/shopping',data,function (res) {
            for (var i = 0; i < res.length; i++) {
                var usrjo = $('#goods1').clone(true, true);
                usrjo.find('#goodsname').html(res[i][0].CourseName);
                usrjo.find('#goodsid').html(res[i][0].CourseID);
                usrjo.find('#goodsprice').html('&yen;'+res[i][0].CoursePrice);
                usrjo.find('#goodsimg').attr('src',res[i][0].CourseImgURL);
                $('#regoods').append(usrjo);
            }
            $('#goods1').remove();
        });

    //$(document).ready
         (function(){
        $('#payfor').click(function(){
            var money=document.getElementById("shopcat");
            var selects=money.getElementsByClassName("select");
            var good=money.getElementsByClassName("goods");
            var coid=0
            for(var i=0;i<selects.length;i++){
                if(selects[i].checked==true){
                    var go=good[i];
                    var cid=go.getElementsByClassName("goodsid");
                    var cids=cid[0].innerText;
                    coid+=  ','+cids;
                }
            }
            var coides=coid.split(',');
            coides.splice(0,1);
            var money=$('#money').html();
            $('#payfor').attr('href','./buy_page.html?money='+money+'=courseids='+coides);
        })
    })()
    }
})

