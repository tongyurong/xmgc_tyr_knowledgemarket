/**
 * Created by Administrator on 2016/9/26.
 */

var dat=window.location.search.split('=')[1];
sessionStorage.setItem("key", dat);
var path = '../api/select?data='+dat;
$.get(path,function (res) {
    var count=res[0][0].count;
    var alldata=res[1];
    var pagecount=Math.ceil(count/4)
    $("#hidep2").text(pagecount);
    var pHtml='<li><a href="#" id="span1">《</a></li>';
    for(var i=1;i<=pagecount;i++){
        pHtml +='<li><a href="#" class="fenye" >'+i+'</a href="#"></li>';
    }
    pHtml+='<li><a href="#" id="span2">》</a></li>';


    $("#page").html(pHtml);
    if(count!=0) {
        $("#wenzi2").hide();
    }
    else{
        $("#coursename1").hide();
        $("#wenzi2").show();
    }
    for (var i = 0; i < res[1].length; i++) {
        var usrjo = $('#coursename1').clone(true, true);
        $('#mpbox5').append(usrjo);
        usrjo.find(' #selectname').html(res[1][i].CourseName);

        usrjo.find(' #selectprice').html(res[1][i].CoursePrice);
        usrjo.find(' #selecttimes').html(res[1][i].CourseTimes);
        usrjo.find('#selectimg').attr('src', res[1][i].CourseImgURL);
        usrjo.find('.detailbtn').attr('id',res[1][i].CourseID);
        usrjo.find('.selectcollect').attr('id',res[1][i].CourseID);
        usrjo.find('.detailbtn').attr('href','./detail.html?courseid='+res[1][i].CourseID);

    }
    $('.coursename1').hover(function () {
        $(this).children(0).next().slideDown();
    },function(){
        $(this).children(0).next().slideUp();
    })
    $('#coursename1').hide();
});

