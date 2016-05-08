
/*
 * GET home page.
 */
var db = require("./db");

exports.myPage = function(req, res){
    res.render('my');
};
/**
 * 测算页面的显示全部数据、分页
 */
