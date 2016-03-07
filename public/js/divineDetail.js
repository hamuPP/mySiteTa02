/**
 * Created by ty on 2016/2/14.
 */

var cAll = document.getElementsByTagName("canvas"),
    c = document.getElementById("canvas"),
    c2 = document.getElementById("canvas2"),
    ctx = c.getContext("2d"),
    ctx2 = c2.getContext("2d"),
    datas = null;

/*抽牌*/
$(function(){
    var pageDatas =
    $("#take").click(function(){
        take();
    });
    $("#takeDefault").click(function(){
        take("default");
    });
});

function take(def){
    if(!def){
        datas = $("form").serialize();
    }else{
        datas = $("#takeDefault").data("extras");
//        console.log(extrasData);
//        datas="paiZu=majorArcana&paiXing=form-oneCard";
    }
    //console.log("divineDetail.js 28 Line: datas: "+datas);
    initTakingCards(datas);

}
//初始化抽卡界面
function initTakingCards(datas){
    showCarsForm(datas);//初始化后就可以执行具体的抽卡行为了
}

function startTakingCars(){
}

/**
 * 根据所选的牌形和牌组，显示结果
 * @param {JSON} datas 里面放paiZu和paiXing
 */
function showCarsForm(datas){
    $.ajax({
        url:"/showPaixing",
        type:"get",
        data:datas,
        success:function(res){
//            console.log("54 line: "+JSON.stringify(res));
            console.log("55 line: "+(res.cardInfo));
            /*设置画布的宽高*/
            getCanvasXYWH("canvasWrap","canvas");
            document.getElementById("canvasWrap").style.height=canvasHeight+"px";
            c.setAttribute('width',canvasWidth);
            c.setAttribute('height',canvasHeight);
            c2.setAttribute('width',canvasWidth);
            c2.setAttribute('height',canvasHeight);
            var h = res.pxEachCardH,
                w = res.pxEachCardW,
                x = res.pxEachCardX.split(","),
                y = res.pxEachCardY.split(",");
            /*显示的牌形的摆放位置*/
            for(var i =0;i< res.pxCardSum;i++){
                var singleCard = new BaseCard(h,w,x[i],y[i],canvasWidth,canvasHeight,ctx,"../imgs/card-back-side.jpg"),
                    singleCard2 = new BaseCard(h,w,x[i],y[i],canvasWidth,canvasHeight,ctx2,res.cardInfo[i].cardSrc);
                singleCard.put();
                singleCard2.put();
            }
            c2.style.transition = "all .1s ease-in-out 0s";
            c2.style.transform = "scale(-1,1)";
            var openCardBtn = document.getElementById("openCardBtn");

            openCardBtn.style.display="block";
            openCardBtn.addEventListener("click",function(){
                c.style.transform = "scale(-1,1)";
                c.style.opacity = "0";
                c2.style.transition = "all .3s ease-in-out 0s";
                c2.style.transform = "scale(1,1)";
                c2.style.opacity = "1";
            },false);
        },
        error:function(e){
            console.log("error");
        }
    });

}