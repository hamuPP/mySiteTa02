
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
	res.render("editMyFile");
};

exports.updataAvatar = function(req, res) {
	var imgdata = req.body.imgDataURL;
	var user = req.session.user;
	var uid = user.uid;

	//若未登陆，跳到登陆页面
	if(!user){
		res.render('login');
		return ;
	}
	//过滤base64头部
	var index = imgdata.indexOf(",") + 1;
	var imgBase64WithoutHeader = imgdata.substr(index);

	//替换空格
	var imgBase64 = imgBase64WithoutHeader.replace(/\s/g,"+");

	//nodejs解码图片base64并且保存到服务器
	var filename = "imgs/useravatar/"+uid+".jpg";
	_base64_decode(imgBase64, filename, uid, req, res);
};

/**
 * 解码并保存base64图片到本机
 * @param {String} base64str
 * @param {String} filename
 * @param res
 * @return undefined
 */
function _base64_decode(base64str, filename, uid, req, res) {
	// create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
	var bitmap = new Buffer(base64str, 'base64');
	// write buffer to file
	fs.writeFile("public/"+filename, bitmap, function(err){
		if(err){
			console.log(err);
			res.json({
				code: -1,
				msg: err
			});
		}else{
			//更新user数据表
			_updateUserTable(uid, filename, req, res);
		}
	});
}

/**
 * 更新user数据表，将头像字段更新进去
 * @param userId
 * @param avatarFileName
 * @param res
 * @private
 */
function _updateUserTable(userId, avatarFileName, req, res){
	var con = db.dbGetCon(),
		sql = "update t_user set u_avatar = ? where uid = ?",
		result;

	con.query(sql, [avatarFileName, userId], function(err, rows){
		if(err){
			result = err;
			res.json({
				code:-1,
				msg:err
			});
		}else{
			console.log(rows);
			//更新session
			req.session.user.u_avatar = avatarFileName;
			res.json({
				code:0
			});
		}
	});
	con.end();
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

