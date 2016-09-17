
/*
 * GET home page.
 */
var db = require("./db");
var ejs = require('ejs');

/*显示我的页面的用户信息：用户名、用户头像与测算记录*/
exports.myPage = function(req, res){
    var user = req.session.user;

    //若未登陆，跳到登陆页面
    if(!user){
        res.render('login');
        return ;
    }
    //若已经登陆，查询用户历史测算记录
    var userName = user.u_name,
        pool = db.dbGetPool(),
        curpage = req.query.curpage,
        sql = "select * from t_userdivinehistory where udhUserName = ? order by udhId desc";

    db.queryByPage(pool,curpage,10,sql,[userName],function(e,r,f,page){
        if(e){
            console.log("有错误"+e);
        }else{
            page.user = user;
            page.aInfo = r;
            res.render('my',page);
        }
    });
};
