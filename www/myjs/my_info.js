/**
 * Created by 佟煜荣 on 2016/10/22.
 */
$(document).ready(function(){
    $.post('../api/read_no',function(res){
        if(res.length!=0) {
            $("#nono").hide(); }
        else{
            $("#no").hide();
            $("#nono").show();
        }
        for (var i = 0; i < res.length; i++) {
            var usrjo = $('#no').clone(true, true);
            $('#read_no').append(usrjo);
            usrjo.find(' #notext').html(res[i].informationtext);
            usrjo.find(' #noid').html(res[i].informationId);
            usrjo.find(' #infotimeno').html(res[i].inserttime);
        }
        $('#no').remove();
    })

    $.post('../api/read_yes',function(res){
        if(res.length!=0) {
            $("#noyes").hide(); }
        else{
            $("#yes").hide();
            $("noyes").show();
        }
        for (var i = 0; i < res.length; i++) {
            var usrjo = $('#yes').clone(true, true);
            $('#read_yes').append(usrjo);
            usrjo.find(' #yestext').html(res[i].informationtext);
            usrjo.find(' #yesid').html(res[i].informationId);
            usrjo.find(' #infotimeyes').html(res[i].inserttime);
    }
        $('#yes').remove();
    })

    $("#read_yes").each(function() {
        //标为未读
        $('#changeno').click(function () {
            var changeno = $('#yesid').html();
            data = {
                changeno: changeno,
            };
            $.post('../api/changeno', data, function () {
            })
            window.location.reload();
        })
        //标为已读

        //删除消息
        $('#yesdelete').click(function () {
            var yesdelete = $('#yes #yesid').html();
            data = {
                yesdelete: yesdelete,
            };
            $.post('../api/yesdelete', data, function () {
            })
            window.location.reload();
        })
    });
    $("#read_no").each(function() {
        $('#changeyes').click(function () {
            var changeyes = $('#noid').html();
            data = {
                changeyes: changeyes,
            };
            $.post('../api/changeyes', data, function () {
            })
            window.location.reload();
        })
        $('#nodelete').click(function () {
            var nodelete = $('#noid').html();
            data = {
                nodelete: nodelete,
            };
            $.post('../api/nodelete', data, function () {
            })
            window.location.reload();
        })
    });
})