/**
 * Created by ty on 2016/2/1.
 */
;$(function(){

    $("#IENotice a").click(function(e){
        e = e || window.event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }
        $("#IENotice").hide();

    });
    //取消鼠标右键菜单
    //document.oncontextmenu=function(){
    //    return false;
    //};
});


