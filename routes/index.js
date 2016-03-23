
/*
 * GET home page.
 */
var db = require("./db");

exports.index = function(req, res){
  //res.sendfile("./public/htmls/index.html");

    //res.sendfile("./public/htmls/testEJS.html");

//    res.render("test",{
//        s:"测试文字"
//    });
    res.render('index');
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
    }else{
        sql = "select pxName,pxCardSum,pxExpertIn,pxSummary,pxBanner,pxDefaultPaizu from paixing where pxCardSum = ?";
        condition = [cardSum];
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