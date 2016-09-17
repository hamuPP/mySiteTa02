/**
 * Created by ty on 2016/2/14.
 * 使用CSS3 transform来做旋转翻转
 */

var animationWraper = document.getElementById("openCardsAnimation"), /*动画的外包裹元素*/
	animationMainContent = document.getElementById("animationMainContent"),
	datas = null,
	clickedDefaultBtn = false,
	openCardBtn = document.getElementById("openCardBtn"),
	imgWrapBox = null,
	imageFront = null,
	imageBack = null,
	animationWraperWidth = 0,
	animationWraperHeight = 0,
	x = 0,
	y = 0,
	width,
	height,
	cardlabel,
	imgOuterWrap;


/*抽牌*/
$(function () {

	$(document).ajaxSend(function (e, xhr, opts) {
		if (opts.url.substring(0, 12) == "/showPaixing") {
			$("#loading").css("display", "block");
		}
	});
	$(document).ajaxComplete(function (e, xhr, opts) {
		if (opts.url.substring(0, 12) == "/showPaixing") {
			$("#loading").css("display", "none");
		}
	});

	/*设置动画包裹元素的宽高 高度始终为宽度的0.8*/
	setAnimaWraperBoxSize(animationWraper, animationMainContent);
	window.onresize = function () {
		setAnimaWraperBoxSize(animationWraper, animationMainContent);

		animationWraperWidth = animationMainContent.offsetWidth;

		var aImgWraperBox = $(".img-wrap-box");
		var len = aImgWraperBox.length;
		if (len != 0) {
			for (var i = 0; i < len; i++) {
				$(aImgWraperBox[i]).height(animationWraperWidth * height);
			}
		}
	};

	//点击“抽牌”按钮，
	$("#take").click(function () {
		if (!clickedDefaultBtn) {
			//未点击“默认”
			take();
		} else {
			//点击了“默认”，告诉用户先翻开此次结果看看
			var errorMsgBlock = document.getElementById("errorMsgBlock"),
				errorMsgText = document.getElementById("errorMsg");

			errorMsgBlock.className = "col-xs-12 show";
			errorMsgText.innerHTML = "你已经抽了一次默认的卡牌，先“翻开”看看吧！";
		}

	});
	$("#takeDefault").click(function () {
		take("default");
		clickedDefaultBtn = true;
	});
});

/**
 * 得到用户选择的抽牌的条件
 * @param {Boolean} def 是否为默认抽牌
 */
function take(def) {
	if (!def) {
		datas = $("form").serialize();
	} else {
		datas = $("#takeDefault").data("extras");
		//修改前面下拉框中的选中内容
		var sDefaultPaiZu = datas.substr(datas.lastIndexOf('=') + 1),
			aOpts = $("#paiZu option"),
			aOptsVal = [];

		aOpts.each(function (i, v) {
			aOptsVal.push(v.value);
		});

		for (var i = 0, len = aOptsVal.length; i < len; i++) {
			if (aOptsVal[i] == sDefaultPaiZu) {
				aOpts[i].selected = "selected";
				break;
			}
		}
	}
	//根据用户选择，执行具体抽卡行为
	initTakingCards(datas);
};

/**
 * 检测是否登录
 * @param datas
 */
function showCarsFormAndAddIntoDbs(datas) {
	var userName = null;
	$.ajax({
		type: "get",
		url: ("/getSession"),
		success: function (param) {
			//already logged in
			if (param.u_name) {
				userName = param.u_name;
				showCarsForm(datas + "&userName=" + userName);
			} else {
				showCarsForm(datas);
			}
		},
		error: function (e) {
			alert("网络错误，请稍后再试" + e);
		}
	});
};

//初始化抽卡界面
function initTakingCards(datas) {
	animationMainContent.innerHTML = "";
	showCarsFormAndAddIntoDbs(datas);//初始化后就可以执行具体的抽卡行为了,并且把抽卡的信息存入数据库
}

/**
 * 根据所选的牌形和牌组，显示结果
 * @param {JSON} datas 里面放paiZu和paiXing和用户名
 */
function showCarsForm(datas) {
	$.ajax({
		url: "/showPaixing",
		type: "get",
		data: datas,
		success: function (res) {
			if (res.code == -1) {
				var errorMsgBlock = document.getElementById("errorMsgBlock"),
					errorMsgText = document.getElementById("errorMsg");

				errorMsgBlock.className = "col-xs-12 show";
				errorMsgText.innerHTML = res.msg;
				return;
			}

			//令‘翻开’按钮可点击
			openCardBtn.setAttribute("class", "btn btn-main-pur open-cards-btn");

			var nW = Number(res.pxEachCardW),
				aX = res.pxEachCardX.split(","),
				aY = res.pxEachCardY.split(","),
				aRotate = res.pxEachCardRotate.split(",");
			/*显示的牌形的摆放位置*/
			for (var i = 0, len = res.pxCardSum; i < len; i++) {
				//var textEach = text ? text[i] : "暂未收录";
				console.log(i);
				var opts = {
					width: nW,
					x: Number(aX[i]),
					y: Number(aY[i]),
					srcFront: "../imgs/card-back-side.jpg",
					srcBack: res.cardInfo[i].cardSrc,
					isRightPos: res.cardInfo[i].isRightPos,
					rotate: aRotate[i],
					text: i + 1,
					animationMainContent: animationMainContent
				};

				createCard(opts);
			}

			openCardBtn.style.display = "block";
			openCardBtn.addEventListener("click", function () {
				var fronCards = document.getElementsByClassName("scale-image-front");
				var backCards = document.getElementsByClassName("scale-image-back");
				var btnOldClass = openCardBtn.getAttribute("class");

				clickedDefaultBtn = false;

				openCardBtn.setAttribute("class", btnOldClass + " disabled");

				for (var i = 0, blen = backCards.length; i < blen; i++) {
					backCards[i].style.transform = "scale(1,1)";
				}

				for (var j = 0, flen = fronCards.length; j < flen; j++) {
					fronCards[j].style.transform = "scale(0,1)";
				}

				//隐藏错误提示
				document.getElementById("errorMsgBlock").className = "hide";

				showResultTable(datas, res);
			}, false);
		},
		error: function (e) {
			alert("网络错误，请稍后再试" + e);
		}
	});
}


