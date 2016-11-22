/**
 * Created by 佟煜荣 on 2016/10/19.
 */
$.post('../api/sellcourse',function (res) {
    if(res.length!=0){
        $("#nocourse").hide();
    }
    else{
        $("#course_info").hide();
        $("#nocourse").show();
    }
        for (var i = 0; i < res.length; i++) {
            var usrjo = $('#course_info').clone(true, true);
            $('#recourse_info').append(usrjo);
            usrjo.find(' #course_info_name').html(res[i].CourseName);
            usrjo.find('#myimg').attr('src', res[i].CourseImgURL);
            usrjo.find('#coursetime').html(res[i].inserttime);
            usrjo.find('#courseperson').html(res[i].count);
        }
        $('#course_info').remove();

});
$.post('../api/informationnum',function(res){

    for (var i = 0; i < res.length; i++) {
        var usrjo = $('#num').clone(true, true);
        $('#renum').append(usrjo);
        usrjo.find('#information').html( res[i].count);
    }
    $('#num').remove();
})
$.post('../api/applysellcourse',function (res) {
    if(res.length!=0){
        $("#noapplycourse").hide();
    }
    else{
        $("#applysellcourse").hide();
        $("#noapplycourse").show();
    }
        for (var i = 0; i < res.length; i++) {
            var usrjo = $('#applysellcourse').clone(true, true);
            $('#reapplysellcourse').append(usrjo);
            usrjo.find(' #applycoursename').html(res[i].CourseName);
            usrjo.find('#myimg1').attr('src', res[i].CourseImgURL);
           
        }
        $('#applysellcourse').remove();

});