
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

exports.indexv2 = function(req,res){
    res.render('indexv2');
};
/**
 * 测算页面的显示全部数据、分页
 */
exports.divineShowAll = function(req,res){
    var con = db.dbGetCon(),
        curpage = req.query.curpage,
        cardSum = req.query.cardSum || 'all',
        expertIn = req.query.expertIn || 'all',
        sql,
        condition=[];
    if(cardSum == 'all' && expertIn == 'all'){
        sql = "select pxName,pxCardSum,pxExpertIn,pxSummary,pxBanner,pxDefaultPaizu from paixing";
//        condition = [expertIn];
    }else if(cardSum == 'all'){
        sql = "select pxName,pxCardSum,pxExpertIn,pxSummary,pxBanner,pxDefaultPaizu from paixing where pxExpertIn = ?";
        condition = [expertIn];
    }else if(cardSum != 'all' && expertIn == 'all'){
        if(cardSum.indexOf("~") >= 0){
			var aCardSum = cardSum.split("~");
			var sSmallCardSum = aCardSum[0];
			var sBigCardSum = aCardSum[1];

			if(sBigCardSum){
				sql = "select pxName,pxCardSum,pxExpertIn,pxSummary,pxBanner,pxDefaultPaizu from paixing where pxCardSum >= ? and pxCardSum <= ?";
				condition = [sSmallCardSum, sBigCardSum];
			}else{
				sql = "select pxName,pxCardSum,pxExpertIn,pxSummary,pxBanner,pxDefaultPaizu from paixing where pxCardSum >= ?";
				condition = [sSmallCardSum];
			}

		}else{
			sql = "select pxName,pxCardSum,pxExpertIn,pxSummary,pxBanner,pxDefaultPaizu from paixing where pxCardSum = ? ";
			condition = [cardSum];
		}
    }else{
		if(cardSum.indexOf("~") >= 0){
			var aCardSum = cardSum.split("~");
			var sSmallCardSum = aCardSum[0];
			var sBigCardSum = aCardSum[1];

			if(sBigCardSum){
				sql = "select pxName,pxCardSum,pxExpertIn,pxSummary,pxBanner,pxDefaultPaizu from paixing where pxCardSum >= ? and pxCardSum <= ? and pxExpertIn = ?";
				condition = [sSmallCardSum, sBigCardSum, expertIn];
			}else{
				sql = "select pxName,pxCardSum,pxExpertIn,pxSummary,pxBanner,pxDefaultPaizu from paixing where pxCardSum >= ? and pxExpertIn = ?";
				condition = [sSmallCardSum, expertIn];
			}
		}else{
			sql = "select pxName,pxCardSum,pxExpertIn,pxSummary,pxBanner,pxDefaultPaizu from paixing where pxCardSum = ? and pxExpertIn = ?";
			condition = [cardSum,expertIn];
		}
    }

    db.queryByPage(con,curpage,8,sql,condition,function(e,r,f,page){
        if(e){
            console.log("有错误"+e);
        }else{
            page.r = r;
            page.cardSum = cardSum;
            page.expertIn = expertIn;
            console.log("index.js 29LINE: "+JSON.stringify(page));
            res.render("divine",page);
        }
    });
};

//显示测算详页面、
exports.divineDetail = function(req,res,next){
    //console.log("90 line "+req.body.cardsForm+" / "+ req.query.cardsForm+" / "+req.data);
    var cardsForm = req.query.cardsForm,
        defaultPaizu = req.query.defaultPaizu,
		con = db.dbGetCon(),
		sql = "select pxDetail,pxBanner from paixing where pxName = ?";

	//检查数据库是否有合适数据
	con.query(sql,[cardsForm],function(error,rows){
		if(error){
			console.log("LINE 101:"+error);
		}else{
			if(rows.length == 1){
				res.render('divineDetailV2',{
					"cardsForm":cardsForm,
					"defaultPaizu":defaultPaizu,
					"pxDetail":rows[0].pxDetail,
					"pxBanner":rows[0].pxBanner
				});
			}else{
				var err = new Error("您请求的资源不存在");
				err.status = 404;
				next(err);
			}
		}
	});

};

//显示单牌详细全部内容
exports.showCardWhole = function(req,res){

};