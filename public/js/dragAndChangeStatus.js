window.onload = function(){
	var statusWrap = document.getElementById("loginStatusWrap"),
	    statusList = document.getElementById("statusList"),
        loginStatusText = document.getElementById("loginStatusText");//登录状态提示（在线）
	
	statusWrap.onclick = showStatusList;
	/*调用拖拽函数*/
	drag();
    changeStatus();
    /**
     *
     */
    document.onclick = function(){
        if(statusList.style.display = "block") {
            statusList.style.display = "none";
        }
    }

}

function showStatusList(e){
	e = e || window.event;
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble = true;
	}
	statusList.style.display = "block";
}

/**
 * 兼容IE的通过clasname获取元素
 * @param {ClassString} cls 类名
 * @param {IDString} parent 父元素的{id}
 * @author ty
 * 
 */
function getByCls(cls,parentID){
	var parent = parentID?document.getElementById(parentID):document,
	    eles = [],
	    allChildren = parent.getElementsByTagName("*");
			
	for(var i =0;i<allChildren.length;i++){
		if(allChildren[i].className == cls){
			eles.push(allChildren[i]);
		}
	}
	return eles;

}

/*拖拽*/
function drag(){
	var oTitle = getByCls("logo-QQ")[0];
	oTitle.onmousedown = fnDown;
}

function fnDown(e){
	e = e ||window.event;
    if(e.button != 0){
        return;
    }
	var oPanel = document.getElementById("loginPanel"),/*需被拖动的整个面板*/
		disX = e.clientX - oPanel.offsetLeft,/*光标按下时，光标和面板之间的距离*/
		disY = e.clientY - oPanel.offsetTop;
		//console.log("clientX="+e.clientX+",oPanel.offsetLeft="+oPanel.offsetLeft);
		
	/*移动*/	
	document.onmousemove = function(e){
		e = e ||window.event;
		fnMove(e,disX,disY);
	};
	/*释放*/
	document.onmouseup = function(){
		document.onmousemove = null;
	};
}

function fnMove(e,disX,disY){
	e = e ||window.event;
	var oPanel = document.getElementById("loginPanel"),/*需被拖动的整个面板*/
		l = e.clientX - disX,/*面板的左边left值*/
		t = e.clientY - disY;
		//console.log("fnMove:"+"clientX="+e.clientX+",oPanel.offsetLeft="+oPanel.offsetLeft);
	oPanel.style.left = l+"px";
	oPanel.style.top = t+"px";
};
/**
 *鼠标滑过和点击状态列表时
 */
function changeStatus(){
    var lis = statusList.getElementsByTagName("li"),
        loginStateShow = document.getElementById("loginStateShow");
    for(var i= 0; i< lis.length;i++){
        lis[i].onmouseover = function(e){
            this.style.background = "#567";
        }
        lis[i].onmouseout = function(e){
            this.style.background = "#fff";
        }
        lis[i].onclick = function(e){
            e = e || window.event;
            if(e.stopPropagation){
                e.stopPropagation();
            }else{
                e.cancelBubble = true;
            }
            loginStatusText.innerHTML = getByCls("status-list-text",this.id)[0].innerHTML;
            statusList.style.display = "none";
            loginStateShow.className = "";
            loginStateShow.className = "login-state-show "+this.id;
        }
    }

}
