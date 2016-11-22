/**
 * Created by 佟煜荣 on 2016/10/13.
 */
$.get('../api/allstudy',function (res) {
        for (var i = 0; i < 6; i++) {
            var usrjo = $('#allstudy').clone(true, true);
            $('#reallstudy').append(usrjo);
            usrjo.find('#studyname').html( res[i].CourseName);
            usrjo.find('#studyimg').attr('src',res[i].CourseImgURL);
            usrjo.find('#studynum').html( res[i].count);
            usrjo.find('#allstudy1').attr( 'href','./detail.html?courseid='+res[i].CourseId);
        }
        $('#allstudy').remove();
});


