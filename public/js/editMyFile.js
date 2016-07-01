$(document).ready(function() {
	console.log("dd");
	/*预览头像*/
	var oFReader = new FileReader(),
		rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i,
		imgData;

	oFReader.onload = function (e) {
		document.getElementById("avatarPreview").src = imgData = e.target.result;
		//初始化裁剪
		$("#avatarPreview").cropper({
			aspectRatio:1
		});
	};

	function loadImageFile() {
		if (document.getElementById("uploadImage").files.length > 0) {
			var oFile = document.getElementById("uploadImage").files[0];
			if (!rFilter.test(oFile.type)) {
				alert("You must select a valid image file!");
				return;
			}
			oFReader.readAsDataURL(oFile);
		}
	}
	var input = document.getElementById("uploadImage");
	document.getElementById("uploadImage").onchange = loadImageFile;

	//保存修改到后台
	$("#uploadToServiceBtn").on("click", function(){
		//获得裁剪后的图片
		var imgCanvas = $("#avatarPreview").cropper("getCroppedCanvas");
		var imgDataURL = imgCanvas.toDataURL();
		//console.log(imgCanvas);

		//canvas 转成 图片
		var oJPEG = Canvas2Image.convertToJPEG(imgCanvas);
		//console.log(oJPEG);
		//console.log(oJPEG.fileSize);
		$.ajax({
			url:"/updataAvatar",
			type:"post",
			data:{
				"imgDataURL": imgDataURL,
				"img": oJPEG
			},
			success: function(param){
				console.log(param);
			},
			error:function(xhr,e){
				console.log("错误了");
			}
		});

	});
});