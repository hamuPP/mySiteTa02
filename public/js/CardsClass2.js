/**
 * Created by ty on 2016/2/15.
 * @author tangyue 734877275@qq.com
 * 抽牌的相关CANVAS的自定义对象
 */

/**
 *卡牌的父类
 * @param {Number} height 小数，卡牌高度与整张画布高度的比例
 * @param {Number} width 小数，卡牌宽度与整张画布宽度的比例
 * @param {Boolean} open 默认是false，就是未翻开
 * @param {Number} x 小数，卡牌左边距离与整张画布宽度的比例
 * @param {Number} y 小数，卡牌上边距离与整张画布高度的比例
 * @param  canvasWidth 画布宽
 * @param canvasHeight 画布高
 * @param ctx 画笔 需传入JS获得的画笔，而不是jQ的
 * @param src 图片路径
 * @param {String}text 显示在每张图下方的文字 ,建议只放一两个字，以免太长影响视觉效果
 * @author tangyue
 */
function BaseCard (height,width,x,y,canvasWidth,canvasHeight,ctx,src,text,open){
    this.height = height;
    this.width = width;
    this.x = x? x:0;
    this.y = y? y:0;
    this.src = src;
    this.text = text;
    this.open = open?open:false;//卡牌默认未翻开

    /*根据每张牌的宽高 xy坐标将其画出来*/
    this.put = function(){
        var img = new Image();
        img.src = src;
        img.onload = function() {
            ctx.drawImage(img, canvasWidth*x, canvasHeight*y, canvasWidth*width, canvasHeight*height);
            ctx.font = "1.2rem Open Sans,Microsoft YaHei,weiruanyahei,Arial,sans-serif";
            /*描边*/
            ctx.lineWidth = 3;
            ctx.textBaseline = "top";
            ctx.strokeStyle ="#fff";
            ctx.strokeText(text, canvasWidth*(x + width/2.2), canvasHeight*y+canvasHeight*height);
            ctx.fillStyle = "#790d86";
            ctx.fillText(text, canvasWidth*(x + width/2.2), canvasHeight*y+canvasHeight*height);

        };
    };
};
