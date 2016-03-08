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
    /*设置画布的宽高*/
    getCanvasXYWH("canvasWrap",["canvas","canvas2"]);
    $("#take").click(function(){
        take();
    });
    $("#takeDefault").click(function(){
        take("default");
    });
});

function take(def){
    console.log("25 Line");
    if(!def){
        datas = $("form").serialize();
    }else{
        datas = $("#takeDefault").data("extras");
        console.log(datas);
    }
    initTakingCards(datas);

}
//初始化抽卡界面
function initTakingCards(datas){
   // console.log("37 line");
    //resetCanvas(c,c2,ctx,ctx2);
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
            console.log("54 line: "+JSON.stringify(res));
            var h = res.pxEachCardH,
                w = res.pxEachCardW,
                x = res.pxEachCardX.split(","),
                y = res.pxEachCardY.split(",");
            /*显示的牌形的摆放位置*/
            for(var i =0;i< res.pxCardSum;i++){
                var singleCard = new BaseCard(h,w,x[i],y[i],wrapW,wrapH,ctx,"../imgs/card-back-side.jpg"),
                    singleCard2 = new BaseCard(h,w,x[i],y[i],wrapW,wrapH,ctx2,res.cardInfo[i].cardSrc);
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
               // showResultTable(datas,res);
            },false);


        },
        error:function(e){
            console.log("error");
        }
    });

}

/*清除画布内容以及清除元素style*/
function resetCanvas(canvas1,canvas2,ctx1,ctx2){
    canvas1.removeAttribute("style");
    canvas2.removeAttribute("style");
    ctx1.clearRect(0,0,wrapW,wrapH);
    ctx2.clearRect(0,0,wrapW,wrapH);
};

/*显示与隐藏“不再提醒文字”*/
var noNotifyWrap = document.getElementById("noNotifyWrap");
if(getCookie("divineUsageMsgNoNotify")){
    noNotifyWrap.style.display="none";
}else{
    noNotifyWrap.style.display="block";
};

/**
 * 测算结果的table显示
 * @param {String} data data是form表单的值，用于显示table的标题一行
 * @param {JSON} res 是ajax返回信息，用于填充表格内容
 */
function showResultTable(data,res){
    console.log(data);
    var table = document.getElementById("resultExplainTable"),
        selectedPaiZu=document.getElementById("selectedPaiZu"),
        selectedCardForm=document.getElementById("selectedCardForm"),
        tbody = document.getElementById("tbody"),
        str = "",
        pxPositionMeaningArr = res.pxPositionMeaning.split(",");

    selectedPaiZu.innerHTML = getUrlParam("paiZu",data);
    selectedCardForm.innerHTML = getUrlParam("cardForm",data);

    for(var i=0;i<res.pxCardSum;i++){
        str += "<tr>"+
                "<td>第"+(i+1)+"张牌:</td>"+
                "<td>"+pxPositionMeaningArr[i]+"</td>"+
                "<td>"+res.cardInfo[i].cardName+"</td>"+
            "<tr>";
    }
    tbody.innerHTML = str;
//cardForm Paizu
    table.style.display="block";

}