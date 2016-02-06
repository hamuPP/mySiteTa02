/**
 * Created by ty on 2016/2/1.
 */
;$(function(){
    /**
    * 判断浏览器内核
    */

    checkUserAgent();
    $("#IENotice a").click(function(e){
        e = e || window.event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }
        $("#IENotice").hide();

    });
    //取消选择
//    document.oncontextmenu=function(){
//        return false;
//    };
});

function checkUserAgent(){
    var agent = window.navigator.userAgent;
    if(agent.indexOf("MSIE") > -1){
        var ieVersion = agent.substr(agent.indexOf("MSIE")+5,1);
        if(ieVersion < 9 ){
            $("#IENotice").show();
        }
    }

}
