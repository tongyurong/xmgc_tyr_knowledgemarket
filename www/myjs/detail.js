/**
 * Created by Administrator on 2016/9/28.
 */
var dat=window.location.search.split('=')[1];
var path = '../api/detail?courseid='+dat;
var path1='../api/detailname?courseid='+dat;
var path2 = '../api/detailpl?courseid='+dat;
var path3 = '../api/detailbrief?courseid='+dat;
var path4 = '../api/detailcollect?courseid='+dat;
var path5 = '../api/detailstudynum?courseid='+dat;
var path6 = '../api/detailcollect1?courseid='+dat;
$.get(path,function(res){
    for (var i = 0; i < res.length; i++) {
        var usrjo = $('#detail1').clone(true, true);
        $('#detailbox1').append(usrjo);
        usrjo.find('#detailname').html(res[i].CourseEachName);
        usrjo.find('#detailtime').html(res[i].CourseEachTime);
        usrjo.find('#detailid').html(res[i].CourseEachId);
    }
    $('#detail1').remove();
})
$.get(path5,function(res){

    for (var i = 0; i < res.length; i++) {
        var usrjo = $('#myspan').clone(true, true);
        $('#remyspan').append(usrjo);
        usrjo.find('#myspannum').html(res[i].count);
    }
    $('#myspan').remove();
})
$.get(path1,function(res){
    for(var i=0;i<res.length;i++){
    var usrjo = $('#detail_1').clone(true, true);
    $('#fuzhidiv').append(usrjo);
    usrjo.find('#detail_11').html(res[i].CourseName);
        usrjo.find('#detailtimes').html(res[i].CourseTimes);
        usrjo.find('#detailpay').html(res[i].CoursePrice);
    }
    $('#detail_1').remove();
    for (var i = 0; i < res.length; i++) {
                var usrjo = $('#buy_btn').clone(true, true);
                $('#redetailbuy').append(usrjo);
                usrjo.find('#detailbuy').attr('href', './buy_page.html?courseprice=' + res[i].CoursePrice+'=courseid='+res[i].CourseID);
                usrjo.find('#cookID').html(res[i].CourseID);
            }
    $('#buy_btn').remove();
    for(var i=0;i<res.length;i++){
        var usrjo = $('#buy').clone(true, true);
        $('#redetailbuy1').append(usrjo);
        usrjo.find('#detailbuy1').attr('href','./buy_page.html?courseid='+res[i].CourseID+'&courseprice='+res[i].CoursePrice);
        usrjo.find('#cookID1').html(res[i].CourseID);
    }
    $('#buy').remove();
})
$.get(path2,function(res){
    if(res.length!=0){
        $("#nonepl").hide();
    } else{
        $("#talk").hide();
        $("#nonepl").show();
    }
    for (var i = 0; i < res.length; i++) {
        var usrjo = $('#talk').clone(true, true);
        $('#retalk').append(usrjo);
        usrjo.find('#plname').html(res[i].UserName);
        usrjo.find('#pltext').html(res[i].ReviewContent);
        usrjo.find('#pltime').html(res[i].ReviewsDate);
        usrjo.find('#protailurl').attr('src',res[i].UserPortraitURL);
    }
    $('#talk').remove();
})
$.get(path3,function(res){
    if(res.Coursebrief!=null){
        $("#nonebrief").hide();
    } else{
        $("#brief").hide();
        $("#nonebrief").show();
    }
    for(var i=0;i<res.length;i++){
        var usrjo = $('#brief').clone(true, true);
        $('#rebrief').append(usrjo);
        usrjo.find('#brief1').html(res[i].Coursebrief);
    }
    $('#brief').remove();
})
$.get(path4,function(res){
    $(document).ready(function(){
        $('#detailcollect').click(function(){
            if(res.length==0){
                qiao.bs.alert("收藏成功！请到个人中心查看！")
            }else{
                qiao.bs.alert({title:"警告",msg:"已经收藏过了！请不要重复收藏！"})
            }
        })
    })
})
$.get(path6,function(res){
    $(document).ready(function(){
        $('#detailcollect1').click(function(){
            if(res.length==0){
                qiao.bs.alert("收藏成功！请到个人中心查看！")
            }else{
                qiao.bs.alert({title:"警告",msg:"已经收藏过了！请不要重复收藏！"})
            }
        })
    })
})