$(document).ready(function(){
    $(".fenye").click(function () {
        $("#mpbox5").html("");
        $('#coursename1').show();
        var pageindex=$(this).text();
        $("#hidep1").text(pageindex);
        var data2=$("#hidep3").text();
        var data1={pageindex:pageindex,data2:data2};
        $.get(path,data1,function (res) {
            var x= res[1];
            if(res[1].length!=0) {
                $("#wenzi2").hide();
            }
            else{
                $("#coursename1").hide();
                $("#wenzi2").show();
            }
            for (var i = 0; i < res[1].length; i++) {
                var usrjo = $('#coursename1').clone(true, true);
                $('#mpbox5').append(usrjo);
                usrjo.find(' #selectname').html(res[1][i].CourseName);
                usrjo.find(' #selectprice').html(res[1][i].CoursePrice);
                usrjo.find(' #selecttimes').html(res[1][i].CourseTimes);
                usrjo.find('#selectimg').attr('src', res[1][i].CourseImgURL);
                usrjo.find('.detailbtn').attr('id',res[1][i].CourseID);
                usrjo.find('.selectcollect').attr('id',res[1][i].CourseID);
                usrjo.find('.detailbtn').attr('href','./detail.html?courseid='+res[1][i].CourseID);
            }
            $('.coursename1').hover(function () {
                $(this).children(0).next().slideDown();
            },function(){
                $(this).children(0).next().slideUp();
            })
            $('#coursename1').hide();
        });
    });

    $("#span1").click(function () {
        var pageindex= $("#hidep1").text();
        var thepage=parseInt(pageindex);
        if(thepage==1){
            qiao.bs.alert("已是第一页")
        }
        else {
            thepage=parseInt(pageindex)-1;
            $("#hidep1").text(thepage);
            $("#mpbox5").html("");
            $('#coursename1').show();
            var data2=$("#hidep3").text();
            var data1={pageindex:thepage,data2:data2};
            $.get(path,data1,function (res) {
                var x= res[1];
                if(res[1].length!=0) {
                    $("#wenzi2").hide();
                }
                else{
                    $("#coursename1").hide();
                    $("#wenzi2").show();
                }
                for (var i = 0; i < res[1].length; i++) {
                    var usrjo = $('#coursename1').clone(true, true);
                    $('#mpbox5').append(usrjo);
                    usrjo.find(' #selectname').html(res[1][i].CourseName);
                    usrjo.find(' #selectprice').html(res[1][i].CoursePrice);
                    usrjo.find(' #selecttimes').html(res[1][i].CourseTimes);
                    usrjo.find('#selectimg').attr('src', res[1][i].CourseImgURL);
                    usrjo.find('.detailbtn').attr('id',res[1][i].CourseID);
                    usrjo.find('.selectcollect').attr('id',res[1][i].CourseID);
                    usrjo.find('.detailbtn').attr('href','./detail.html?courseid='+res[1][i].CourseID);
                }
                $('.coursename1').hover(function () {
                    $(this).children(0).next().slideDown();
                },function(){
                    $(this).children(0).next().slideUp();
                })
                $('#coursename1').hide();
            });
        }
    });

    $("#span2").click(function () {
        var pageindex= $("#hidep1").text();
        var thepage=parseInt(pageindex)+1;
        var maxpage=parseInt($("#hidep2").text())+1;
        if(thepage==maxpage){
            qiao.bs.alert("已是最后页")
        }
        else {
            $("#hidep1").text(thepage);
            $("#mpbox5").html("");
            $('#coursename1').show();
            var data2=$("#hidep3").text();
            var data1={pageindex:thepage,data2:data2};
            $.get(path,data1,function (res) {
                var x= res[1];
                if(res[1].length!=0) {
                    $("#wenzi2").hide();
                }
                else{
                    $("#coursename1").hide();
                    $("#wenzi2").show();
                }
                for (var i = 0; i < res[1].length; i++) {
                    var usrjo = $('#coursename1').clone(true, true);
                    $('#mpbox5').append(usrjo);
                    usrjo.find(' #selectname').html(res[1][i].CourseName);
                    usrjo.find(' #selectprice').html(res[1][i].CoursePrice);
                    usrjo.find(' #selecttimes').html(res[1][i].CourseTimes);
                    usrjo.find('#selectimg').attr('src', res[1][i].CourseImgURL);
                    usrjo.find('.detailbtn').attr('id',res[1][i].CourseID);
                    usrjo.find('.selectcollect').attr('id',res[1][i].CourseID);
                    usrjo.find('.detailbtn').attr('href','./detail.html?courseid='+res[1][i].CourseID);
                }
                $('.coursename1').hover(function () {
                    $(this).children(0).next().slideDown();
                },function(){
                    $(this).children(0).next().slideUp();
                })
                $('#coursename1').hide();
            });
        }
    });

//点击价钱从高到低排列
    $('#high').click(function(){
        $("#mpbox5").html("");
        $("#hidep1").text("1");
        $('#coursename1').show();
        var data2=$('#high').attr('value');
        $('#highp').attr('class','active');
        $('#morenp').attr('class','');
        $('#morep').attr('class','');
        data3={data2:data2};
        $("#hidep3").text(data2);
        $.post(path,data3,function (res) {
            var count=res[0][0].count;
            var alldata=res[1];
            var pagecount=Math.ceil(count/4)
            $("#hidep2").text(pagecount);
            if(count!=0) {
                $("#wenzi2").hide();
            }
            else{
                $("#coursename1").hide();
                $("#wenzi2").show();
            }
            for (var i = 0; i < res[1].length; i++) {
                var usrjo = $('#coursename1').clone(true, true);
                $('#mpbox5').append(usrjo);
                usrjo.find(' #selectname').html(res[1][i].CourseName);
                usrjo.find(' #selectprice').html(res[1][i].CoursePrice);
                usrjo.find(' #selecttimes').html(res[1][i].CourseTimes);
                usrjo.find('#selectimg').attr('src', res[1][i].CourseImgURL);
                usrjo.find('.detailbtn').attr('id',res[1][i].CourseID);
                usrjo.find('.selectcollect').attr('id',res[1][i].CourseID);
                usrjo.find('.detailbtn').attr('href','./detail.html?courseid='+res[1][i].CourseID);
            }
            $('.coursename1').hover(function () {
                $(this).children(0).next().slideDown();
            },function(){
                $(this).children(0).next().slideUp();
            })
            $('#coursename1').hide();
        });
    })

    //点击价钱从低到高
    $('#low').click(function(){
        $("#mpbox5").html("");
        $("#hidep1").text("1");
        $('#coursename1').show();
        $('#highp').attr('class','active');
        $('#morenp').attr('class','');
        $('#morep').attr('class','');
        var data2=$('#low').attr('value');
        data3={data2:data2}
        $("#hidep3").text(data2);
        $.post(path,data3,function (res) {
            var count=res[0][0].count;
            var alldata=res[1];
            var pagecount=Math.ceil(count/4)
            $("#hidep2").text(pagecount);
            if(count!=0) {
                $("#wenzi2").hide();
            }
            else{
                $("#coursename1").hide();
                $("#wenzi2").show();
            }
            for (var i = 0; i < res[1].length; i++) {
                var usrjo = $('#coursename1').clone(true, true);
                $('#mpbox5').append(usrjo);
                usrjo.find(' #selectname').html(res[1][i].CourseName);
                usrjo.find(' #selectprice').html(res[1][i].CoursePrice);
                usrjo.find(' #selecttimes').html(res[1][i].CourseTimes);
                usrjo.find('#selectimg').attr('src', res[1][i].CourseImgURL);
                usrjo.find('.detailbtn').attr('id',res[1][i].CourseID);
                usrjo.find('.selectcollect').attr('id',res[1][i].CourseID);
                usrjo.find('.detailbtn').attr('href','./detail.html?courseid='+res[1][i].CourseID);
            }
            $('.coursename1').hover(function () {
                $(this).children(0).next().slideDown();
            },function(){
                $(this).children(0).next().slideUp();
            })
            $('#coursename1').hide();
        });
    })

    //点击课时从少到多
    $('#little').click(function(){
        $("#mpbox5").html("");
        $("#hidep1").text("1");
        $('#coursename1').show();
        $('#morep').attr('class','active');
        $('#morenp').attr('class','');
        $('#highp').attr('class','');
        var data2=$('#little').attr('value');
        data3={data2:data2}
        $("#hidep3").text(data2);
        $.post(path,data3,function (res) {
            var count=res[0][0].count;
            var alldata=res[1];
            var pagecount=Math.ceil(count/4)
            $("#hidep2").text(pagecount);
            if(count!=0) {
                $("#wenzi2").hide();
            }
            else{
                $("#coursename1").hide();
                $("#wenzi2").show();
            }
            for (var i = 0; i < res[1].length; i++) {
                var usrjo = $('#coursename1').clone(true, true);
                $('#mpbox5').append(usrjo);
                usrjo.find(' #selectname').html(res[1][i].CourseName);
                usrjo.find(' #selectprice').html(res[1][i].CoursePrice);
                usrjo.find(' #selecttimes').html(res[1][i].CourseTimes);
                usrjo.find('#selectimg').attr('src', res[1][i].CourseImgURL);
                usrjo.find('.detailbtn').attr('id',res[1][i].CourseID);
                usrjo.find('.selectcollect').attr('id',res[1][i].CourseID);
                usrjo.find('.detailbtn').attr('href','./detail.html?courseid='+res[1][i].CourseID);
            }
            $('.coursename1').hover(function () {
                $(this).children(0).next().slideDown();
            },function(){
                $(this).children(0).next().slideUp();
            })
            $('#coursename1').hide();
        });
    })

    //点击课时从多到少
    $('#more').click(function(){
        $('#coursename1').show();
        $("#mpbox5").html("");
        $("#hidep1").text("1");
        $('#morep').attr('class','active');
        $('#morenp').attr('class','');
        $('#highp').attr('class','');
        var data2=$('#more').attr('value');
        data3={data2:data2}
        $("#hidep3").text(data2);
        $.post(path,data3,function (res) {
            var count=res[0][0].count;
            var alldata=res[1];
            var pagecount=Math.ceil(count/4)
            $("#hidep2").text(pagecount);
            if(count!=0) {
                $("#wenzi2").hide();
            }
            else{
                $("#coursename1").hide();
                $("#wenzi2").show();
            }
            for (var i = 0; i < res[1].length; i++) {
                var usrjo = $('#coursename1').clone(true, true);
                $('#mpbox5').append(usrjo);
                usrjo.find(' #selectname').html(res[1][i].CourseName);
                usrjo.find(' #selectprice').html(res[1][i].CoursePrice);
                usrjo.find(' #selecttimes').html(res[1][i].CourseTimes);
                usrjo.find('#selectimg').attr('src', res[1][i].CourseImgURL);
                usrjo.find('.detailbtn').attr('id',res[1][i].CourseID);
                usrjo.find('.selectcollect').attr('id',res[1][i].CourseID);
                usrjo.find('.detailbtn').attr('href','./detail.html?courseid='+res[1][i].CourseID);
            }
            $('.coursename1').hover(function () {
                $(this).children(0).next().slideDown();
            },function(){
                $(this).children(0).next().slideUp();
            })
            $('#coursename1').hide();
        });
    })

    //点击默认派讯
    $('#moren').click(function(){
        $('#coursename1').show();
        $("#mpbox5").html("");
        $("#hidep1").text("1");
        $('#morenp').attr('class','active');
        $('#morep').attr('class','');
        $('#highp').attr('class','');
        var data2=$('#moren').attr('value');
        data3={data2:data2};
        $("#hidep3").text(data2);
        $.get(path,data3,function (res) {
            var count=res[0][0].count;
            var alldata=res[1];
            var pagecount=Math.ceil(count/4)
            $("#hidep2").text(pagecount);
            if(count!=0) {
                $("#wenzi2").hide();
            }
            else{
                $("#coursename1").hide();
                $("#wenzi2").show();
            }
            for (var i = 0; i < res[1].length; i++) {
                var usrjo = $('#coursename1').clone(true, true);
                $('#mpbox5').append(usrjo);
                usrjo.find(' #selectname').html(res[1][i].CourseName);
                usrjo.find(' #selectprice').html(res[1][i].CoursePrice);
                usrjo.find(' #selecttimes').html(res[1][i].CourseTimes);
                usrjo.find('#selectimg').attr('src', res[1][i].CourseImgURL);
                usrjo.find('.detailbtn').attr('id',res[1][i].CourseID);
                usrjo.find('.selectcollect').attr('id',res[1][i].CourseID);
                usrjo.find('.detailbtn').attr('href','./detail.html?courseid='+res[1][i].CourseID);
            }
            $('.coursename1').hover(function () {
                $(this).children(0).next().slideDown();
            },function(){
                $(this).children(0).next().slideUp();
            })
            $('#coursename1').hide();
        });
    })
})

$(document).ready(function(){
    $(".selectcollect").click(function(){
        var data=$(this).attr('id');
        var path1 = '../api/selectcollect?courseid='+data;
        $.get(path1,function(res){
            if(res.length==0){
                qiao.bs.alert("收藏成功！请到个人中心查看！");
            }
            else{
                qiao.bs.alert({title:"警告",msg:"已经收藏过了！请不要重复收藏，请到个人中心查看！"});
            }
        })
    })
})
