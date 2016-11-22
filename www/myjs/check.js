/**
 * Created by Administrator on 2016/9/20.
 */
var userid;
var username;
$.post('/../../start/api/getMyInfo',function (res) {
    if(res.text=='没找到您的登录信息，请重新登陆或注册.'){
        window.location.href='http://m.xmgc360.com/start/web/account/'
    }
    userid=res.data['id'];
})
