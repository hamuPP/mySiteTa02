
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.sendfile("./public/htmls/index.html");
//    res.render("test",{
//        s:"测试文字"
//    });
};