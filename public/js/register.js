/**
 * Created by ty on 2016/4/11.
 */
$(function(){
    var registerBtn = $("#registerBtn"),
        form = $("#registerForm");
    registerBtn.click(function(){
        console.log(form.serialize());
        $.ajax({
            type:"post",
            url:"/registerAtDb",
            data:form.serialize(),
            success:function(param){
                console.log(param);
//                if(param.length>0){
//                    window.location = "/index"
//                }else{
//                    alert("用户名或密码错误");
//                }
            },
            error:function(){
                alert("注册失败，请稍后再试");
            }
        });
    });

    /*发送验证码到邮箱*/
    var sendValidateToEmail = $("#sendValidateToEmail");
    sendValidateToEmail.click(function(){
        $.ajax({
            url:"/sendMail",
            type:"get",
            success:function(param){
                console.log(param)
            },
            error:function(xhr,type,e){
                console.log("注册出错："+type+e);
            }
        });
    });
});