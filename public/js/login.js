/**
 * Created by ty on 2016/3/29.
 */
$(function(){
    var loginButton = $("#loginBtn"),
        form = $("#loginForm");
    loginButton.click(function(){
        console.log($("#loginForm").serialize());
        $.ajax({
            type:"post",
            url:"/login",
            data:form.serialize(),
            success:function(param){

                if(param.length>0){
                    window.location = "/index"
                }else{
                    alert("用户名或密码错误");
                }
            },
            error:function(){
                alert("登录失败，请稍后再试");
            }
        });
    });
});