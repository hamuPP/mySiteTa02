
/*
 * GET home page.
 */
var db = require("./db");

/*跳转到登录页面*/
exports.navToLoginPage = function(req, res){
  //res.sendfile("./public/htmls/index.html");

    //res.sendfile("./public/htmls/testEJS.html");

//    res.render("test",{
//        s:"测试文字"
//    });
    res.render('login');
    //res.send("hello");
};

/*用户登录*/
exports.userLogin = function(req,res){
    var user= req.body.username,
        pwd = req.body.password,
        sql = "select * from t_user where u_name = ? and u_pwd = ?",
        con = db.dbGetCon();
    con.query(sql,[user,pwd],function(error,rows){
        if(error){
            console.log("登录出错+"+error);
        }else{
            if(rows.length>0){
                //注册信息到session
                req.session.user=rows[0];
            }
            res.json(rows);
        }
    });
    con.end();

};

/*判断是否已经登录*/
exports.getSession =function(req,res){
    var user = req.session.user;
    if(user){
        res.json(user);
    }else{
        res.json({});
    }
};

/*退出登录,并刷新当前页面*/
exports.logout = function(req,res){
    req.session.user=null;
    res.json({"code":0});
};