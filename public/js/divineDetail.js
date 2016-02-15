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
   // $.ajax();//待日后补充。先画一个图形试试

    /*设置画布的宽高。先定死，日后再改*/
    c.setAttribute('width',1000);
    c.setAttribute('height',600);
//    ctx.clearRect(0,0,1000,600);

    var oneCard = new Image();
    oneCard.src = 'images/moon.jpg';
//      oneCard.src = "http://images.cnblogs.com/cnblogs_com/html5test/359114/r_test.jpg";
//    if(oneCard.complete){}
    console.log(oneCard);
    ctx.drawImage(oneCard,0,0);
}