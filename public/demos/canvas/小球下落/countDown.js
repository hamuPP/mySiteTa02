/**
 * Created by ty on 16/7/12.
 * 完整版的有倒计时的和落下小球的
 */
var windowWidth = document.body.clientWidth - 8;//4是border的宽度
var windowHeight = document.body.clientHeight - 8;
var ballRadius = (windowWidth * 4 / 5 / 128) - 1;//小球半径
var friction = 0.75;//摩擦系数，让小球越跳越慢的,数值越大越快
var windowTop = 50;
var left = Math.floor(windowWidth / 10);
//var endTime = new Date(2016,6,13,0,52,30);//截止日期
var endTime = new Date();
endTime.setTime(endTime.getTime() + 5 * 1000);
var currentShowTimeSeconds = 0;
var balls = [];
var colors = ["#270B1B", "#9F30E1", "#BF6163", "#5A05E1", "#E11B49", "#BB7AE1", "#E1CE23"];

window.onload = function() {

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	canvas.width = windowWidth;
	canvas.height = windowHeight;

	currentShowTimeSeconds = getCurrentShowTimeSeconds();

	id = setInterval(function() {
		render(ctx);
		update();
		console.log(222);
	}, 50);
}

function render(context){

	context.clearRect(0, 0, windowWidth, windowHeight);

	var second = Math.floor(currentShowTimeSeconds / 1000 % 60);
	var minute = Math.floor(currentShowTimeSeconds / 1000 / 60 % 60);
	var hour = Math.floor(currentShowTimeSeconds / 1000 / 60 / 60);

	//展示尚未有小球动画的倒计时时间
	renderDigit(left, windowTop, Math.floor(hour/10), context);
	renderDigit(left + 8 * 2 * (ballRadius + 1), windowTop, Math.floor(hour % 10), context);
	renderDigit(left + 8 * 4 * (ballRadius + 1), windowTop, 10, context);
	renderDigit(left + 8 * 6 * (ballRadius + 1), windowTop, Math.floor(minute / 10), context);
	renderDigit(left + 8 * 8 * (ballRadius + 1), windowTop, Math.floor(minute % 10), context);
	renderDigit(left + 8 * 10 * (ballRadius + 1), windowTop, 10, context);
	renderDigit(left + 8 * 12 * (ballRadius + 1), windowTop, Math.floor(second / 10), context);
	renderDigit(left + 8 * 14 * (ballRadius + 1), windowTop, parseInt(second % 10), context);

	//画动画的小球
	for(var i = 0, len = balls.length ; i < len; i++) {
		var oBall = balls[i];
		context.beginPath();
		context.arc(oBall.centerX, oBall.centerY, ballRadius, 0, 2 * Math.PI);
		context.fillStyle = oBall.color;
		context.fill();
	}
}

function updateBalls(){
	var cnt = 0;
	for(var i = 0, len = balls.length; i < len; i++) {
		var oBall = balls[i];

		oBall.centerX += oBall.vx;
		oBall.centerY += oBall.vy;
		oBall.vy += oBall.g;

		//碰撞检测
		//下方
		if(oBall.centerY >= windowHeight - ballRadius) {
			oBall.centerY = windowHeight - ballRadius;
			oBall.vy = -oBall.vy*friction;
		}

		//找到在屏幕内的小球
		if(oBall.centerX + ballRadius > -4 && oBall.centerX - ballRadius < windowWidth + 4) {
			balls[cnt++] = balls[i];
		}
	}

	while(balls.length > Math.min(cnt, 300)) {
		balls.pop();
	}
	if(!balls.length){
		clearInterval(id);
	};
}

function update() {
	var nextShowTimeSeconds = getCurrentShowTimeSeconds();

	var nextSecond = Math.floor(nextShowTimeSeconds / 1000 % 60);
	var nextMinute = Math.floor(nextShowTimeSeconds / 1000 / 60 % 60);
	var nextHour = Math.floor(nextShowTimeSeconds / 1000 / 60 / 60);//注意此处的小时是可以大于24小时的

	var currentSecond = Math.floor(currentShowTimeSeconds / 1000 % 60);
	var currentMinute = Math.floor(currentShowTimeSeconds / 1000 / 60 % 60);
	var currentHour = Math.floor(currentShowTimeSeconds / 1000 / 60 / 60);

	if(nextSecond !== currentSecond){
		console.log(currentShowTimeSeconds +" / "+nextShowTimeSeconds);
		currentShowTimeSeconds = nextShowTimeSeconds;

		//添加将要做成动画的小球的数字
		if(Math.floor(currentHour / 10) !== Math.floor(nextHour / 10)) {
			_addBall(left, windowTop, Math.floor(nextHour / 10));
		}

		if(Math.floor(currentHour % 10) !== Math.floor(nextHour % 10)) {
			_addBall(left + 8 * 2 * (ballRadius + 1), windowTop, Math.floor(nextHour % 10));
		}

		if(Math.floor(currentMinute / 10) !== Math.floor(nextMinute / 10)) {
			_addBall(left + 8 * 6 * (ballRadius + 1), windowTop, Math.floor(nextMinute / 10));
		}

		if(Math.floor(currentMinute % 10) !== Math.floor(nextMinute % 10)) {
			_addBall(left + 8 * 8 * (ballRadius + 1), windowTop, Math.floor(nextMinute % 10));
		}

		if(Math.floor(currentSecond / 10) !== Math.floor(nextSecond / 10)) {
			_addBall(left + 8 * 12 * (ballRadius + 1), windowTop, Math.floor(nextSecond / 10));
		}

		if(Math.floor(currentSecond % 10) !== Math.floor(nextSecond % 10)) {
			_addBall(left + 8 * 14 * (ballRadius + 1), windowTop, Math.floor(nextSecond % 10));
		}
	}

	updateBalls();

	console.log( balls.length);
}

function getCurrentShowTimeSeconds() {
	var distance = endTime.getTime() - new Date().getTime();
	return distance > 0? distance : 0;
}

function renderDigit(x, y, num, context) {
	context.fillStyle = "blue";

	for(var i = 0,outerLen = digit[num].length; i < outerLen; i++) {
		for(var j = 0, innerLen = digit[num][i].length; j < innerLen; j++) {
			if(digit[num][i][j] == 1) {
				context.beginPath();
				context.arc(x + (j*2 + 1) * (ballRadius + 1), y + (i*2 + 1) * (ballRadius + 1), ballRadius, 0, 2 * Math.PI);
				context.closePath();
				context.fill();
			}
		}
	}
}

/**
 * 添加将要动画的小球
 * @param leftDistance
 * @param topDistance
 * @param num
 * @private
 */
function _addBall(leftDistance, topDistance, num) {
	for(var i = 0, len = digit[num].length; i < len; i++) {
		for(var j = 0, innerLen = digit[num][i].length; j < innerLen; j++){
			if(digit[num][i][j] === 1){
				var oBall = {
					centerX: leftDistance + (j * 2 + 1)*(ballRadius + 1),
					centerY: topDistance + (i * 2 + 1)*(ballRadius + 1),
					g: 1.5 + Math.random(),
					vx: (Math.random() > 0.5 ? 1 : -1) * 4,
					vy: Math.floor(-10 * Math.random()),
					color: colors[Math.floor(Math.random() * colors.length)]
				};

				balls.push(oBall);
			}
		}
	}
};