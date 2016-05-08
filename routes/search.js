
/*
 * GET home page.
 */
var db = require("./db");

exports.navToSearchPage = function(req, res){
  //res.sendfile("./public/htmls/index.html");

    //res.sendfile("./public/htmls/testEJS.html");

//    res.render("test",{
//        s:"测试文字"
//    });
    res.render('search');
    //res.send("hello");
};
