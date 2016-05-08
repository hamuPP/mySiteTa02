
/*
 * GET users listing.
 */
/*先引用数据库*/
var db = require("./db");

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.validateUsername = function(req,res){
    console.log("已进入user.js中的validateusername方法");
    var username = req.query.username;
    var con = db.dbGetCon();
    con.query("select * from t_users where u_name=?",[username],function(e,r){
        if(e){
            console.log("数据库出错："+e);

        }else{
            if(r.length > 0){
                res.json({msg:"用户名已存在",status:true});
                /*status：true和falese代表用户名是否存在*/
            }else{
                res.json({msg:"用户名可用",status:false});
            }

        }

    });
    con.end();
}

/*验证邮箱*/
exports.validateEmail = function(req,res){
    console.log("已进入user.js中的validateEmail方法");
    var email = req.query.email;
    var con = db.dbGetCon();
    con.query("select * from t_users where u_email=?",[email],function(e,r){
        if(e){
            console.log("数据库出错："+e);

        }else{
            if(r.length > 0){
                res.json({msg:"邮箱已存在",status:true});
                /*status：true和falese代表用户名是否存在*/
            }else{
                res.json({msg:"邮箱可用",status:false});
            }

        }

    });
    con.end();
};


/**注册函数**/
exports.reg = function(req,res){
    console.log("已进入users的regist方法");
    var username = req.body.username;
    var pwd = req.body.pwd;
    var email = req.body.email;
    var con = db.dbGetCon();
//    var sql = "select * from t_users where u_name=? and u_pwd=?";
    var sql = "insert into t_users(u_name,u_pwd,u_email) value(?,?,?)";

    con.query(sql,[username,pwd,email],function(err,rows,fields){
        if(err){
            console.log("有错误"+err);
        }else{
            res.json({msg:"注册成功"});
        }
        con.end();
    });
};

/*登录函数*/
exports.login = function(req,res){
//    console.log("已进入user.js中的login方法");
    var username = req.body.username;
    var pwd = req.body.pwd;
    var sql = "select * from t_users where u_name = ? and u_pwd = ?";
    var con =db.dbGetCon();
    con.query(sql,[username,pwd],function(error,rows,fields){
        if(error){
            console.log("登录出错+"+error);
        }else{
            if(rows.length>0){
                req.session.user=rows[0];
            }
            res.json(rows);
        }
    });
    con.end()
};


exports.getSession = function(req,res){
    var user = req.session.user;
    if(user){
        res.json(user);
    }else{
        res.json({});
    }
};

exports.logout = function(req,res){
    req.session.user=null;
    res.json({});
};