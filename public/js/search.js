$(document).ready(function(){
    /*点击搜索页面的每条记录，打开详细页面*/
    /**
    var searchItemList = $("#searchItemList");
    searchItemList.on("click",function(ev){
        var e = ev || window.event;
        var sItemId = e.target.dataset.id;
        console.log(sItemId);
        $.ajax({
            type:"get",
            url:"/openItemDetail?sItemId=" + sItemId,
            success:function(param){
                //location.reload();
                console.log(param);
            },
            error:function(xhr,type,err){
                //location.reload();
            }
        });
    });
    **/
});