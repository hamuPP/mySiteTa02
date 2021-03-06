/**
 * Created by Administrator on 15-9-24.
 */
var mysql = require("mysql");


/**连接数据库d_tarotall**/
function dbGetPool() {
	var con = mysql.createConnection({
		host: "127.0.0.1",
		database: "d_tarotall",
		port: 3306,
		user: "root",
		password: "cc77"
	});

	var pool = mysql.createPool({
		host: "127.0.0.1",
		database: "d_tarotall",
		port: 3306,
		user: "root",
		password: "cc77"
	});

	return pool;
}


//分页查询-正序
function queryByPage(pool, curpage, eachpage, sql, param, func) {
	if (!curpage || curpage <= 0) {
		curpage = 1;
	}
	if (!func) {
		func = param;
		param = [];
	}

	pool.getConnection(function(err,con){
		con.query("select count(*) cnt from (" + sql + ") t", param, function (e, r, f) {
			//获取总数量
			var count = r[0].cnt;
			//获取总页码
			var maxpage = Math.ceil(count / eachpage);
			sql += " limit " + ((curpage - 1) * eachpage) + "," + eachpage;
			var innerPool = dbGetPool();
			innerPool.getConnection(function(err,inner_con){
				inner_con.query(sql, param, function (e, r, f) {
					var page = {"curpage": curpage, "maxpage": maxpage, "eachpage": eachpage};
					func(e, r, f, page);
				});

				inner_con.release();
			});
			con.release();
		});
	});
}

//分页查询-倒叙
function queryByPageDesc(con, curpage, eachpage, sql, param, func) {
	if (!curpage || curpage <= 0) {
		curpage = 1;
	}
	if (!func) {
		func = param;
		param = [];
	}
	//console.log("db.js 32 line:"+sql+",param: "+param);
//    con.query(sql,function(e,r,f){
//        console.log(r);
//    });

	con.query("select count(*) cnt from (" + sql + ") t", param, function (e, r, f) {
		console.log("db.js 38line: " + r[0]);
		//获取总数量
		var count = r[0].cnt;
		//获取总页码
		var maxpage = Math.ceil(count / eachpage);
		sql += " limit " + ((curpage - 1) * eachpage) + "," + eachpage;
		var inner_con = dbGetCon();
		inner_con.query(sql, param, function (e, r, f) {
			var page = {"curpage": curpage, "maxpage": maxpage, "eachpage": eachpage};
			func(e, r, f, page);
		});
		inner_con.end();
	});
	con.end();
}

exports.dbGetPool = dbGetPool;
exports.queryByPage = queryByPage;