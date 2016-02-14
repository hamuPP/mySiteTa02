/**
 * Created by ty on 2016/2/14.
 */
/*抽牌*/
;$(function(){
//    $("#moreOpts").addEventListener("click",function(){
//        console.log(123);
//    },false);
    $("#take").click(divine);

});

function divine(){
    var datas = $("form").serialize();
    if(datas ==""){
        console.log(12);
    }else{
        console.log(45);
    }
}
