/**
 * Created by ty on 2016/2/14.
 */

var c = document.getElementById("canvas"),
    ctx = c.getContext("2d"),
    datas = null;

/*抽牌*/
$(function(){
    $("#take").click(take);

});

function take(){
    datas = $("form").serialize();
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
//    $.ajax({
//        url:"/showPaixing",
//        type:"get",
//        data:datas,
//        success:function(data){
//            console.log(data);
//        }
//    });

    /*设置画布的宽高*/
    getCanvasXYWH("canvasWrap","canvas")
    c.setAttribute('width',canvasWidth);
    c.setAttribute('height',canvasHeight);
//    ctx.clearRect(0,0,1000,600);

    var oneCard = new Image(),
        secondCard = new Image();

    oneCard.src = 'http://121.42.187.222/imgs/moon.jpg';
    console.log(oneCard);
//      oneCard.src = "http://images.cnblogs.com/cnblogs_com/html5test/359114/r_test.jpg";
//    secondCard.src = "http://images.cnblogs.com/cnblogs_com/html5test/359114/r_test.jpg";
//    if(oneCard.complete){}
    ctx.drawImage(oneCard,0,0,80,100);
//    ctx.drawImage(secondCard,120,0,50,80);
}