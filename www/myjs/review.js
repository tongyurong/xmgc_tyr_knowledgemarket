/**
 * Created by 佟煜荣 on 2016/10/14.
 */
var dat = window.location.search.split('=')[1];
$(document).ready(function(){
    $('#submit').click(function(){
        var review = document.getElementById('textpl').value;
        var data={review,dat};
        $.post('../api/review',data,function(){
        })
    })
})