/*显示与隐藏“不再提醒文字”*/
var noNotifyWrap = document.getElementById("noNotifyWrap");
if (getCookie("divineUsageMsgNoNotify")) {
	noNotifyWrap.style.display = "none";
} else {
	noNotifyWrap.style.display = "block";
}
;

/**
 * 测算结果的table显示
 * @param {String} data data是form表单的值，用于显示table的标题一行
 * @param {JSON} res 是ajax返回信息，用于填充表格内容
 */
function showResultTable(data, res) {
	var resultInnerBox = document.getElementById("resultInnerBox"),
		selectedPaiZu = document.getElementById("selectedPaiZu"),
		selectedCardForm = document.getElementById("selectedCardForm"),
		tbody = document.getElementById("tbody"),
		str = "",
		pxPositionMeaningArr = res.pxPositionMeaning ? res.pxPositionMeaning.split(/#/) : null,
		cardInfo = res.cardInfo;

	selectedPaiZu.innerHTML = getUrlParam("paiZu", data);
	selectedCardForm.innerHTML = getUrlParam("cardForm", data);

	for (var i = 0, pxCardSum = res.pxCardSum; i < pxCardSum; i++) {
		var cardName = cardInfo[i].isRightPos ? cardInfo[i].cardName : cardInfo[i].cardName + "(逆位)",
			cardSummary = cardInfo[i].isRightPos ? cardInfo[i].cardSummary : cardInfo[i].cardReversePos,
			pxEachPositionMeaning = pxPositionMeaningArr ? pxPositionMeaningArr[i] : "未收录相关信息";

		str += "<div class='col-xs-12 col-sm-6 text-center title'>" + (i + 1) + "." + pxEachPositionMeaning + "</div>" +
			"<div class='col-xs-12 col-sm-6 text-center'>" + cardName + "</div>" +
			"<div class='col-xs-12'>" + cardSummary + "</div>";
	}
	tbody.innerHTML = str;
	document.getElementById("resultExplain").style.display = "block";

}

function setAnimaWraperBoxSize(wrapEle, mainContentEle) {
	var width = wrapEle.offsetWidth,
		height = width * 0.8;

	mainContentEle.style.width = width + "px";
	mainContentEle.style.height = height + "px";
}

function createCard(opts) {
	var srcFront = opts.srcFront;
	var srcBack = opts.srcBack;
	var isRightPos = opts.isRightPos;
	var rotate = opts.rotate;
	var text = opts.text;
	var animationMainContent = opts.animationMainContent;

	width = opts.width;
	height = width * 1.7;//卡牌高度是宽度的1.7倍
	x = opts.x || 0;
	y = opts.y || 0;
	animationWraperWidth = animationMainContent.offsetWidth;
	animationWraperHeight = animationMainContent.offsetHeight;

	imgOuterWrap = document.createElement("div");
	imgWrapBox = document.createElement("div");
	imageFront = document.createElement("img");
	imageBack = document.createElement("img");
	cardlabel = document.createElement("p");

	imgOuterWrap.setAttribute("class", "outerW");
	imgOuterWrap.style.position = "absolute";
	imgWrapBox.setAttribute("class", "img-wrap-box");
	imageFront.setAttribute("class", "scale-image-front");
	imageFront.setAttribute("src", srcFront);
	imageBack.setAttribute("class", "scale-image-back");
	imageBack.setAttribute("src", srcBack);
	cardlabel.setAttribute("class", "text");
	cardlabel.style.fontSize = "1.4rem";
	cardlabel.innerHTML = text;
	imgWrapBox.appendChild(imageFront);
	imgWrapBox.appendChild(imageBack);

	imgOuterWrap.appendChild(imgWrapBox);
	imgOuterWrap.appendChild(cardlabel);
	updateCardsSize();

	//设置图片的包裹元素的旋转角度-针对卡牌倾斜摆放的,以及逆位时旋转180度
	if (rotate && !isRightPos) {
		imgWrapBox.style.transform = "rotate(" + Number(180 + Number(rotate)) + "deg)";
	} else if (rotate) {
		imgWrapBox.style.transform = "rotate(" + rotate + "deg)";
	}

	animationMainContent.appendChild(imgOuterWrap);
};

/**
 * 更新每张卡片的长宽尺寸
 */
function updateCardsSize() {
	if (!imageFront) {
		return;
	}
	imgOuterWrap.style.marginLeft = number2percentage(x);
	imgOuterWrap.style.marginTop = number2percentage(y);
	imgOuterWrap.style.width = number2percentage(width);
	imgOuterWrap.style.height = animationWraperWidth * height + "px";

	//imgWrapBox.style.marginLeft = number2percentage(x);
	//imgWrapBox.style.marginTop = number2percentage(y) ;
	//imgWrapBox.style.width = number2percentage(width);
	//imgWrapBox.style.height = animationWraperWidth * height + "px";
	//imgWrapBox.style.paddingBottom = cardlabelHeight + "px";
}