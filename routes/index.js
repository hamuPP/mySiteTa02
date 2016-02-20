
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
 * 测算页面的显示全部数据
 */
exports.divineShowAll = function(req,res){
    var con = db.dbGetCon();
    con.query("select pxName,pxExpertIn,pxSummary,pxBanner from paixing",function(e,r){
        if(e){
            console.log("routes/index 25 Line :"+e);
        }else{
            var rows={};
            rows.r=r;
            res.render('divine',rows);
        }
    });
    con.end();

};

exports.divineDetail = function(req,res){
    res.render('divineDetail');
};