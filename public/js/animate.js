/**
 * Created by ty on 2016/3/8.
 */

Animation = {
    timer: 10,
    SetOpacity: function(obj, n) {
        if (document.all) {
            obj.filters.alpha.opacity = n;
        }
        else {
            obj.style.opacity = n / 100;
        }
    },
    fade: function(obj, target, count, Func) {
        obj = this.getItself(obj);
        var currentCount = 0;
        count = Math.abs(count) || 1;
        target = target < 0 ? 0 : (target > 100) ? 100 : target;
        var init = document.all ? obj.filters.alpha.opacity : window.getComputedStyle(obj, null).opacity * 100;
        Func = Func || Tween.Linear;
        var opr = this;
        var flag = setInterval(function() {
                if (currentCount > count) {
                    clearInterval(flag);
                }
                else {
                    currentCount++;
                    var tmp = Func(init, target, currentCount, count);
                    opr.SetOpacity(obj, tmp);
                    //清除小数点的误差
                    if (Math.abs(tmp - target) < 1) {
                        opr.SetOpacity(obj, target);
                    }
                }
            }
            , this.timer);
    },
    resize: function(obj, targetPos, count, Func) {
        obj = this.getItself(obj);
        var currentCount = 0;
        count = Math.abs(count) || 1;
        var initPos = { x: obj.offsetWidth, y: obj.offsetHeight }
        Func = Func || Tween.Linear;
        targetPos = { x: targetPos.x < 0 ? 0 : targetPos.x, y: targetPos.y < 0 ? 0 : targetPos.y }
        var flag = setInterval(function() {
                if (currentCount > count) {
                    clearInterval(flag);
                }
                else {
                    currentCount++;
                    var tmpX = Func(initPos.x, targetPos.x, currentCount, count);
                    var tmpY = Func(initPos.y, targetPos.y, currentCount, count);
                    //width值不能小于0，但是算法返回值有可能出现负值
                    try {
                        obj.style.width = tmpX + "px";
                        obj.style.height = tmpY + "px";
                    }
                    catch (e) {
                    }
                    //清除小数点的误差
                    if (Math.abs(tmpX - targetPos.x) < 1) {
                        obj.style.width = targetPos.x + "px";
                    }
                    if (Math.abs(tmpY - targetPos.y) < 1) {
                        obj.style.height = targetPos.y + "px";
                    }
                }
            }
            , this.timer);
    },
    /*　move方法的调用：
    * Animation.move('divObj',{x:500,y:500},100,Tween.Quart.easeInOut);
    * 第一个参数是移动的对象，
    * 第二个参数是移动的目标坐标，第三个参数是一共执行多少次移位，即移动时间内一共的帧数，即执行多少次，
    * 第4个参数是可选参数，指定Tween具体算法，若不加，则默认采用Tween.Linear。
    */
    move: function(obj, targetPos, count, Func) {
        obj = this.getItself(obj);
        var currentCount = 0;
        count = Math.abs(count) || 1;
        var elPos = this.getElementPos(obj);
        var initPos = { x: elPos.x, y: elPos.y }
        Func = Func || Tween.Linear;
        var flag = setInterval(function() {
                if (currentCount > count) {
                    clearInterval(flag);
                }
                else {
                    currentCount++;
                    var tmpX = Func(initPos.x, targetPos.x, currentCount, count);
                    var tmpY = Func(initPos.y, targetPos.y, currentCount, count);
                    obj.style.left = tmpX + "px";
                    obj.style.top = tmpY + "px";
                    //清除小数点的误差
                    if (Math.abs(tmpX - targetPos.x) < 1) {
                        obj.style.left = targetPos.x + "px";
                    }
                    if (Math.abs(tmpY - targetPos.y) < 1) {
                        obj.style.top = targetPos.y + "px";
                    }
                }
            }
            , this.timer);
    },
    getElementPos: function(el) {
        el = this.getItself(el);
        var _x = 0, _y = 0;
        do {
            _x += el.offsetLeft;
            _y += el.offsetTop;
        } while (el = el.offsetParent);
        return { x: _x, y: _y };
    },
    getItself: function(id) {
        return "string" == typeof id ? document.getElementById(id) : id;
    }
}