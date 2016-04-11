/**
 * Created by ty on 2016/4/3.
 */
var nodemailer = require("nodemailer");
//var generator = require("xoauth2").createXOAuth2Generator({
//    user: '{username}',
//    clientId: '{Client ID}',
//    clientSecret: '{Client Secret}',
//    refreshToken: '{refresh-token}',
//    accessToken: '{cached access token}' // optional
//});

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    pool:true,
    service:'QQ',
    auth:{
        user:"734877275@qq.com",
        pass:"familyCC"
    }
});
var validationCode = "123456";
// setup e-mail data with unicode symbols
var mailOptions = {
    from: '734877275@qq.com', // sender address
    to: 'oppaikyouma@163.com', // list of receivers
    subject: '验证码', // Subject line
    text: validationCode // plaintext body
};

exports.sendmail = function(req,res){
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            res.json({msg:error,code:-1});
        }else{
            console.log('邮件已发送: ' + info.response);
            res.json({msg:info.response,code:0});
        }

    });
};