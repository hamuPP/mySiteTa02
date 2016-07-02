/**
 * Created by ty on 16/7/1.
 */
var qiniu = require('qiniu');

var USER_AGENT = 'qiniu nodejs-sdk v6.1.11';// 请求的 User-Agent 值，比如 'qiniu nodejs-sdk v7.0.0'

var UP_HOST = 'http://up.qiniu.com';
var RS_HOST = 'http://rs.qiniu.com';
var RSF_HOST = 'http://rsf.qiniu.com';

var ACCESS_KEY = 'FIHVT_vx7m9zkXEfzIu3FtuXnSWzdXszj2Cs8_IZ';
var SECRET_KEY = 'X1F-rsDoFZqfQ_ULJau8RbDIZ95EROXqqHlkYAZH';

conf = {
	'accessKey': accessKey,
	'secretKey': secretKey
};
exports.SetConf(conf);
