
/*
 * GET home page.
 */
var db = require("./db");
var ejs = require('ejs');

/*显示编辑个人信息页面*/
exports.navToEditMyFile = function(req, res){
    var user = req.session.user;

    //若未登陆，跳到登陆页面
    if(!user){
        res.render('login');
        return ;
    }
    //若已经登陆，查询用户历史测算记录
    //var userName = user.u_name,
    //    con = db.dbGetCon(),
    //    curpage = req.query.curpage,
    //    sql = "select * from t_userdivinehistory where udhUserName = ? order by udhId desc";
	//
    //db.queryByPage(con,curpage,10,sql,[userName],function(e,r,f,page){
    //    if(e){
    //        console.log("有错误"+e);
    //    }else{
    //        page.user = user;
    //        page.aInfo = r;
    //        res.render('my',page);
    //    }
    //});

	res.render("editMyFile");
};
