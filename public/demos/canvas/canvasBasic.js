/**
 * Created by ty on 2016/7/11.
 * canvas 基础
 */
window.onload = function() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	//画线条
	ctx.moveTo(50, 50);
	ctx.lineTo(200, 200);
	ctx.lineTo(50, 200);
	ctx.lineTo(50, 50);

	ctx.fillStyle = "rgba(121, 13, 134, .6)";
	ctx.fill();
	//给该多边形描边
	ctx.lineWidth = 6;
	ctx.strokeStyle = "blue";
	ctx.stroke();

	//再画一条线，当有多个图形时候，应该每次前后都用beginPath()和closePath()
	ctx.beginPath();
	ctx.moveTo(150, 50);
	ctx.lineTo(150, 100);

	ctx.lineWidth = 10;
	ctx.strokeStyle = "green";
	ctx.stroke();


	//画圆形-顺时针版
	ctx.beginPath();
	ctx.arc(300, 100, 60, 0, 1.5*Math.PI);
	ctx.strokeStyle = "rgb(24,100,150)";
	ctx.lineWidth = 3;
	ctx.closePath();
	ctx.stroke();

	//画圆形-逆时针版
	ctx.beginPath();
	ctx.arc(430, 100, 60, 0, 0.5*Math.PI, true);
//	ctx.strokeStyle = "rgb(24,100,150)";
//	ctx.lineWidth = 3;
	ctx.stroke();
	ctx.closePath();
};