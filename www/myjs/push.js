/**
 * Created by 佟煜荣 on 2016/10/17.
 */

$(document).ready(function(){
    //上传图片
    $('#shangchuan').click(function () {
        _fns.uploadFile2($('#shangchuan'), function (f) {
            console.log('>>>>before:', f);
        }, function (f) {
            console.log('>>>>progressAAAA:', f);
            $('#wancheng').css('width', f.percent + '%');
            $('#wancheng').html(f.percent + '%');
            console.log('>>>>>AAAA');
        }, function (f) {
            console.log('>>>>successXXXX:', f);
            $('#wenjian').html(f.url);
            $('#wenjian').attr('href', f.url);
        });
    });

   //上传视频并克隆
    $("#addtimes").click(function(){
        var ht=$('#wancheng1').html().split('=')[0];
        if(ht=='100%'){
            $('#wancheng1').html("0%");
            $('#wancheng1').attr('style',"background:green;width:0");
            var usrjo = $('#times').clone(true, true);
            usrjo.find('#shangchuan1').attr('style','display:none');
            usrjo.find('#addtimes').attr('style','display:none');
            usrjo.find('.tixingtext').attr('style','display:none');
            usrjo.find('#times1').val();
            usrjo.find('#times2').val();
            usrjo.find('#times3').html("上传完成！");
            usrjo.find('#times3').attr('style',"background:green;width:200px;margin:12px;");
            $('#zi').append(usrjo);
            $('#wenjian1').html(".....");
            $('#wenjian1').attr('href'," ");
            $('#times1').val("");
            $('#times2').val("");
        }
        else{
            qiao.bs.alert("请完成一个视频后再确认上传完成！")
        }
    })

    $('#shangchuan1').click(function () {
        _fns.uploadFile2($('#shangchuan1'), function (f) {
            console.log('>>>>before:', f);
        }, function (f) {
            console.log('>>>>progressAAAA:', f);
            $('#wancheng1').css('width', f.percent + '%');
            $('#wancheng1').html(f.percent + '%');
            console.log('>>>>>AAAA');
        }, function (f) {
            console.log('>>>>successXXXX:', f);
            $('#wenjian1').html(f.url);
            $('#wenjian1').attr('href', f.url);
        });
    });

    //获取页面数据
    $('#push_yes').click(function(){
        var pushcoursename=$("#pushCourseName").val();
        var pushcoursetimes=$("#pushCoursetimes").val();
        var pushcourseprice=$('#pushcourseprice').val();
        var pushbrief=$('#pushbrief').val();
        var pushpicture=$('#wenjian').html();
        var pushselA=$('#selA').val();
        var pushselB=$('#selB').val();
        var muluTime='';
        var muluName='';
        var muluUrl='';
        $('#zi #times').each(function () {
            var muluname = $(this).children().find('#times1').val();
            var mulutime = $(this).children().find('#times2').val();
            var muluurl = $(this).children().find('#wenjian1').html();
            muluTime =muluTime+ ',' + mulutime.toString();
            muluName =muluName+ ',' + muluname.toString();
            muluUrl=muluUrl+','+muluurl.toString();
        });

        data={
            pushcoursename:pushcoursename,
            pushcoursetimes:pushcoursetimes,
            pushcourseprice:pushcourseprice,
            pushbrief:pushbrief,
            pushselA:pushselA,
            pushselB:pushselB,
            pushpicture:pushpicture,
            muluTime:muluTime,
            muluName:muluName,
            muluUrl:muluUrl,
        }
        $.post('../api/push',data,function(){
                if(res.length!=0){
                    qiao.bs.alert({title:"警告",msg:"课程名称重复，请重新命名！"});
                }
        })
})
})


