
/*
 * GET home page.
 */
var db = require("./db");
var ejs = require('ejs');
var fs = require('fs');
//var qiniu = require("qiniu");

/*显示编辑个人信息页面*/
exports.navToEditMyFile = function(req, res){
    var user = req.session.user;

    //若未登陆，跳到登陆页面
    if(!user){
        res.render('login');
        return ;
    }
    //若已经登陆，查询用户历史测算记录
    //var userName = user.u_name,
    //    con = db.dbGetCon(),
    //    curpage = req.query.curpage,
    //    sql = "select * from t_userdivinehistory where udhUserName = ? order by udhId desc";
	//
    //db.queryByPage(con,curpage,10,sql,[userName],function(e,r,f,page){
    //    if(e){
    //        console.log("有错误"+e);
    //    }else{
    //        page.user = user;
    //        page.aInfo = r;
    //        res.render('my',page);
    //    }
    //});

	res.render("editMyFile");
};

exports.updataAvatar = function(req, res) {
	var imgdata = req.body.imgDataURL;
	var img = req.body.img;
	console.log(img);
	console.log(imgdata);

	//过滤base64头部
	var index = imgdata.indexOf(",") + 1;
	var imgBase64WithoutHeader = imgdata.substr(index);

	//替换空格
	var imgBase64 = imgBase64WithoutHeader.replace(/\s/g,"+");

	//nodejs解码图片base64并且保存到服务器
	var uid = 17
	var filename = "public/imgs/useravatar/"+uid+".jpg";
	_base64_decode(imgBase64, filename, res);

};

/**
 * nodejs 解码并保存base64
 * @param {String} base64str
 * @param {String} filename
 * @param res
 * @return undefined
 */
function _base64_decode(base64str, filename, res) {
	// create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
	var bitmap = new Buffer(base64str, 'base64');
	// write buffer to file
	fs.writeFile(filename, bitmap, function(err){
		if(err){
			console.log(err);
			res.json({
				code: -1,
				msg: err
			});
		}else{
			res.json({
				code:0
			});
		}
	});
}

//七牛上传--暂时不用了
////需要填写你的 Access Key 和 Secret Key
//	qiniu.conf.ACCESS_KEY = 'FIHVT_vx7m9zkXEfzIu3FtuXnSWzdXszj2Cs8_IZ';
//	qiniu.conf.SECRET_KEY = 'rsDoFZqfQ_ULJau8RbDIZ95EROXqqHlkYAZH';
//
////要上传的空间
//	bucket = 'tarot-public';
//
////上传到七牛后保存的文件名-暂时不填试试
//	key = 'my-nodejs-logo.png';
//
////构建上传策略函数
//	function uptoken(bucket, key) {
//		var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);
//		return putPolicy.token();
//	}
//
////生成上传 Token
//	token = uptoken(bucket, key);
//
////要上传文件的本地路径
//	filePath = './ruby-logo.png';
//
////构造上传函数
//	function uploadFile(uptoken, key, localFile) {
//		var extra = new qiniu.io.PutExtra();
//		qiniu.io.putFile(uptoken, key, localFile, extra, function (err, ret) {
//			if (!err) {
//				// 上传成功， 处理返回值
//				console.log(ret.hash, ret.key, ret.persistentId);
//			} else {
//				// 上传失败， 处理返回代码
//				console.log(err);
//			}
//		});
//	}
//
////调用uploadFile上传
//	uploadFile(token, key, filePath);

