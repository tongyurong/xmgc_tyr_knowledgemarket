/**
 * Created by Administrator on 2016/10/11.
 */
var dat=window.location.search.split('=')[1];
var path = '../api/video?courseid='+dat;
$.get(path,function(res){

    for (var i = 0; i < res.length; i++) {
        var usrjo = $('#eachvideo').clone(true, true);
        $('#reeachvideo').append(usrjo);
        usrjo.find('#video').html(res[i].CourseEachName);
        usrjo.find('#videoview').attr('src',res[i].CourseEachURL);
    }
    $('#eachvideo').remove();

})