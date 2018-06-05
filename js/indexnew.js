window.onload=function(){	
	//========================================首页跳转========================================================
	/*var url=window.location.href;
	if(url=='http://localhost:8080/Test2/indexnew.jsp'){
		url = encodeURI(url+"?number=1");
		window.open(url,'_self');
	}*/
	//$("#contentcontainer").css("width","10px");
	
	window.onresize = function(){
		$("body").css("width",window.screen.availWidth);
		$(".rows").css("width",window.screen.availWidth*0.9);
		$(".rows").css("height",window.screen.availWidth*0.4);
		$(".row").css("height",window.innerHeight);
		$("#row4 div:first").css("height",window.innerHeight*0.8);
		$("#row4 div:first").css("width",window.innerWidth*0.8);
		$("#row5").css("height",window.screen.availWidth*0.4);
	}
	$(".rows").css("width",window.screen.availWidth*0.9);
	$(".rows").css("height",window.screen.availWidth*0.4);
	$("#row5").css("height",window.screen.availWidth*0.4);
	$(".row").css("height",window.innerHeight);
	$("#row4 div:first").css("height",window.innerHeight*0.8);
	$("#row4 div:first").css("width",window.innerWidth*0.8);

	//================================================首部导航条================================================
	$(".navbar-right li a").hover(
			function(){
				$(this).css("color","#00c0ff").css("cursor","pointer");
				$(this).parent().css("background","#EAEAEA");
			},
			function(){
				$(this).css("color","#777");
				$(this).parent().css("background","#fff");
			}
	);
	$("#menu").on("click",function(){
		$("#mymodal").modal("toggle");
	});
	$("a[href='#row0']").on("click",function(){
		$("#row0").show();
		$("#indexname").show();
		$("#row1").show();
		$("#row2").show();
		$("#row3").show();
		$("#row4").show();		
		$("#row5").hide();		
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").hide();
	});
	$("a[href='#row1']").on("click",function(){
		$("#row0").show();
		$("#indexname").show();
		$("#row1").show();
		$("#row2").show();
		$("#row3").show();
		$("#row4").show();
		$("#row5").hide();		
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").hide();
	});
	$("a[href='#row2']").on("click",function(){
		$("#row0").show();
		$("#indexname").show();
		$("#row1").show();
		$("#row2").show();
		$("#row3").show();
		$("#row4").show();
		$("#row5").hide();		
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").hide();
	});
	$("a[href='#row3']").on("click",function(){
		$("#row0").show();
		$("#indexname").show();
		$("#row1").show();
		$("#row2").show();
		$("#row3").show();
		$("#row4").show();
		$("#row5").hide();		
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").hide();
	});
	$("a[href='#row4']").on("click",function(){
		$("#row0").show();
		$("#indexname").show();
		$("#row1").show();
		$("#row2").show();
		$("#row3").show();
		$("#row4").show();
		$("#row5").hide();		
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").hide();
	});
//====================================================右侧导航条==============================================================
	$("#accordion .panel-heading").hover(
			function(){
				$(this).css("background","#00c0ff");
				$(this).find(".glyphicon").css("color","white");
				$(this).find("a").css("color","white");
				$(this).find(".badge").css("background","white").css("color","#00c0ff");
			},
			function(){
				$(this).css("background","#fff");
				$(this).find(".glyphicon").css("color","#444");
				$(this).find("a").css("color","#444");
				$(this).find(".badge").css("background","#999").css("color","white");
			}
	);	
	//------------右侧导航条跳转---------------
	$(".navright").on("click",function(){
		$("#row0").show();	
		$("#indexname").show();
		$("#row1").show();
		$("#row2").show();
		$("#row3").show();
		$("#row4").show();
		$("#row5").hide();
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").hide();
		$("#mymodal").modal("hide");
	});
	$(".modal a[href='#row5']").on("click",function(){		
		$(".row").css("height",window.innerHeight);
		$("#row0").show();
		$("#indexname").hide();		
		$("#row1").hide();
		$("#row2").hide();
		$("#row3").hide();
		$("#row4").hide();		
		$("#row5").fadeIn(1000);
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").hide();
		$("#mymodal").modal("hide");
	});
	$(".modal a[href='#row6']").on("click",function(){
		$(".row").css("height",window.innerHeight);
		$("#row0").show();
		$("#indexname").hide();
		$("#row1").hide();
		$("#row2").hide();
		$("#row3").hide();
		$("#row4").hide();
		$("#row5").hide();
		$("#row6").slideDown(1000);
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").hide();
		$("#mymodal").modal("hide");
	});
	$(".modal a[href='#row7']").on("click",function(){
		$("#row0").show();
		$("#indexname").hide();
		$("#row1").hide();
		$("#row2").hide();
		$("#row3").hide();
		$("#row4").hide();
		$("#row5").hide();
		$("#row6").hide();
		$("#row7").slideDown(1000);
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").hide();
		$("#mymodal").modal("hide");
	});	
	$(".modal a[href='#row8']").on("click",function(){
		$("#row0").show();
		$("#indexname").hide();
		$("#row1").hide();
		$("#row2").hide();
		$("#row3").hide();
		$("#row4").hide();
		$("#row5").hide();
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").fadeIn(1000);
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").hide();
		$("#mymodal").modal("hide");
	});
	$(".modal a[href='#row9']").on("click",function(){
		$("#row0").show();	
		$("#indexname").hide();
		$("#row1").hide();
		$("#row2").hide();
		$("#row3").hide();
		$("#row4").hide();
		$("#row5").hide();
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").slideDown(1000);
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").hide();
		$("#mymodal").modal("hide");
	});
	$(".modal a[href='#row10']").on("click",function(){
		$("#row0").show();	
		$("#indexname").hide();
		$("#row1").hide();
		$("#row2").hide();
		$("#row3").hide();
		$("#row4").hide();
		$("#row5").hide();
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").fadeIn(1000);
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").hide();
		$("#mymodal").modal("hide");
	});
	$(".modal a[href='#row11']").on("click",function(){
		$("#row0").show();
		$("#indexname").hide();
		$("#row1").hide();
		$("#row2").hide();
		$("#row3").hide();
		$("#row4").hide();
		$("#row5").hide();
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").slideDown(1000);
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").hide();
		$("#mymodal").modal("hide");
	});
	$(".modal a[href='#row12']").on("click",function(){
		$("#row0").show();	
		$("#indexname").hide();
		$("#row1").hide();
		$("#row2").hide();
		$("#row3").hide();
		$("#row4").hide();
		$("#row5").hide();
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").fadeIn(1000);
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").hide();
		$("#mymodal").modal("hide");
	});
	$(".modal a[href='#row13']").on("click",function(){
		$("#row0").show();	
		$("#indexname").hide();
		$("#row1").hide();
		$("#row2").hide();
		$("#row3").hide();
		$("#row4").hide();
		$("#row5").hide();
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").slideDown(1000);
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").hide();
		$("#mymodal").modal("hide");
	});
	$(".modal a[href='#row14']").on("click",function(){
		$("#row0").show();
		$("#indexname").hide();
		$("#row1").hide();
		$("#row2").hide();
		$("#row3").hide();
		$("#row4").hide();
		$("#row5").hide();
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").fadeIn(1000);
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").hide();
		$("#mymodal").modal("hide");
	});
	$(".modal a[href='#row17']").on("click",function(){
		$("#row0").show();
		$("#indexname").hide();
		$("#row1").hide();
		$("#row2").hide();
		$("#row3").hide();
		$("#row4").hide();
		$("#row5").hide();
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").fadeIn(1000);
		$("#mymodal").modal("hide");
	});
	$("#accordion .panel-default .nav-tabs a").hover(
			function(){
				$(this).css("background","#00C0FF").css("color","white");
			},
			function(){
				$(this).css("background","#fff").css("color","#444");
			}
	);
//====================================会议地点===============================================================
	$("#hotelroute").hover(
			function(){
				$(this).css("color","#00c0ff");
			},
			function(){
				$(this).css("color","#444");
			}
	);
	$("#hotelroute").on("click",function(){
		$("#traffic").modal("toggle");
	});
	$("button[data-dismiss='modal']").css("border","1px solid rgb(204 204 204)");
	$("button[data-dismiss='modal']").hover(
			function(){
				$(this).css("background","#00c0ff").css("color","white").css("border","1px solid #00c0ff");
			},
			function(){
				$(this).css("background","#fff").css("color","#333").css("border","1px solid rgb(204 204 204)");
			}
	);
//====================================会议投稿===============================================================	
	$(".papertemplet").hover(
			function(){
				$(this).css("background","#00c0ff");
			},
			function(){
				$(this).css("background","white").css("border","2px solid #00c0ff");
			}
	);
	$(".papertemplet a").hover(
			function(){
				$(this).css("color","#fff");
			},
			function(){
				$(this).css("color","#00c0ff");
			}
	);
	$("#row17 input").hover(
			function(){
				$(this).css("background","#d6d6d6");
			},
			function(){
				$(this).css("background","rgb(230, 230, 230)");
			}
	);
	$("#row17 input").on("focusin",function(){
		$(this).css("background","#c4c4c4");
	});
	$("#row17 input").on("focusout",function(){
		$(this).css("background","rgb(230, 230, 230)");
	});
	$("#row17 button").hover(
			function(){
				$(this).css("background","#00a4e4");
			},
			function(){
				$(this).css("background","#00c0ff");
			}
	);
	$("#row17 button:eq(1)").on("click",function(){
		$("#register").modal("toggle");
	});
//----------------------注册表单-----------------------------
	$("#registerform table tr:not(:last)").find("td:first").css("width","20%");
    $("#registerform table tr:not(:last)").find("td:eq(1)").css("width","40%");
    $("#lasttd button").hover(
			function(){
				$(this).css("background","#00c0ff").css("color","white").css("border","1px solid #00c0ff");
			},
			function(){
				$(this).css("background","#fff").css("color","#333").css("border","1px solid rgb(204 204 204)");
			}
	);
  //------注册验证-----
    $("input[name='username']").focusout(function(){
		var str = $(this).val();
		str = $.trim(str);
		if(str==null||str==''){
			$(this).parent().next().find("div").removeClass("alert-success alert-danger").addClass("alert-dafault").text("用户名不能为空");
		}
		else{ 				
			if((/^[a-zA-z0-9]\w{5,11}$/).test(str)){
				$(this).parent().next().find("div").removeClass("alert-default alert-danger").addClass("alert-success").text("输入正确");				
			}else{
				$(this).parent().next().find("div").removeClass("alert-default alert-success").addClass("alert-danger").text("错误,6-12位数字或字母组合");
			}
		}	
	});
    $("input[name='email']").focusout(function(){
		var str = $(this).val();
		str = $.trim(str);
		if(str==null||str==''){
			$(this).parent().next().find("div").removeClass("alert-success alert-danger").addClass("alert-dafault").text("用户邮箱不能为空");
		}
		else{ 				
			if((/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(str)){
				$(this).parent().next().find("div").removeClass("alert-default alert-danger").addClass("alert-success").text("输入正确");
			}else{
				$(this).parent().next().find("div").removeClass("alert-default alert-success").addClass("alert-danger").text("格式错误,请输入正确的邮箱");
			}
		}	
	});
    $("input[name='password']").focusout(function(){
		var str = $(this).val();
		str = $.trim(str);
		if(str==null||str==''){
			$(this).parent().next().find("div").removeClass("alert-success alert-danger").addClass("alert-dafault").text("密码不能为空");
		}
		else{ 				
			if((/^[a-zA-z0-9]\w{5,11}$/).test(str)){
				$(this).parent().next().find("div").removeClass("alert-default alert-danger").addClass("alert-success").text("输入正确");
			}else{
				$(this).parent().next().find("div").removeClass("alert-default alert-success").addClass("alert-danger").text("格式错误,6-12位数字或字母组合");
			}
		}	
	});
    $("input[name='passwordagain']").focusout(function(){
		var str = $(this).val();
		str = $.trim(str);
		if(str==null||str==''){
			$(this).parent().next().find("div").removeClass("alert-success alert-danger").addClass("alert-dafault").text("确认密码不能为空");
		}
		else{ 				
			if($("input[name='password']").val()==str){
				$(this).parent().next().find("div").removeClass("alert-default alert-danger").addClass("alert-success").text("输入正确");
			}else{
				$(this).parent().next().find("div").removeClass("alert-default alert-success").addClass("alert-danger").text("两次密码不一致");
			}
		}	
	});
    $("input[name='name']").focusout(function(){
		var str = $(this).val();
		str = $.trim(str);
		if(str==null||str==''){
			$(this).parent().next().find("div").removeClass("alert-success alert-danger").addClass("alert-dafault").text("姓名不能为空");
		}
		else{ 				
			if((/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,10}$/).test(str)){
				$(this).parent().next().find("div").removeClass("alert-default alert-danger").addClass("alert-success").text("输入正确");
			}else{
				$(this).parent().next().find("div").removeClass("alert-default alert-success").addClass("alert-danger").text("格式错误,2-10位汉字");
			}
		}	
	});
    $("input[name='phone']").focusout(function(){
		var str = $(this).val();
		str = $.trim(str);
		if(str==null||str==''){
			$(this).parent().next().find("div").removeClass("alert-success alert-danger").addClass("alert-dafault").text("手机号不能为空");
		}
		else{ 				
			if((/^1\d{10}$/).test(str)){
				$(this).parent().next().find("div").removeClass("alert-default alert-danger").addClass("alert-success").text("输入正确");
			}else{
				$(this).parent().next().find("div").removeClass("alert-default alert-success").addClass("alert-danger").text("格式错误,请输入正确的手机号码");
			}
		}	
	});
    $("input[name='work_unit']").focusout(function(){
		var str = $(this).val();
		str = $.trim(str);
		if(str==null||str==''){
			$(this).parent().next().find("div").removeClass("alert-success alert-danger").addClass("alert-dafault").text("工作单位不能为空");
		}
		else{ 				
			$(this).parent().next().find("div").removeClass("alert-default alert-danger").addClass("alert-success").text("输入正确");
		}	
	});
    $("input[name='address']").focusout(function(){
		var str = $(this).val();
		str = $.trim(str);
		if(str==null||str==''){
			$(this).parent().next().find("div").removeClass("alert-success alert-danger").addClass("alert-dafault").text("通讯地址不能为空");
		}
		else{ 				
			$(this).parent().next().find("div").removeClass("alert-default alert-danger").addClass("alert-success").text("输入正确");
		}	
	});
    //--------注册-------
    $("#lasttd button:first").on("click",function(){
    	if($(".alert-success").length==8){
    		alert("以上输入正确，可以调用后端方法进行注册了");
    	}
    	else{
    		alert("以上输入有误，请输入完整再注册");
    	}
    	
    });
    //-------重置------
    $("#lasttd button:eq(1)").on("click",function(){
    	$(".alert:eq(0)").removeClass("alert-success alert-danger").addClass("alert-dafault").text('"."、“-”、“_”以外的其他符号"');
    	$(".alert:eq(1)").removeClass("alert-success alert-danger").addClass("alert-dafault").text("请填写正确邮箱");
    	$(".alert:eq(2)").removeClass("alert-success alert-danger").addClass("alert-dafault").text("密码是数字或字母6-12位");
    	$(".alert:eq(3)").removeClass("alert-success alert-danger").addClass("alert-dafault").text("请再次输入密码");
    	$(".alert:eq(4)").removeClass("alert-success alert-danger").addClass("alert-dafault").text("请填写真实姓名");
    	$(".alert:eq(5)").removeClass("alert-success alert-danger").addClass("alert-dafault").text("请填写正确手机号码");
    	$(".alert:eq(6)").removeClass("alert-success alert-danger").addClass("alert-dafault").text("请填写工作单位");
    	$(".alert:eq(7)").removeClass("alert-success alert-danger").addClass("alert-dafault").text("请填写通讯地址");
    });
   //----------登录--------------
    $("#login").on("click",function(){
    	$("#loginmodal").modal("toggle");
	});
	$("#registerinfo tr").hover(
			function(){
				$(this).css("background","#00c0ff").css("color","white").css("border","1px solid #00c0ff");
			},
			function(){
				$(this).css("background","#fff").css("color","#333").css("border","1px solid rgb(204 204 204)");
			}
	);
	$("#re a:first").on("click",function(){
		$("#row0").show();
		$("#indexname").hide();
		$("#row1").hide();
		$("#row2").hide();
		$("#row3").hide();
		$("#row4").hide();
		$("#row5").hide();
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").slideDown(1000);
		$("#row16").hide();
		$("#row17").hide();
		$("#loginmodal").modal("hide");
	});
	$("#re a:eq(1)").on("click",function(){
		$("#row0").show();
		$("#indexname").hide();
		$("#row1").hide();
		$("#row2").hide();
		$("#row3").hide();
		$("#row4").hide();
		$("#row5").hide();
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").slideDown(1000);
		$("#row17").hide();
		$("#loginmodal").modal("hide");
	});
	//----------------------提交资料摘要------------------------
	$("#abstract .btn").hover(
			function(){
				$(this).css("background","#00c0ff").css("color","white").css("border","1px solid #00c0ff");
			},
			function(){
				$(this).css("background","#fff").css("color","#000").css("border","1px solid #00c0ff");
			}
	);
	$("#thesis .btn").hover(
			function(){
				$(this).css("background","#00c0ff").css("color","white").css("border","1px solid #00c0ff");
			},
			function(){
				$(this).css("background","#fff").css("color","#000").css("border","1px solid #00c0ff");
			}
	);
	$("#abstract .form-group:eq(1)").find("option").each(function(index,element){
    	var parent = $("#secondselect");
    	$(this).on("click",function(){
    		if(index==0){
    			parent.empty();
    			var content1='<option>典型地物散射特性</option>';
    			content1+='<option>电磁散射模拟</option>';
    			content1+='<option>电磁波极化理论</option>';
    			content1+='<option>极化散射机理</option>';
    			content1+='<option>辐射传输模型</option>';
    			parent.append(content1);
    		}
    		if(index==1){
    			parent.empty();
    			var content1='<option>星载、机载和地基SAR系统</option>';
    			content1+='<option>无人机SAR</option>';
    			content1+='<option>双站、多站 SAR</option>';
    			content1+='<option>SAR系统模拟和仿真</option>';
    			content1+='<option>毫米波SAR</option>';
    			content1+='先进SAR模式';
    			parent.append(content1);
    		}
    		if(index==2){
    			parent.empty();
    			var content1='<option>SAR 成像处理</option>';
    			content1+='<option>SAR 信息一体化处理</option>';
    			content1+='<option>极化和紧缩极化</option>';
    			content1+='<option>极化干涉和紧缩极化干涉</option>';
    			content1+='<option>双站多站 SAR 成像处理</option>';
    			content1+='<option>高分宽幅 SAR成像处理</option>';
    			content1+='<option>3 维-4 维 SAR成像处理</option>';
    			parent.append(content1);
    		}
    		if(index==3){
    			parent.empty();
    			var content1='<option>SAR定标及几何校正</option>';
    			content1+='<option>SAR 图像处理</option>';
    			content1+='<option>SAR图像滤波和分割</option>';
    			content1+='<option>InSAR大气改正</option>';
    			content1+='<option>InSAR相位滤波和解缠</option>';
    			content1+='<option>时序InSAR数据处理</option>';
    			content1+='<option>多平台、多基线SAR数据处理</option>';
    			content1+='<option>数据融合和制图</option>';
    			content1+='<option>SAR和光学融合</option>';
    			content1+='<option>顺轨和交轨道干涉</option>';
    			content1+='<option>SAR目标探测与识别</option>';
    			content1+='<option>SAR、极化地物分类</option>';
    			parent.append(content1);
    		}
    		if(index==4){
    			parent.empty();
    			var content1='<option>SAR全球变化</option>';
    			content1+='<option>SAR地震监测</option>';
    			content1+='<option>SAR森林测图</option>';
    			content1+='<option>SAR区域环境</option>';
    			content1+='<option>SAR灾害监测</option>';
    			content1+='<option>SAR测绘制图</option>';
    			content1+='<option>SAR湿地遥感</option>';
    			content1+='<option>SAR城市管理</option>';
    			content1+='<option>SAR林业调查</option>';
    			content1+='<option>SAR农情识别</option>';
    			content1+='<option>SAR水文资源</option>';
    			content1+='<option>SAR海洋观测</option>';
    			content1+='<option>SAR冰川监测</option>';
    			content1+='<option>SAR冻土监测</option>';
    			parent.append(content1);
    		}
    	});
    });
//---------------会议提前注册-----------------	
	$("#row16 .btn").hover(
			function(){
				$(this).css("background","#00c0ff").css("color","white").css("border","1px solid #00c0ff");
			},
			function(){
				$(this).css("background","#fff").css("color","#000").css("border","1px solid #00c0ff");
			}
	);
//================================================参与与赞助==========================================================================
	$("#row4 .carousel-control").hover(
			function(){
				$(this).css("background","white");				
			},
			function(){
				$(this).css("background","white");
			}
	);
//============================================会议新闻===================================================================
	$("#row6 .media-heading").hover(
			function(){
				$(this).css("color","#00c0ff");				
			},
			function(){
				$(this).css("color","#000");
			}
	);
	$("#newsdiv1 button:eq(1)").hover(
			function(){
				$(this).css("color","#00c0ff").css("border","1px solid #00c0ff");				
			},
			function(){
				$(this).css("color","#999").css("border","1px solid #999");
			}
	);
	$("#newsdiv2 button").hover(
			function(){
				$(this).css("color","#00c0ff").css("border","1px solid #00c0ff");				
			},
			function(){
				$(this).css("color","#999").css("border","1px solid #999");
			}
	);
	$("#newsdiv3 button").hover(
			function(){
				$(this).css("color","#00c0ff").css("border","1px solid #00c0ff");				
			},
			function(){
				$(this).css("color","#999").css("border","1px solid #999");
			}
	);
	$("#newsdiv2 p:eq(3)").find("a").css("color","#000").css("text-decoration","none");
	$("#newsdiv2 p:eq(3)").find("a").hover(
			function(){
				$(this).css("color","#00c0ff");				
			},
			function(){
				$(this).css("color","#000");
			}
	);
	$("#newsdiv3 p:eq(3)").find("a").css("color","#000").css("text-decoration","none");
	$("#newsdiv3 p:eq(3)").find("a").hover(
			function(){
				$(this).css("color","#00c0ff");				
			},
			function(){
				$(this).css("color","#000");
			}
	);
	$("#newsdiv4 button:eq(0)").hover(
			function(){
				$(this).css("color","#00c0ff").css("border","1px solid #00c0ff");				
			},
			function(){
				$(this).css("color","#999").css("border","1px solid #999");
			}
	);
	$("#row6 .media:eq(0)").find("h4").on("click",function(){
		$("#newsdiv1").fadeIn(500);
		$("#newsdiv2").hide();
		$("#newsdiv3").hide();
		$("#newsdiv4").hide();
	});
	$("#row6 .media:eq(1)").find("h4").on("click",function(){
		$("#newsdiv1").hide();
		$("#newsdiv2").slideDown(500);
		$("#newsdiv3").hide();
		$("#newsdiv4").hide();
	});
	$("#row6 .media:eq(2)").find("h4").on("click",function(){
		$("#newsdiv1").hide();
		$("#newsdiv2").hide();
		$("#newsdiv3").fadeIn(500);
		$("#newsdiv4").hide();
	});
	$("#row6 .media:eq(3)").find("h4").on("click",function(){
		$("#newsdiv1").hide();
		$("#newsdiv2").hide();
		$("#newsdiv3").hide();
		$("#newsdiv4").slideDown(500);
	});
	//------------------上一篇下一篇------------------------------
	$("#newsdiv1 button:eq(1)").on("click",function(){
		$("#newsdiv1").hide();
		$("#newsdiv2").slideDown(500);
		$("#newsdiv3").hide();
		$("#newsdiv4").hide();
	});
	$("#newsdiv2 button:eq(0)").on("click",function(){
		$("#newsdiv1").fadeIn(500);
		$("#newsdiv2").hide();
		$("#newsdiv3").hide();
		$("#newsdiv4").hide();
	});
	$("#newsdiv2 button:eq(1)").on("click",function(){
		$("#newsdiv1").hide();
		$("#newsdiv2").hide();
		$("#newsdiv3").fadeIn(500);
		$("#newsdiv4").hide();
	});
	$("#newsdiv3 button:eq(0)").on("click",function(){
		$("#newsdiv1").hide();
		$("#newsdiv2").slideDown(500);
		$("#newsdiv3").hide();
		$("#newsdiv4").hide();
	});
	$("#newsdiv3 button:eq(1)").on("click",function(){
		$("#newsdiv1").hide();
		$("#newsdiv2").hide();
		$("#newsdiv3").hide();
		$("#newsdiv4").slideDown(500);
	});
	$("#newsdiv4 button:eq(0)").on("click",function(){
		$("#newsdiv1").hide();
		$("#newsdiv2").hide();
		$("#newsdiv3").fadeIn(500);
		$("#newsdiv4").hide();
	});
//==============================================================重要日期=============================================================	
	$("#row7 p span:lt(2)").css("text-decoration","line-through");
//=======================================================组织机构=====================================================
	$("#row9 img").css("width","100px").css("height","60px").css("border","3px solid #999");
	$("#row9 img").hover(
			function(){
				$(this).css("border","3px solid #fff");				
			},
			function(){
				$(this).css("border","3px solid #999");
			}
	);
	$("#org tr").hover(
			function(){
				$(this).css("background","#00c0ff");
				$(this).find("td").css("color","white");				
			},
			function(){
				$(this).css("background","#fff");
				$(this).find("td").css("color","#000");
			}
	);
//=================================================科学委员会================================================================
	$("#row10 .table-condensed tr").hover(
			function(){
				$(this).css("background","#00c0ff");
				$(this).find("td").css("color","white");
			},
			function(){
				$(this).css("background","#fff");
				$(this).find("td").css("color","#000");
			}
	);
//=================================================组委会信息================================================================
		$("#row11 .table-condensed tr").hover(
				function(){
					$(this).css("background","#00c0ff");
					$(this).find("td").css("color","white");					
				},
				function(){
					$(this).css("background","#fff");
					$(this).find("td").css("color","#000");
					$(this).find("td[colspan='2']").css("color","#00c0ff");
				}
		);
//==================================================论文征集==========================================================
		$("#row12 .table-condensed tr").hover(
				function(){
					$(this).css("background","#00c0ff");
					$(this).find("td").css("color","white");
				},
				function(){
					$(this).css("background","#fff");
					$(this).find("td").css("color","#000");
				}
		);
//===================================================酒店预订===============================================================	
	$("#row14 table th").hover(
			function(){
				$(this).css("background","#00c0ff");
				$(this).find("td").css("color","white");
			},
			function(){
				$(this).css("background","#00c0ff");
				$(this).find("td").css("color","#000");
			}
	);
	$("#row14 table tr").hover(
		function(){
			$(this).css("background","#00c0ff");
			$(this).find("td").css("color","white");
		},
		function(){
			$(this).css("background","#fff");
			$(this).find("td").css("color","#000");
		}
	);
	$("#row14 h3").on("click",function(){
		$("#traffic").modal("toggle");
	});
	//=============================会议提前注册系统=============================
	$("#preinfo").on("click",function(){
		$("#row0").show();
		$("#indexname").hide();
		$("#row1").hide();
		$("#row2").hide();
		$("#row3").hide();
		$("#row4").hide();
		$("#row5").hide();
		$("#row6").hide();
		$("#row7").hide();
		$("#row8").hide();
		$("#row9").hide();
		$("#row10").hide();
		$("#row11").hide();
		$("#row12").hide();
		$("#row13").hide();
		$("#row14").hide();
		$("#row15").hide();
		$("#row16").hide();
		$("#row17").fadeIn(1000);
	});

	

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
	
	
	
	
	
	
	
	
	
	
	
	
//-------------地图函数---------------
	
    function createMap(){ 
      map = new BMap.Map("map"); 
      map.centerAndZoom(new BMap.Point(112.9943,28.101527),19);
    }
    function setMapEvent(){
      map.enableScrollWheelZoom();
      map.enableKeyboard();
      map.enableDragging();
      map.enableDoubleClickZoom()
    }
    function addClickHandler(target,window){
      target.addEventListener("click",function(){
        target.openInfoWindow(window);
      });
    }
    function addMapOverlay(){
      var markers = [
        {content:"长沙市天心区芙蓉南路二段 128号现代广场",title:"凯莱大酒店",imageOffset: {width:0,height:3},position:{lat:28.101395,lng:112.994161}}
      ];
      for(var index = 0; index < markers.length; index++ ){
        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
        var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
          imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
        })});
        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
        var opts = {
          width: 200,
          title: markers[index].title,
          enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
        marker.setLabel(label);
        addClickHandler(marker,infoWindow);
        map.addOverlay(marker);
      };
    }
    //向地图添加控件
    function addMapControl(){
      var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
      scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
      map.addControl(scaleControl);
      var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
      map.addControl(navControl);
      var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
      map.addControl(overviewControl);
    }
    var map;
  //创建和初始化地图函数：
    function initMap(){
      createMap();//创建地图
      setMapEvent();//设置地图事件
      addMapControl();//向地图添加控件
      addMapOverlay();//向地图添加覆盖物
    }
      initMap();
	
	
}