/**
 * Created by ty on 2016/3/29.
 */
$(function(){
    var loginResultMSG = $("#loginResultMSG"),
        loginButton = $("#loginBtn"),
        form = $("#loginForm");
    loginButton.click(function(){
        $.ajax({
            type:"post",
            url:"/userLogin",
            data:form.serialize(),
            success:function(param){
                if(param.length>0){
                    loginResultMSG.attr("class","help-block small color-green");
                    loginResultMSG.html("登录成功，即将跳转到首页");
                    setTimeout(function(){
                        window.location = "index";
                    },400);
                }else{
                    loginResultMSG.html("用户名或密码错误");
                    loginResultMSG.attr("class","help-block small color-red");
                }
            },
            error:function(xhr,type,err){
                loginResultMSG.html("登录失败，请稍后再试"+type+err);
                loginResultMSG.attr("class","help-block small color-red");
            }
        });
    });
});