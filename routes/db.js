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
    if(!curpage|| curpage <= 0){
        curpage = 1;
    }
    if(!func){
        func = param;
        param = [];
    }
    //console.log("db.js 32 line:"+sql+",param: "+param);
//    con.query(sql,function(e,r,f){
//        console.log(r);
//    });

    con.query("select count(*) cnt from ("+sql+") t",param,function(e,r,f){
        console.log("db.js 38line: "+r[0]);
        //获取总数量
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
    con.end();
}

exports.dbGetCon = dbGetCon;
exports.queryByPage = queryByPage;