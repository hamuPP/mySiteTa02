
var db = require("./db");

/*点击登录按钮后，跳转到登录页面*/
exports.navToRegisterPage = function(req, res){
  //res.sendfile("./public/htmls/index.html");

    //res.sendfile("./public/htmls/testEJS.html");

//    res.render("test",{
//        s:"测试文字"
//    });
    res.render('register');
    //res.send("hello");
};
/**
 * 测算页面的显示全部数据、分页
 */
exports.divineShowAll = function(req,res){
    var con = db.dbGetCon(),
        curpage = req.query.curpage,
        cardSum = req.query.cardSum || 'all',
        expertIn = req.query.expertIn || 'all',
        sql,
        condition=[];
    if(cardSum == 'all' && expertIn == 'all'){
        sql = "select pxName,pxCardSum,pxExpertIn,pxSummary,pxBanner,pxDefaultPaizu from paixing";
//        condition = [expertIn];
    }else if(cardSum == 'all'){
        sql = "select pxName,pxCardSum,pxExpertIn,pxSummary,pxBanner,pxDefaultPaizu from paixing where pxExpertIn = ?";
        condition = [expertIn];
    }else if(cardSum != 'all' && expertIn == 'all'){
        sql = "select pxName,pxCardSum,pxExpertIn,pxSummary,pxBanner,pxDefaultPaizu from paixing where pxCardSum = ? ";
        condition = [cardSum];
    }else{
        sql = "select pxName,pxCardSum,pxExpertIn,pxSummary,pxBanner,pxDefaultPaizu from paixing where pxCardSum = ? and pxExpertIn = ?";
        condition = [cardSum,expertIn];
    }

    db.queryByPage(con,curpage,8,sql,condition,function(e,r,f,page){
        if(e){
            console.log("有错误"+e);
        }else{
            page.r = r;
            page.cardSum = cardSum;
            page.expertIn = expertIn;
            console.log("index.js 29LINE: "+JSON.stringify(page));
            res.render("divine",page);
        }
    });
};

exports.divineDetail = function(req,res){
    //console.log("37 line "+req.body.cardsForm+" / "+ req.query.cardsForm+" / "+req.data);
    var cardsForm = req.query.cardsForm,
        defaultPaizu = req.query.defaultPaizu;
    res.render('divineDetail',{
        "cardsForm":cardsForm,
        "defaultPaizu":defaultPaizu
    });
};

/*注册一个账户到数据库*/
exports.registerAtDb = function(req,res){
    console.log("已进入register的register方法");
    var username = req.body.username;
    var pwd = req.body.pwd;
    var email = req.body.emailForValidate;
    var validateCode = req.body.validateCode;
    var registerTime = new Date().getTime();
    var con = db.dbGetCon();
//    var sql = "select * from t_users where u_name=? and u_pwd=?";
    var sql = "insert into t_user(u_name,u_pwd,u_email,u_registertime) value(?,?,?,?)";
//    if(validateCode !== ){
//
//    }
    con.query(sql,[username,pwd,email,registerTime],function(err,rows,fields){
        if(err){
            console.log("有错误"+err);
        }else{
            res.json({msg:"注册成功"});
        }
        con.end();
    });
};