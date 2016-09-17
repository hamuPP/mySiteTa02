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
        user:"3450302573@qq.com",
        pass:"icqxizxcjzhjdbgh"
    }
});
var validationCode = "";
var mailOptions = {};

exports.sendmail = function(req,res){
    var email = req.query.email;
    var nowTime = new Date().getTime();

    console.log("routes/mail.js 30 Line : "+email+" / "+nowTime);
    var pool = db.dbGetPool();
    var searchSql = "select * from t_registerEmailAndTime_test where r_email=?";
    var insertNewItemSql = "insert into t_registerEmailAndTime_test(r_email,r_time,r_validationCode) value(?,?,?)";
    var updateSql = "update t_registerEmailAndTime_test set r_time = ?,r_validationCode = ? where r_email = ?";

    /*save email addr and nowTime into database*/
	pool.getConnection(function(err,con){
		con.query(searchSql,[email],function(err,row){
			if(err){
				console.log(err);
			}else{
				var inner_pool = db.dbGetPool();

				validationCode = generateRandomNumberString(6,0,9);

				if(row.length > 0){//oready existed email address
					inner_pool.getConnection(function(err,inner_con){
						inner_con.query(updateSql,[nowTime,validationCode,email],function(e,r,f){
							if(e){
								console.log("routes/mail.js 50Line: 向数据库写入发送验证码邮箱与时间出错："+e);
							}else{
								console.log("routes/mail.js 52Line: 向数据库写入发送验证码邮箱与时间成功");
								// send mail with defined transport object

								//send validate code to user's email
								mailOptions = {
									from: '"jusctice_service"<3450302573@qq.com>', // sender address
									to: email, // list of receivers
									subject: '验证码', // Subject line
									html: '验证码为<br/>'+validationCode+'<br/>验证码有效时间为半小时，请尽快使用。<br/><hr/>--这是一封来自jusctice.cn的注册验证码邮件，如果你对此封邮件并没有印象，请无视掉它。因为可能是其他人误填了您的邮箱--'
								};

								transporter.sendMail(mailOptions, function(error, info){
									if(error){
										console.log('routes/mail.js 64 Line:邮件发送出错: ' + JSON.stringify(error));
										res.json({msg:error,code:-1});
									}else{
										console.log('routes/mail.js 70 Line:邮件已发送: ' + info.response);
										res.json({msg:info.response,code:0});
									}

								});
							}

							inner_con.release();
						});
					});
				}else{//new email address
					inner_pool.getConnection(function(err,inner_con){
						inner_con.query(insertNewItemSql,[email,nowTime,validationCode],function(e,r,f){
							if(e){
								console.log("routes/mail.js 75Line: 向数据写入发送验证码邮箱与时间出错："+e);
							}else{
								console.log("routes/mail.js 77Line: 向数据写入发送验证码邮箱与时间成功");
								// send mail with defined transport object
								//send validate code to user's email
								mailOptions = {
									from: '"jusctice_service"<3450302573@qq.com>', // sender address
									to: email, // list of receivers
									subject: '验证码', // Subject line
									html: '验证码为<br/>' + validationCode
									+ '<br/>验证码有效时间为半小时，请尽快使用。<br/><hr/>--这是一封来自jusctice.cn的注册验证码邮件，如果你对此封邮件并没有印象，请无视掉它。因为可能是其他人误填了您的邮箱--'
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

							inner_con.release();
						});
					});

				}
			}

			con.release();
		});
	});
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