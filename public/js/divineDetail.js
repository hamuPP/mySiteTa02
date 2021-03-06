/**
 * Created by ty on 2016/2/14.
 */

var c = document.getElementById("canvas"),
    c2 = document.getElementById("canvas2"),
    ctx = c.getContext("2d"),
    ctx2 = c2.getContext("2d"),
    datas = null,
    clickedDefaultBtn = false,
    openCardBtn = document.getElementById("openCardBtn");

/*抽牌*/
$(function(){

    $(document).ajaxSend(function(e,xhr,opts){
        if(opts.url.substring(0,12) == "/showPaixing"){
            $("#loading").css("display","block");
        }
    });
    $(document).ajaxComplete(function(e,xhr,opts){
        if(opts.url.substring(0,12) == "/showPaixing"){
            $("#loading").css("display","none");
        }
    });

    /*设置画布的宽高*/
    getCanvasXYWH("canvasWrap",["canvas","canvas2"]);
    //点击“抽牌”按钮，
    $("#take").click(function(){
        if(!clickedDefaultBtn){
            //未点击“默认”
            take();
        }else{
            //点击了“默认”，告诉用户先翻开此次结果看看
            var errorMsgBlock = document.getElementById("errorMsgBlock"),
                errorMsgText = document.getElementById("errorMsg");

            errorMsgBlock.className = "col-xs-12 show";
            errorMsgText.innerHTML = "你已经抽了一次默认的卡牌，先“翻开”看看吧！";
        }

    });
    $("#takeDefault").click(function(){
        take("default");
        clickedDefaultBtn = true;
    });
});

function take(def){
    if(!def){
        datas = $("form").serialize();
    }else{
        datas = $("#takeDefault").data("extras");
        //修改前面下拉框中的选中内容
        var sDefaultPaiZu = datas.substr(datas.lastIndexOf('=')+1),
            aOpts = $("#paiZu option"),
            aOptsVal = [];

        aOpts.each(function(i,v){
            aOptsVal.push(v.value);
        });

        for(var i = 0, len = aOptsVal.length; i < len; i++){
            if(aOptsVal[i] == sDefaultPaiZu){
                aOpts[i].selected = "selected";
                break;
            }
        }
    }
    initTakingCards(datas);
};

function showCarsFormAndAddIntoDbs(datas){
    var userName = null;
    $.ajax({
        type:"get",
        url:("/getSession"),
        success:function(param){
            //already logged in
            if(param.u_name){
                userName = param.u_name;
                showCarsForm(datas+"&userName="+userName);
            }else{
                showCarsForm(datas);
            }
        }
    });
};

//初始化抽卡界面
function initTakingCards(datas){
    resetCanvas(c,c2,ctx,ctx2);
    showCarsFormAndAddIntoDbs(datas);//初始化后就可以执行具体的抽卡行为了,并且把抽卡的信息存入数据库
}

/**
 * 根据所选的牌形和牌组，显示结果
 * @param {JSON} datas 里面放paiZu和paiXing和用户名
 */
function showCarsForm(datas){
    $.ajax({
        url:"/showPaixing",
        type:"get",
        data:datas,
        success:function(res){
            if(res.code == -1 ){
                var errorMsgBlock = document.getElementById("errorMsgBlock"),
                    errorMsgText = document.getElementById("errorMsg");

                errorMsgBlock.className = "col-xs-12 show";
                errorMsgText.innerHTML = res.msg;
                return ;
            }

            var h = Number(res.pxEachCardH),
                w = Number(res.pxEachCardW),
                x = res.pxEachCardX.split(","),
                y = res.pxEachCardY.split(",");
            /*显示的牌形的摆放位置*/
            for(var i = 0, len = res.pxCardSum; i< len; i++){
                //var textEach = text ? text[i] : "暂未收录";
                var singleCard = new BaseCard(h, w, Number(x[i]), Number(y[i]), wrapW,wrapH,ctx,"../imgs/card-back-side.jpg",(i+1)),
                    singleCard2 = null;

                //如果是逆位,则修改cardSrc为逆位的src
                if(res.cardInfo[i].isRightPos){
                    singleCard2 = new BaseCard(h,w, Number(x[i]), Number(y[i]),wrapW,wrapH,ctx2,res.cardInfo[i].cardSrc,(i+1));
                }else{
                    singleCard2 = new BaseCard(h,w, Number(x[i]), Number(y[i]),wrapW,wrapH,ctx2,res.cardInfo[i].cardSrcReverse,(i+1));
                }

                singleCard.put();
                singleCard2.put();
            }
            c2.style.transition = "all 500ms ease-in-out 0s";
            c2.style.transform = "scale(-1,1)";

            openCardBtn.style.display="block";
            openCardBtn.addEventListener("click",function(){
                clickedDefaultBtn = false;
                c.style.transform = "scale(-1,1)";
                c.style.opacity = "0";
                c2.style.transition = "all 500ms ease-in-out 0s";
                c2.style.transform = "scale(1,1)";
                c2.style.opacity = "1";

                //隐藏错误提示
                document.getElementById("errorMsgBlock").className = "hide";

                showResultTable(datas,res);
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
    var resultInnerBox = document.getElementById("resultInnerBox"),
        selectedPaiZu=document.getElementById("selectedPaiZu"),
        selectedCardForm=document.getElementById("selectedCardForm"),
        tbody = document.getElementById("tbody"),
        str = "",
        pxPositionMeaningArr = res.pxPositionMeaning ? res.pxPositionMeaning.split(/#/) : null,
        cardInfo = res.cardInfo;

    selectedPaiZu.innerHTML = getUrlParam("paiZu",data);
    selectedCardForm.innerHTML = getUrlParam("cardForm",data);

    for(var i = 0, pxCardSum = res.pxCardSum; i < pxCardSum; i++){
        var cardName = cardInfo[i].isRightPos ? cardInfo[i].cardName :cardInfo[i].cardName +"(逆位)",
            cardSummary = cardInfo[i].isRightPos ? cardInfo[i].cardSummary :cardInfo[i].cardReversePos,
            pxEachPositionMeaning = pxPositionMeaningArr ? pxPositionMeaningArr[i] : "未收录相关信息";

        str +=  "<div class='col-xs-12 col-sm-6 text-center'>"+(i+1)+"."+pxEachPositionMeaning+"</div>"+
                "<div class='col-xs-12 col-sm-6 text-center'>"+cardName+"</div>"+
                "<div class='col-xs-12'>"+cardSummary+"</div>";
    }
    tbody.innerHTML = str;
	document.getElementById("resultExplain").style.display="block";

}


