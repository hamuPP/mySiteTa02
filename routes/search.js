var db = require("./db");

exports.navToSearchPage = function (req, res) {
    var userInput = "%" + req.query.userinput + "%",
        pool1 = db.dbGetPool(),
        sqlCard = "select id,cardName,cardSummary from cardLocalhost where cardName like?",
        sqlPaixing = "select id,pxName,pxSummary from paixing where pxName like ?",
        page = {};

    /*first:search card*/
	pool1.getConnection(function(err,con){
		con.query(sqlCard, [userInput], function (e, r) {
			if (e) {
				console.log("routes/search.js: 15 Line:" + e);
			} else {
				console.log(r);
				if (r.length > 0) {
					page.cardRows = r;
				} else {
					page.cardRows = [];
				}

				_searchPaixing(sqlPaixing, userInput, page, res);
			}

			con.release();
		});
	});
};

/**
 * 点击搜寻结果列表的具体项目，打开对应的详情页
 * @param req
 * @param res
 */
exports.itemDetail = function(req, res){
    var sItemIdWithCategory = req.query.sItemId;
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
    var _pool = db.dbGetPool();
	_pool.getConnection(function(err,_con){
		_con.query(sqlPaixing, [userInput], function (e, r) {
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

			_con.release();
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
				console.log("routes/search.js 95 line : " + e);
			}else{
				if(r && r.length > 0) {
					r[0].code = 0;
					r[0].sCategoryFlag = sCategoryFlag;
					res.render("itemDetail", r[0]);
					//res.json(r[0]);
				}else{
					res.render("itemDetail",
						{
							code:1
						}
					);
					//res.json({code:1});
				}
			}

			con.release();
		});
	});
};
