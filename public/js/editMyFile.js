$(document).ready(function() {
	/*预览头像*/
	var oFReader = new FileReader(),
		rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i,
		imgData;

	oFReader.onload = function (e) {
		document.getElementById("avatarPreview").src = imgData = e.target.result;
		$("#avatarPreview").cropper({
			aspectRatio:1,
			guides: false,
			dragCrop:false
		}).cropper("replace", imgData);
	};

	document.getElementById("uploadImage").onchange = loadImageFile;

	function loadImageFile() {
		var uploadImageBtn = document.getElementById("uploadImage");
		if (uploadImageBtn.files.length > 0) {
			var oFile = document.getElementById("uploadImage").files[0];
			if (!rFilter.test(oFile.type)) {
				alert("只能选择图片文件！");
				return;
			}
			oFReader.readAsDataURL(oFile);
			document.getElementById("reSelectFile").style.display = "block";
			document.getElementById("selectFile").style.display = "none";
		}
	}

	//保存修改到后台
	$("#uploadToServiceBtn").on("click", function(){
		//获得裁剪后的图片
		var imgCanvas = $("#avatarPreview").cropper("getCroppedCanvas");
		var imgDataURL = imgCanvas.toDataURL("image/jpeg");
		//console.log(imgCanvas);

		$.ajax({
			url:"/updataAvatar",
			type:"post",
			data:'imgDataURL='+imgDataURL,
			success: function(param){
				if(param.code === 0){
					window.location = "/my"
				}else{
					alert("上传图片出错，请稍后再试"+param.code+param.msg)
				}
			},
			error:function(xhr,err,errObjc){
				alert("上传图片出错，请稍后再试"+err+errObjc);
			}
		});

	});
});