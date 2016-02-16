/**
 * Created by ty on 2016/2/16.
 */

/**
 * 获得url地址参数
 * @param name
 * @returns {*}
 */
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = decodeURIComponent(window.location.search.substr(1)).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
/**
 *
 * @param {String} wrapid 画布父元素
 * @param {String} canvasid 画布
 */
var clientWidth = document.documentElement.clientWidth,
    canvasWidth,
    canvasHeight;
function getCanvasXYWH(wrapid,canvasid){
    var wrapW = document.getElementById(wrapid).offsetWidth,
        wrapH = document.getElementById(wrapid).offsetHeight;
        canvasWidth = wrapW;
        canvasHeight = wrapH;
};

/**
 * 以逗号分割字符串
 * @param string
 * @returns {Array}
 */

function splitByComma(string){
    return string.split(",");
};