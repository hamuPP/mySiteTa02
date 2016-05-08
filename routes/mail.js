/**
 * Created by ty on 2016/4/3.
 */
var db = require("./db");
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
        pass:"Hy1shmhslgd"
    }
});
var validationCode = "";
var mailOptions = {};

exports.sendmail = function(req,res){
    var email = req.query.email;
    var nowTime = new Date().getTime();
    var interval = 30*60*1000;//验证码有效时间为30分钟

    console.log("routes/mail.js 31 Line : "+email+" / "+nowTime);
    var con = db.dbGetCon();
    var searchSql = "select * from t_registerEmailAndTime_test where r_email=?";
    var insertNewItemSql = "insert into t_registerEmailAndTime_test(r_email,r_time,r_validationCode) value(?,?,?)";
    var updateSql = "update t_registerEmailAndTime_test set r_time = ?,r_validationCode = ? where r_email = ?";

    /*save email addr and nowTime into database*/
    con.query(searchSql,[email],function(err,row){
        if(err){
            console.log(err);
        }else{
            var inner_con = db.dbGetCon();

            validationCode = generateRandomNumberString(6,0,9);

            if(row.length > 0){//oready existed email address
                inner_con.query(updateSql,[nowTime,validationCode,email],function(e,r,f){
                    if(e){
                        console.log("routes/mail.js 50Line: 向数据库写入发送验证码邮箱与时间出错："+e);
                    }else{
                        console.log("routes/mail.js 52Line: 向数据库写入发送验证码邮箱与时间成功");
                        // send mail with defined transport object

                        //send validate code to user's email
                        mailOptions = {
                            from: '734877275@qq.com', // sender address
                            to: 'oppaikyouma@163.com', // list of receivers
                            subject: '验证码', // Subject line
                            html: '验证码为<br/>'+validationCode+'<br/>验证码有效时间为半小时，请尽快使用。'
                        };

                        transporter.sendMail(mailOptions, function(error, info){
                            if(error){
                                res.json({msg:error,code:-1});
                            }else{
                                console.log('routes/mail.js 70 Line:邮件已发送: ' + info.response);
                                res.json({msg:info.response,code:0});
                            }

                        });
                    }
                });
                inner_con.end();
            }else{//new email address
                inner_con.query(insertNewItemSql,[email,nowTime,validationCode],function(e,r,f){
                    if(e){
                        console.log("routes/mail.js 75Line: 向数据写入发送验证码邮箱与时间出错："+e);
                    }else{
                        console.log("routes/mail.js 77Line: 向数据写入发送验证码邮箱与时间成功");
                        // send mail with defined transport object
                        //send validate code to user's email
                        mailOptions = {
                            from: '734877275@qq.com', // sender address
                            to: 'oppaikyouma@163.com', // list of receivers
                            subject: '验证码', // Subject line
                            html: '验证码为<br/>'+validationCode+'<br/>验证码有效时间为半小时，请尽快使用。'
                        };

                        transporter.sendMail(mailOptions, function(error, info){
                            if(error){
                                res.json({msg:error,code:-1});
                            }else{
                                console.log('outes/mail.js 97 Line:邮件已发送: ' + info.response);
                                res.json({msg:info.response,code:0});
                            }

                        });
                    }
                });
                inner_con.end();
            }
        }
    });
    con.end();
};

/**
 * generate a random number array(validate numbers)
 * @param {Number} length 6
 * @param  {Number} minNum 1
 * @param {Number} maxNum 9
 * return {String} a random number combine
 */
function generateRandomNumberString(length,minNum,maxNum){
    var str ="";
    var num=0;
    for(var i = 0;i < length;i++){
        num = parseInt(Math.random()*maxNum- minNum);
        str += num;
    }
    return str;
};