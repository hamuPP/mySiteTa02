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

function getCanvasWH(id){
    var canvasWidth = Math.floor(clientWidth*200/720);
}