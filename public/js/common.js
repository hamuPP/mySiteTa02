/**
 * Created by ty on 2016/2/16.
 */

/**
 * 获得url地址参数,或者是URI样式的参数例如paiZu=majorArcana&cardForm=%E5%9C%A3%E4%B8%89%E8%A7%92
 * @param name
 * @returns {*}
 */
function getUrlParam(name,uri) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = (uri || decodeURIComponent(window.location.search.substr(1))).match(reg);
    if (r != null) return decodeURIComponent(r[2]); return null;
}
/**
 * 获得url格式的字符串的参数
 */
//function getUriFormatStrParam(name){
//    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
//    var r = decodeURIComponent(window.location.search.substr(1)).match(reg);
//    if (r != null) return decodeURIComponent(r[2]); return null;
//}
/**
 * 获得画布的父元素的宽高,然后设置其中画布的宽高
 * @param {String} wrapid 画布父元素
 * @param {Array} canvasid 画布
 */
var clientWidth = document.documentElement.clientWidth,
    wrapW,
    wrapH;
function getCanvasXYWH(wrapid,canvasIdArr){
    var wrap = document.getElementById(wrapid);
        wrapW = wrap.offsetWidth;
        wrapH = wrapW*0.44;/*考虑到画布的宽高是定比例的*/
    wrap.style.height=wrapH+"px";
    for(var i =0;i<canvasIdArr.length;i++){
        var canvas = document.getElementById(canvasIdArr[i]);
        canvas.setAttribute('width',wrapW);
        canvas.setAttribute('height',wrapH);
    }


};

/**
 * 以逗号分割字符串
 * @param string
 * @returns {Array}
 */

function splitByComma(string){
    return string.split(",");
};

/*下次不再提示本消息*/
var msgCloseAlink = document.getElementById("msgClose");
if(msgCloseAlink){
    msgCloseAlink.onclick = function(){
        var parent = msgCloseAlink.parentNode.parentNode,
            h = parent.offsetHeight;
        t = setInterval(function () {
            if(h>0){
                h -= 15;
                parent.style.height = h + "px";
            }
        }, 30);

        addCookie("divineUsageMsgNoNotify","true",24);//24小时内不显示

    };
}

/**
 * 获取指定名称的cookie
 * @param {String} name
 */

function getCookie(name){
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == name) {
            return decodeURIComponent(temp[1]);
        }
    }
}
/**
 * 添加cookie
 * @param {String} objName
 * @param {String} objValue
 * @param {String} objHours
 */
function addCookie(objName, objValue, objHours) {//添加cookie
    var str = objName + "=" + encodeURIComponent(objValue);
    if (objHours > 0) {//为0时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        var ms = objHours * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += ";expires=" + date.toGMTString();
    }
    document.cookie = str;
}
/**
 * 判断浏览器内核
 */
function checkUserAgent(){
    var agent = window.navigator.userAgent,
        nMSIEIndex = agent.indexOf("MSIE"),/*ie10以及以下都有这个*/
        nTridentIndex = agent.indexOf("Trident"),/*ie11为7.0,+8后可得到版本号*/
        nWeixinIndex = agent.indexOf("MicroMessenger");/*微信端*/
    /*ie11的毛玻璃兼容没有写，干脆IE都提示错误信息吧*/
    if(nMSIEIndex > -1 || parseInt(agent.substr(nTridentIndex+8)) < 8 ){
        $("#IENotice").show();
//        var ieVersion = parseInt(agent.substr(nMSIEIndex+5));
//        if(ieVersion < 9 ){
//            $("#IENotice").show();
//        }
    }else{
        $("#IENotice").hide();
    }
    if(nWeixinIndex > -1 ) {
        $("#WeixinNotice").show();
    }else{
        $("#WeixinNotice").hide();
    }
}
checkUserAgent();

function goTop(sEleId, iSpeed){
    var oGoTopLink = document.getElementById(sEleId);
    var iClientHeight = document.documentElement.clientHeight;
    var timer = null;

    window.onscroll = function () {
        //判断是否滚到了第二屏,是则显示"回到顶部"，否则隐藏
        var sScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (sScrollTop >= iClientHeight) {
            oGoTopLink.style.display = "block";
        } else {
            oGoTopLink.style.display = "none";
        }
    };

    oGoTopLink.onclick = function () {
        timer = setInterval(function () {
            var sScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            var iScrollSpeed = Math.floor(-sScrollTop / iSpeed);
            document.body.scrollTop = document.documentElement.scrollTop = sScrollTop + iScrollSpeed;
            document.body.onmousewheel = function(){
                return false;
            };
            if (sScrollTop <= 0) {
                clearInterval(timer);
                document.body.onmousewheel = function(){
                    return true;
                };
            }
        }, 30);
    };
    return undefined;
}
/*加载页面时，主动调用getSession*/

$(document).ready(function(){
    $.ajax({
        type:"get",
        url:("/getSession"),
        success:function(param){
            if(param.u_name){
                var u_name = param.u_name,
                    u_avararImg = param.u_avatar;

                $("#userName").attr("class","show");
                $("#logout").attr("class","show");
                $("#login").attr("class","hide");
                $("#register").attr("class","hide");
                $("#userNameText").html(u_name);

                //若是个人页面，显示名字和头像--放在路由里做，用渲染模板的方式显示
                //if(window.location.pathname == "/my"){
                //    var  avatarImg = $("#avatarImg"),
                //        avatarText = $("#avatarName");
                //
                //    avatarText.html(u_name);
                //
                //    //若用户未设置头像，则使用默认头像图片
                //    if(!u_avararImg || u_avararImg == ""){
                //        u_avararImg = "../../imgs/moon.jpg";
                //    }
                //    avatarImg.attr("src",u_avararImg);
                //}
            }
        }
    });

    //根据浏览器搜索框显示的当前页面的path改变通用头部导航的active状态
    var currentPath = window.location.pathname.substring(1);
    switch (currentPath){
        case "indexv2":
            $("#headerNavIndex").attr("class","active");
            break;
        case "divine":
            $("#headerNavDivine").attr("class","active");
            break;
        case "search":
            $("#headerNavSearch").attr("class","active");
            break;
        case "login":
            $("#login").attr("class","active");
            break;
        case "register":
            $("#register").attr("class","active");
            break;
        default :
            $("#headerNavIndex").attr("class","active");
            break;

    }

    //页面右侧固定工具栏
    goTop("goTop", 12);
});

/*退出登录*/
function logout(){
    $.ajax({
        type:"get",
        url:"/logout",
        success:function(param){
                location.reload();
        },
        error:function(xhr,type,err){
            location.reload();
        }
    });
};

/*通用头部的搜索框*/
var headerSearchFormMobile = $("#headerSearchFormMobile"),
    headerSearchForm = $("#headerSearchForm");

headerSearchFormMobile.submit(function(){
    var searchValue = $("#headerSearchInputMobile").val();
    window.location = "/search?userinput="+searchValue;
    return false;
});

headerSearchForm.submit(function(){
    var searchValue = $("#headerSearchInput").val();
    window.location = "/search?userinput="+searchValue;
    return false;
});