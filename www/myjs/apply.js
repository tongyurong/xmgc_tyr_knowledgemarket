/**
 * Created by 佟煜荣 on 2016/10/15.
 */
$.post('/../../start/api/getMyInfo',function (res) {
    if(res.text=='没找到您的登录信息，请重新登陆或注册！'){
        qiao.bs.alert({title:"警告",msg:"没找到您的登录信息，请重新登陆或注册！"});
        window.location.href='http://m.xmgc360.com/start/web/account/'
    }
    var userid=res.data;
    $.post('../api/applyInfo',userid,function(res){
           $('#UserName').val(res.userId);
        $('#UserTel').val(res.userPhone);
    })
})
$(document).ready(function(){
    $('#submit').click(function(){
        var applyname = document.getElementById('UserName').value;
        var applyIdnumber = document.getElementById('UserIdnumber').value;
        var applyUserTel = document.getElementById('UserTel').value;
        var applyshoukuan = document.getElementById('shoukuan').value;
        var data={applyname,applyIdnumber,applyUserTel,applyshoukuan};
        if(applyname!='昵称只能是字母或汉字'&&applyIdnumber!='请输入有效的身份证号码'&&applyUserTel!='请输入有效的手机号码'){
            $.post('../api/apply',data,function(){
            })
        }
        else{
            qiao.bs.alert("请填写完整信息！");
        }

    })
})
