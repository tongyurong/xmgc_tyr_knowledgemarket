/**
 * Created by 佟煜荣 on 2016/10/21.
 */
$(document).ready(function(){
    $.post('../api/manageR3',function(res){
        if (res.length != 0) {
            $("#nocard3").hide();
            for (var i = 0; i < res.length; i++) {
                var usrjo = $('#card3').clone(true, true);
                $('#recard3').append(usrjo);
                usrjo.find('#ide3courseid').html(res[i].CourseId);
                usrjo.find('#ide3coursename').html(res[i].CourseName);
                usrjo.find('#ide3id').html(res[i].UserId);
                usrjo.find('#ide3paynum').html(res[i].gathernum);
                usrjo.find('#ide3paymoney').html('￥'+res[i].count*res[i].CoursePrice/2);
            }
            $('#card3').remove();
        }
        else {
            $("#card3").hide();
            $("#nocard3").show();
        }
    })
    $("#ide3queren").click(function(){
        var courseid=$('#ide3courseid').html();
        var data={courseid:courseid};
        $.post('../api/manageR31',data,function(){
        })
        window.location.reload();
    })
    
})