/**
 * Created by ty on 16/7/12.
 * 模仿一个球物理下落的
 */
var windowWidth = 800;
var windowHeight = 600;
var ballRadius = 5;//小球半径
var friction = 0.8;//摩擦系数，让小球越跳越慢的

var ball = {
	x: 500,
	y: 100,
	r: 20,
	g:4,
	vx: -4,
	vy: 0,/*vy是小球y轴上的速度，如果为负，则会有个上抛的动作*/
	color: "purple"
};

	window.onload = function() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	canvas.width = windowWidth;
	canvas.height = windowHeight;

	setInterval(function() {
		render(ctx);
		update();
	}, 70);
}

function render(context){


	context.clearRect(0, 0, windowWidth, windowHeight);

	context.beginPath();
	context.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI);

	context.fillStyle = ball.color;
	context.fill();
}

function update(){
	ball.x += ball.vx;
	ball.y += ball.vy;
	ball.vy += ball.g;

	//碰撞检测
	//下方
	if(ball.y >= windowHeight - ball.r) {
		ball.y = windowHeight - ball.r;
		ball.vy = -ball.vy*friction;
		console.log(ball.vy);//-46
		if(ball.vy > -25) {
			ball.vy = 0;
			ball.g = 0;
		}
	}else if(ball.y <= ball.r){//上方
		ball.y = ball.r;
		ball.vy = -ball.vy;
	}else if(ball.x <= ball.r){
		ball.x = ball.r;
		ball.vx = -ball.vx;
	}else if(ball.x >= windowWidth - ball.r){
		ball.x = windowWidth - ball.r;
		ball.vx = -ball.vx;
	}
}