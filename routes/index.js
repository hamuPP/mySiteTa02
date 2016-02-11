
/*
 * GET home page.
 */

exports.index = function(req, res){
  //res.sendfile("./public/htmls/index.html");

    //res.sendfile("./public/htmls/testEJS.html");

//    res.render("test",{
//        s:"测试文字"
//    });
    res.render('index');
    //res.send("hello");
};

exports.divine = function(req,res){
    res.render('divine');
};