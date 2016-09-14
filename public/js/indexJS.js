/**
 * Created by ty on 2016/2/1.
 */
;$(function () {

	$("#IENotice a").click(function (e) {
		e = e || window.event;
		if (e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}
		$("#IENotice").hide();

	});
	//取消鼠标右键菜单
	//document.oncontextmenu=function(){
	//    return false;
	//};

	/*在线占卜*/
	$("#recommenNav").on("click", function (ev) {
		var e = ev || window.event;
		var clickedId = e.target.id;
		var moneyBlock = $("#recommendMoney");
		var randomBlock = $("#recommendRandom");
		var loveBlock = $("#recommendLove");
		var careerBlock = $("#recommendCareer");
		var studyBlock = $("#recommendStudy");

		$("#recommenNav a").attr("class", "item");
		$("#recommendDivine > div").css("display", "none");
		console.log(clickedId);

		switch (clickedId) {
			case "money":
				$("#money").attr("class", "item active");
				moneyBlock.css("display", "block");
				break;
			case "love":
				$("#love").attr("class", "item active");
				loveBlock.css("display", "block");
				break;
			case "random":
				$("#random").attr("class", "item active");
				randomBlock.css("display", "block");
				break;
			case "career":
				$("#career").attr("class", "item active");
				careerBlock.css("display", "block");
				break;
			case "study":
				$("#study").attr("class", "item active");
				studyBlock.css("display", "block");
				break;
			default :
				$("#random").attr("class", "item active");
				randomBlock.css("display", "block");
				break;
		}
	});

	/*卡牌展示列表*/

	$.ajax({
		url:"../localData/cardslist.json",
		type:"get",
		success:function(param){
			var str = "";
			var aResult = param.items;
			for(var i = 0, len = aResult.length;i < len; i++){
				str += '<li class="media border-all">' +
						'<a class="pull-left" href="'+ aResult[i].href +'">' +
						'<img style="width:100px;height:170px;" class="media-object" src="' + aResult[i].imgsrc + '" alt="' + aResult[i].imgsrc + '">' +
						'</a><div class="media-body ptb15">' +
						'<h4 class="media-heading">'+ aResult[i].heading +'</h4>' +
						aResult[i].content +
						'</div></li>';
			}
			$("#cardsList").html(str);
		}
	});
});