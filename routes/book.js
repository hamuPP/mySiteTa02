/*
 * 看书
 */
var db = require("./db");
var fs = require("fs");


exports.openBook = function (req, res) {
    console.log(req.query.id);//书的名字
	var result = fs.createReadStream('public/book/qishiniyijinghentaluo_PaulFentonSmith.txt', {start: 0, end: 300});

	result.on('data', function(chunk) {
		console.log(chunk);
		console.log(chunk.toString());
	});
	//console.log(result);
	res.render("book");
};

/**
 * 点击搜寻结果列表的具体项目，打开对应的详情页
 * @param req
 * @param res
 */
exports.itemDetail = function(req, res){
    var sItemIdWithCategory = req.query.sItemId;
    console.log(sItemIdWithCategory);
    var sCategoryFlag = sItemIdWithCategory.split("-")[0];
    var nItemId = Number(sItemIdWithCategory.split("-")[1]);
    var sql = "";


    switch (sCategoryFlag) {
        case "px":
            sql = "select id,pxName,pxExpertIn,pxSummary,pxDetail,pxBanner,pxPositionMeaning from paixing where id = ?";
            break;
        case "card":
            sql = "select * from cardlocalhost where id = ?";
            break;
        default :
            res.render("itemDetail",
                {
                   code:1
                }
            );
    };

    _searchItemDetail(sql, nItemId, sCategoryFlag, res);
};

function _searchPaixing(sqlPaixing, userInput, page, res) {
    var innerPool = db.dbGetPool();


	innerPool.getConnection(function(err,innerCon){
		innerCon.query(sqlPaixing, [userInput], function (e, r) {
			if (e) {
				console.log("routes/search.js: 37 Line:" + e);
			} else {
				if (r.length > 0) {
					page.paixingRows = r;
				} else {
					page.paixingRows = [];
				}
				res.render('search', page);
				console.log(page);
			}

			innerCon.release();
		});
	});

};

/**
 * 根据id查询对应的条目的详情，并打开新页面展示详情
 * @param sSql
 * @param aCondition
 * @private
 */
function _searchItemDetail(sSql, aCondition, sCategoryFlag, res){
    var pool = db.dbGetPool();

	pool.getConnection(function(err,con){
		con.query(sSql, aCondition, function(e,r){
			if(e){
				console.log("routes/search.js 81 line : " + e);
			}else{
				if(r && r.length > 0) {
					r[0].code = 0;
					r[0].sCategoryFlag = sCategoryFlag;
					res.render("itemDetail", r[0]);
				}else{
					res.render("itemDetail",
						{
							code:1
						}
					);
				}
			}

			con.release();
		});
	});

};
