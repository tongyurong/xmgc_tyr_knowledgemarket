/**
 * Created by Administrator on 2016/9/27.
 */
var userid;
$.post('../api/indexlimit',userid, function (res) {

    for (var i = 0; i < res.length; i++) {
        var usrjo = $('#indexlimit').clone(true, true);
        $('#box1').append(usrjo);
        usrjo.find(' #indexname1').html(res[i].CourseName);
        usrjo.find(' #indexprice1').html(res[i].CoursePrice);
        usrjo.find('#indeximg1').attr('src', res[i].CourseImgURL);
        usrjo.find('#limitdetail').attr('href','./detail.html?courseid='+res[i].CourseID);
    }
    $('#indexlimit').remove();

});

$.post('../api/indexwell',function (res) {

    for (var i = 0; i < res.length; i++) {
        var usrjo = $('#indexwell').clone(true, true);
        $('#box2').append(usrjo);
        usrjo.find(' #indexname2').html(res[i].CourseName);
        usrjo.find(' #indexprice2').html(res[i].CoursePrice);
        usrjo.find('#indeximg2').attr('src', res[i].CourseImgURL);
        usrjo.find('#gooddetail').attr('href','./detail.html?courseid='+res[i].CourseID);
    }
    $('#indexwell').remove();

});
$.post('../api/indexopen',function (res) {

    for (var i = 0; i < res.length; i++) {
        var usrjo = $('#indexopen').clone(true, true);
        $('#box3').append(usrjo);
        usrjo.find(' #indexname3').html(res[i].CourseName);
        usrjo.find(' #indexprice3').html(res[i].CoursePrice);
        usrjo.find('#indeximg3').attr('src', res[i].CourseImgURL);
        usrjo.find('#opendetail').attr('href','./detail.html?courseid='+res[i].CourseID);
    }
    $('#indexopen').remove();

});