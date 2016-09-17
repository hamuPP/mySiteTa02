
var db = require("./db");

/*点击注册按钮后，跳转到注册页面*/
exports.navToRegisterPage = function(req, res){
  //res.sendfile("./public/htmls/index.html");

    //res.sendfile("./public/htmls/testEJS.html");

//    res.render("test",{
//        s:"测试文字"
//    });
    res.render('register');
    //res.send("hello");
};

/*注册一个账户到数据库*/
exports.registerAtDb = function(req,res){
    console.log("已进入register的register方法");
    var username = req.body.username;
    var pwd = req.body.pwd;
    var email = req.body.emailForValidate;
    var validateCode = req.body.validateCode;
    var registerTime = new Date().getTime();
    var pool = db.dbGetPool();
    var searchSql = "select * from t_registerEmailAndTime_test where r_email = ?";
    var insertSql = "insert into t_user(u_name,u_pwd,u_email,u_registertime) value(?,?,?,?)";
    var validationCodeErrMSG = "";

    //先检查邮箱与验证码是否与数据库中的匹配，以及是否超过验证码有效时间
	pool.getConnection(function(err,con){
		con.query(searchSql,[email],function(err,rows){
			if(err){
				console.log("routes/register.js 33 Line : "+err);
			}else{
				//有相应邮箱的发送验证码信息
				if(rows.length > 0){
					//用户输入验证码与数据库保存的验证码相同，且未超过有效时间
					if(rows[0]['r_validationCode'] == validateCode &&
						(registerTime - rows[0]['r_time']) < 30*60*1000 &&
						(registerTime - rows[0]['r_time']) > 0
					){
						//注册用户信息到数据库
						var innerPool = db.dbGetPool();
						pool.getConnection(function(err,inner_con){
							inner_con.query(insertSql,[username,pwd,email,registerTime],function(err,rows,fields){
								if(err){
									console.log("routes/register.js 47 Line:注册失败"+ err);
								}else{
									console.log("routes/register.js 49 Line:注册成功");
									//保存session
									req.session.user = {
										"u_name":username,
										"u_pwd":pwd,
										"u_email":email,
										"uid":rows.insertId
									};

									res.json({msg:"注册成功",code:0});
								}

								inner_con.release();
							});

						});

					}else{
						res.json({msg:"验证码错误",code:-1});
					}
				}else{//没有向该邮箱发送过验证码
					res.json({msg:"邮箱与验证码不匹配",code:-1});
				}
			}

			con.release();
		});
	});
};

exports.getSession = function(req,res){
    var user = req.session.user;
    if(user){
        res.json(user);
    }else{
        res.json({});
    }
};

exports.validateUserName = function(req,res){
    var user = req.query.username,
        pool = db.dbGetPool(),
        sql = "select * from t_user where u_name = ?";
	pool.getConnection(function(err,con){
		con.query(sql,[user],function(e,r){
			if(e){
				console.log("routes/register.js 88 Line: 验证用户名合法性出错"+ e);
			}else{
				res.json(r);
			}

			con.release();
		});
	});
};