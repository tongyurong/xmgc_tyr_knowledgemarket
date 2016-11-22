/**
 * Created by 佟煜荣 on 2016/10/13.
 */
var dat=window.location.search.split('=')[3];
var dat1=window.location.search.split('=')[1];
var path = '../api/detailbuy?courseid='+dat;
    $(document).ready(function(){
        var usrjo = $('#buy_yes').clone(true, true);
        $('#repayfor').append(usrjo);
        usrjo.find('#payfor').html("￥"+dat1);
        $('#buy_yes').remove();
        $('#buy').click(function(){
            $.get(path,function(res){
            if(res.length==0){
                if(Cookies.get("ShopCate")!=null){
                var delids=dat.split(',');
                var cookieValue = Cookies.get("ShopCate");
                var cookieArray=cookieValue.split(',');
                var delid=delids.concat(cookieArray);
                var newArr = [];
                for(var i = 0; i < delid.length; i++) {
                    var test = delid[i];
                    if(newArr.indexOf(test) !== -1) {
                        newArr.splice(newArr.indexOf(test),1)
                    }
                    else {
                        newArr[newArr.length] = test;
                    }
                }
                if(newArr!=""){
                    var newcookieValue=newArr.join(',');
                    Cookies.set("ShopCate",newcookieValue,{expires:7,path:'/'});
                }
                else {Cookies.remove("ShopCate")}
                }
                window.location.href="buy_success.html?courseid="+dat;
            }else{
                qiao.bs.alert({title:"警告",msg:"已经购买过了，不需要重复购买！请到个人中心查看！"})
            }
        })
    })
})