/**
 * Created by Administrator on 15-9-24.
 */
var mysql = require("mysql");

/**连接数据库d_tarotall**/
function dbGetCon(){
    var con = mysql.createConnection({
        host:"localhost",
        database:"d_tarotall",
        port:3307,
        user:"root",
        password:"cc77"
    });
    return con;
}



//分页查询
function queryByPage(con,curpage,eachpage,sql,param,func){
//    console.log("curpage是："+ curpage+"，!curpage是"+!curpage);
//    console.log("con是："+con+",curpage是"+curpage+",eachpage是"+eachpage+",sql是："+sql+"param是"+param+"func是"+func);
    if(!curpage|| curpage <= 0){
        curpage = 1;
//        console.log("db中第一个if判断");
    }else{
//        console.log("else,curpage是："+ curpage+"，!curpage是"+!curpage);
    }
//    console.log("db中第一个if判断完毕");
//    console.log("curpage是："+ curpage);
    if(!func){
        func = param;
        param = [];
//        console.log("db中第二个if判断");
    }
//    console.log("db中第二个if判断完");
    con.query("select count(*) cnt from ("+sql+") t",param,function(e,r,f){
        //获取总数量
//        console.log("db中con.query");
        var count = r[0].cnt;
        //获取总页码
        var maxpage = Math.ceil(count/eachpage);
        sql += " limit "+((curpage-1)*eachpage)+","+eachpage;
        var inner_con = dbGetCon();
        inner_con.query(sql,param,function(e,r,f){
            var page = {"curpage":curpage,"maxpage":maxpage,"eachpage":eachpage};
            func(e,r,f,page);
        });
        inner_con.end();
    });
}

exports.dbGetCon = dbGetCon;
exports.queryByPage = queryByPage;