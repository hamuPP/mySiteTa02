/**
 * Created by ty on 2016/2/15.
 * @author tangyue 734877275@qq.com。 欢迎交流指导
 * 抽牌的相关CANVAS的自定义对象
 */

//var bgCtx = document.getElementById("bg").getContext("2d");

/**
 *卡牌的父类
 * @param {Number} height 卡牌高度
 * @param {Number} width 卡牌宽度
 * @param {Boolean} open 默认是false，就是未翻开
 * @param {Number} x 卡牌左边距离
 * @param {Number} y 卡牌上边距离
 * @param ctx 画笔 默认是JS获得的画笔，而不是jQ的
 * @author tangyue
 */
function BaseCard (height,width,x,y,canvasWidth,canvasHeight,ctx,open){
    this.height = height;
    this.width = width;
    this.x = x? x:0;
    this.y = y? y:0;
    this.open = open?open:false;//卡牌默认未翻开
    /*根据每张牌的宽高 xy坐标将其画出来*/
    this.put=function(){
        //console.log("cardClass.js 26 Line:"+this.height+"/"+this.width+"/"+this.x+"/"+this.y+"/"+this.open);
        var img = new Image();
        img.src="../imgs/card-back-side.jpg";
//        img.onload = function() {
            console.log("x:"+canvasWidth*this.x+",y:"+this.y+"/"+canvasHeight*this.y+" , w:"+canvasWidth * this.width+" ,h: "+canvasHeight * this.height);
            ctx.drawImage(img, canvasWidth*this.x, canvasWidth*this.y, canvasWidth * this.width, canvasHeight * this.height);
//        }
    };
    this.openCard = function(){
        console.log("翻牌的动画。他妈的我还没有写");
    }
};

/**
 * 单张牌
 * 不需要了（暂时，可能）
 */
function SingleCard(height,width,open,x,y){
    this.drawCard = function () {
    };
    this.constructor(height,width,open,x,y);
};
SingleCard.prototype = new BaseCard();