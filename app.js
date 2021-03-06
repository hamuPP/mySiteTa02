
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var log4js = require('log4js');

var index = require('./routes/index');
var divineDetail = require('./routes/divineDetail');
var search = require('./routes/search');
var login = require('./routes/login');
var register = require('./routes/register');
var user = require('./routes/user');
var mail = require('./routes/mail');
var my = require('./routes/my');
var editMyFile = require('./routes/editMyFile');
var about = require("./routes/about");
var book = require("./routes/book");
var app = express();

log4js.configure({
	appenders: [
		{
			type: 'file', //文件输出
			filename: 'logs/access.log',
			maxLogSize: 1024*16,
			backups: 3,
			category: ['normal','console']
		},
		{
			type: 'console'
		}
	],
	replaceConsole: true
});
var logger = log4js.getLogger('normal');
logger.setLevel('INFO');
app.use(log4js.connectLogger(logger, {level: log4js.levels.INFO}));

// all environments
app.set('port', process.env.PORT || 8881);
app.set('views', path.join(__dirname, 'views'));// 设置模板相对路径(相对当前目录)
app.set('view engine', 'ejs');//设置模板引擎为jade
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());

app.use(express.cookieParser('your secret here create'));    // 使用cookie
app.use(express.session({maxAge:6*60*60*1000}));    // 使用session

app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('您请求的页面不存在');
	err.status = 404;
	next(err);
});

// error handlers
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: err
	});
});

app.get('/users', user.list);
app.get('/users', user.list);

/*common-header,common-footer的各种请求*/
app.get('/index',index.index);
app.get('/divine',index.divineShowAll);
app.get('/search',search.navToSearchPage);
app.get('/login',login.navToLoginPage);
app.get('/register',register.navToRegisterPage);
app.get('/my',my.myPage);
app.get('/itemDetail', search.itemDetail);

/*首页的各种请求 start*/
app.get('/', index.indexv2);
app.get('/divineDetail',index.divineDetail);
app.get('/indexShowMoreCards', index.indexShowMoreCards);
/*首页的各种请求 end*/

/*测算详页 start*/

app.get('/showPaixing', divineDetail.showPaixing);
//app.post('/saveUserDivineResult', divineDetail.saveUserDivineResult);待删
/*测算详页 end*/

/*显示卡牌详细*/
//app.get('/cardsDetail',index.showCardWhole);

/*注册账户到数据库*/
app.post('/registerAtDb',register.registerAtDb);

/*登录账户*/
app.post('/userLogin',login.userLogin);

//发邮件
app.get('/sendMail',mail.sendmail);

app.get('/validateUserName',register.validateUserName);

app.get('/logout',login.logout);

/*详情界面的添加到购物车*/

app.get("/getSession",login.getSession);

/*编辑个人信息*/
app.get("/editMyFile", editMyFile.navToEditMyFile);
app.post("/updataAvatar", editMyFile.updataAvatar);

app.get("/about", about.about);

/*看书 start*/
app.get("/book", book.openBook);
/*看书 end*/

/*辅助方法，ejs用的*/
/*转换毫秒时间到当地时间*/
app.locals.showYear = function(sDate) {
  var dDate = new Date(parseInt(sDate));

  return dDate.getFullYear() + "年";
};

app.locals.showMonthDate = function(sDate) {
  var dDate = new Date(parseInt(sDate));

  return (dDate.getMonth() < 9 ? "0" : "") + (dDate.getMonth() + 1) + "月" +
      (dDate.getDate() < 10 ? "0" : "") + dDate.getDate() + "日";
};

app.locals.showHoursMinutes = function(sDate) {
  var dDate = new Date(parseInt(sDate));

  return (dDate.getHours() < 10 ? "0" : "") + dDate.getHours() + ":" +
      (dDate.getMinutes() < 10 ? "0" : "") + dDate.getMinutes();
};

/*辅助方法-分隔字符串*/
/**
 * @param sSeptation
 * @param sStr
 * @returns {Array}
 */
app.locals.splitString = function(sSeptation, sStr) {
    return sStr.split(sSeptation)
};


/*新版本*/
app.get('/indexv2',index.indexv2);

app.get('/u1',function(req,res){
	res.sendfile('public/uploadImgDemo.html');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
