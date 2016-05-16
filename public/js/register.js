/**
 * Created by ty on 2016/4/11.
 */
$(function(){
    var registerBtn = $("#registerBtn"),
        form = $("#registerForm"),
        emailRe = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
        registerResultMSG = $("#registerResultMSG"),
        userInput = $("#username"),
        usernameValidationMSG = $("#usernameValidationMSG"),
        pwd = $("#password"),
        pwdAgain = $("#passwordAgain"),
        pwdAgainMSG = $("#pwdAgainMSG"),
        emailMSG = $("#emailMSG"),
        validateCode = $("#validateCode"),
        validateCodeMSG = $("#validateCodeMSG"),
        userValidationFlag = false,//用户名是否合法:是否已存在相同名字
        pwdTwiceEqFlag = false,//两次密码是否相同
        validateCodeFlag = false;//是否输入了验证码

    /*向数据库注册新用户*/
    registerBtn.click(function(){
        console.log(form.serialize());
        if(userValidationFlag && pwdTwiceEqFlag && validateCodeFlag){
            $.ajax({
                type:"post",
                url:"/registerAtDb",
                data:form.serialize(),
                success:function(param){
                    /*注册成功，跳转到首页*/
                    if(param.code == -1){
                        registerResultMSG.html("注册失败！"+param.msg);
                        registerResultMSG.attr("class"," help-block small color-red");
                    }else if(param.code == 0){
                        registerResultMSG.attr("class","help-block small color-green");
                        registerResultMSG.html("注册成功！即将跳转到首页");
                        setTimeout(function(){
                            window.location = "index";
                        },400);
                    }
                },
                error:function(){
                    alert("注册失败，请稍后再试");
                }
            });
        }else{
            registerResultMSG.attr("class","help-block small color-red");
            registerResultMSG.html("请填写所有信息！");
        }

    });

    /*发送验证码到邮箱*/
    var sendValidateToEmail = $("#sendValidateToEmail");

    sendValidateToEmail.click(function(){
        var email = $("#inputEmail").val();
        if(!emailRe.test(email)){
            alert("邮箱格式有误！");
        }else {
            _turnGray();//让按钮不可点
            $.ajax({
                url: "/sendMail?email=" + email,
                type: "get",
                success: function (param) {
                    if(param.code === 0){
                        emailMSG.html("验证码已发送至邮箱");
                        emailMSG.attr("class","help-block small color-green");
                    }else{
                        emailMSG.html("发送失败，请再次点击发送"+param);
                        emailMSG.attr("class","help-block small color-red");
                    }
                },
                error: function (xhr, type, e) {
                    console.log("js/register.js 42 Line:注册出错：" + type + e);
                }
            });
        }
    });

    /*用户名验证*/
    userInput.blur(function(){
        var value = userInput.val();
        $.ajax({
            url:"/validateUserName?username="+value,
            type:"get",
            success:function(param){
                if(param.length > 0){
                    usernameValidationMSG.html("用户名已存在！换个新的吧！");
                    usernameValidationMSG.attr("class","help-block small color-red");
                    userValidationFlag = false;
                }else{
                    usernameValidationMSG.html("用户名可用");
                    usernameValidationMSG.attr("class","help-block small color-green");
                    userValidationFlag = true;
                }
            }
        });

    });

    /*两次输入的密码是否相同*/
    pwdAgain.blur(function(){
        var pwdAgainValue = pwdAgain.val(),
            pwdValue = pwd.val();
        if(pwdAgainValue === pwdValue){
            pwdAgainMSG.html(" √ 两次输入的密码相同");
            pwdAgainMSG.attr("class","help-block small color-green");
            pwdTwiceEqFlag = true;
        }else{
            pwdAgainMSG.html(" × 两次输入的密码不同");
            pwdAgainMSG.attr("class","help-block small color-red");
            pwdTwiceEqFlag = false;
        }
    });

    /*再次输入密码框内有值时，第一次密码输入框失去焦点后对比2次输入的密码是否相同*/
    pwd.blur(function(){
        if(pwdAgain.val() !== ""){
            var pwdAgainValue = pwdAgain.val(),
                pwdValue = pwd.val();
            if(pwdAgainValue === pwdValue){
                pwdAgainMSG.html(" √ 两次输入的密码相同");
                pwdAgainMSG.attr("class","help-block small color-green");
                pwdTwiceEqFlag = true;
            }else{
                pwdAgainMSG.html(" × 两次输入的密码不同");
                pwdAgainMSG.attr("class","help-block small color-red");
                pwdTwiceEqFlag = false;
            }
        }

    });

    /*验证码输入框失焦后验证是否为空*/
    validateCode.blur(function(){
        if(validateCode.val() === ""){
            validateCodeMSG.html(" × 请输入验证码");
            validateCodeMSG.attr("class","help-block small color-red");
            validateCodeFlag = false;
        }else{
            validateCodeMSG.html("");
            validateCodeFlag = true;
        }
    });

    $("#testBTN").click(function(e){
        e = event || window.event;
        e.stopPropagation();
        alert(123);
    });

});

function _turnGray(){
    var sendValidateToEmail = $("#sendValidateToEmail"),
        timeCountDown = 60;

    sendValidateToEmail.attr("disabled","disabled");

    t = setInterval(function(){
        if(timeCountDown < 2 ){
            clearInterval(t);
            sendValidateToEmail.removeAttr("disabled");
            sendValidateToEmail.html("发送验证码");
        }else{
            timeCountDown -= 1;
            sendValidateToEmail.html("重发验证码 "+timeCountDown+" s");
        }

    },1000);
}