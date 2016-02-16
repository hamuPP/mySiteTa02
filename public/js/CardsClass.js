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
 * @author tangyue
 */
function BaseCard (height,width,open,x,y){
    this.height = height;
    this.width = width;
    this.open = open?open:false;//卡牌默认未翻开
    this.x = x? x:0;
    this.y = y? y:0;
    this.openCard = function(){
        console.log("翻牌的动画。他妈的我还没有写");
    }
};

/**
 * 单张牌
 *
 */
function SingleCard(height,width,open,x,y){
    this.drawCard = function () {
    };
    this.constructor(height,width,open,x,y);
};
SingleCard.prototype = new BaseCard();