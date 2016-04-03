
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var product = require('./routes/product');

//var webRouter = require('./webRouter');

var index = require('./routes/index');
var divineDetail = require('./routes/divineDetail');
var login = require('./routes/login');
var register = require('./routes/register');
var user = require('./routes/user');
var mail = require('./routes/mail');
var app = express();

// all environments
app.set('port', process.env.PORT || 88);
app.set('views', path.join(__dirname, 'views'));// 设置模板相对路径(相对当前目录)
//app.set('view engine', 'jade');//设置模板引擎为jade
app.set('view engine', 'ejs');//设置模板引擎为jade
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());

app.use(express.cookieParser('your secret here create'));    // 使用cookie
app.use(express.session());    // 使用session

app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/users', user.list);
app.get('/users', user.list);

/*common-header,common-footer的各种请求*/
app.get('/index',index.index);
app.get('/divine',index.divineShowAll);
app.get('/login',login.navToLoginPage);
app.get('/register',register.navToRegisterPage);

/*首页的各种请求 start*/
app.get('/', index.index);
app.get('/divineDetail',index.divineDetail);
/*首页的各种请求 end*/

/*测算详页 start*/

app.get('/showPaixing', divineDetail.showPaixing);
/*测算详页 end*/

//发邮件
app.get('/sendMail',mail.sendmail);

app.get('/validateUsername',user.validateUsername);
app.get('/validateEmail',user.validateEmail);
app.post('/reg', user.reg);
app.post('/login',user.login);
app.get('/logout',user.logout);

/*关于产品的查询和显示*/
app.get("/showAllPro",product.showAllPro);
app.get("/showProInfo",product.showProInfo);
app.get("/showDetail",product.showDetail);
app.get("/showProByCate",product.showProByCate);
app.get("/priceLowToHigh",product.priceLowToHigh);
app.get("/priceHighToLow",product.priceHighToLow);

/*搜索框的搜索*/
app.get("/search",product.search);

/*详情界面的添加到购物车*/
app.post("/addToCart",product.addToCart);

app.get("/getSession",user.getSession);
app.get("/cartByUid",product.cartByUid);
app.post("/delCart",product.delCart);
app.get("/showCommend",product.showCommend);
app.post("/updateMyComm",product.updateMyComm);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
