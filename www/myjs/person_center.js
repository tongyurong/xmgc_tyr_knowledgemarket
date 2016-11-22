/**
 * Created by Administrator on 2016/9/18.
 */

$.post('/../../start/api/getMyInfo',function (res) {
    if(res.text=='没找到您的登录信息，请重新登陆或注册！'){
        qiao.bs.alert({title:"警告",msg:"没找到您的登录信息，请重新登陆或注册！"});
        window.location.href='http://m.xmgc360.com/start/web/account/'
    }
    var userid=res.data;
    $.post('../api/personCenter',userid,function(res){
        $('#UserName').html(res.Usr.UserName);
        $('#protailurl img ').attr('src',res.Usr.UserPortraitURL);
    });

    $.post('../api/personCenterList1',userid, function (res) {
        if(res.length!=0){
            $("#hid1").hide();
        for (var i = 0; i < res.length; i++) {
            var usrjo = $('#person_menu_').clone(true, true);
            $('#mpbox2').append(usrjo);
            usrjo.find(' #person_centername').html(res[i].CourseName);
            usrjo.find(' #coursename').html(res[i].CourseName);
            usrjo.find(' #courseprice').html(res[i].CoursePrice);
            usrjo.find('#myimg2').attr('src', res[i].CourseImgURL);
            usrjo.find('#coursedetail').attr('href','./detail.html?courseid='+res[i].CourseID);
            usrjo.find('#personbuy').attr('value',res[i].CourseID);
        }
        $('#person_menu_').remove();}
        else{
            $("#person_menu_").hide();
            $("#hid1").show();
        }
    });

    $.post('../api/personCenterList2',userid, function (res) {
        if(res.length!=0){
            $("#hid").hide();
            for (var i = 0; i < res.length; i++) {
                var usrjo = $('#coursename1').clone(true, true);
                $('#mpbox1').append(usrjo);
                usrjo.find(' #coursename2').html(res[i].CourseName);
                usrjo.find('#myimg').attr('src', res[i].CourseImgURL);
                usrjo.find('#constudy').attr('href','./video.html?courseid='+res[i].CourseID);
                usrjo.find('#goreview').attr('href','./review.html?courseid='+res[i].CourseID);
            }
            $('.person_centername1').hover(function(){
                $(this).children('div.xuexi_box').fadeIn('slow');
                $(this).children('div.person_centername').hide();
            },function(){
                $(this).children('div.person_centername').fadeIn();
                $(this).children('div.xuexi_box').hide();
            })
            $('#coursename1').remove();
        }
        else{
            $("#coursename1").hide();
            $("#hid").show();
        }
    });

    $.post('../api/onsale',userid, function (res) {
        if(res.length!=0){
            $("#hidden").hide();
            for (var i = 0; i < res.length; i++) {
                var usrjo = $('#onsale').clone(true, true);
                $('#mpbox4').append(usrjo);
                usrjo.find('#onsale ').html( res[i].CoutonKind);
            }
            $('#onsale').remove();
        }
        else{
            $("#onsale").hide();
            $("#hidden").show();
        }
    });
    $.post('../api/informationnum',function(res){
            for (var i = 0; i < res.length; i++) {
                var usrjo = $('#num').clone(true, true);
                $('#renum').append(usrjo);
                usrjo.find('#information').html( res[i].count);
            }
            $('#num').remove();
    })
});

$(document).ready(function(){
    $('#bossapply').click(function(){
        $.post('../api/bossapply',function(res){
            if(res.length!=0){
                qiao.bs.alert({title:"警告",msg:"您已经申请过成为卖家，请不要重复申请！"});
            }
            else{
                $('#bossapply').attr('href',"apply.html");
            }
        })
    })
    $('#personbuy').click(function(){
        var cancel1=$(this).attr('value');
        data={cancel1:cancel1}
        $.post('../api/personCenterList11',data,function (res) {
        })
        qiao.bs.alert("取消收藏成功！刷新页面后不再显示本课程！")
    })
    $('#bosscenter').click(function(){
        $.post('../api/bosscenter',function(res){
            if(res.length!=0){
                $('#bosscenter').attr('href',"seller_center.html");
            }
            else{
                qiao.bs.alert("您还不是卖家，请到卖家申请进行申请！");
            }
        })
    })

        $.post('../api/manage',function(res){
            if(res.length!=0){
                $('#manage').attr('href',"manage.html");
            }
            else{
                $('#manage').hide();
            }
        })
})
