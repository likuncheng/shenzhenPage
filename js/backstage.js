window.onload=function(){
//===================================判断浏览器型号==========================================
	function myBrowser(){
	    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	    var isOpera = userAgent.indexOf("Opera") > -1;
	    if (isOpera) {
	        return "Opera"
	    }; //判断是否Opera浏览器
	    if (userAgent.indexOf("Firefox") > -1) {
	        return "FF";
	    } //判断是否Firefox浏览器
	    if (userAgent.indexOf("Chrome") > -1){
	  return "Chrome";
	 }
	    if (userAgent.indexOf("Safari") > -1) {
	        return "Safari";
	    } //判断是否Safari浏览器
	    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
	        return "IE";
	    }; //判断是否IE浏览器
	}	
	//===========================================屏幕切换======================================================
	window.onresize = function(){
		$("body").css("width",window.screen.availWidth);
		$("body").css("height",window.innerHeight);
		//以下是调用上面的函数
		var mb = myBrowser();
		if ("IE" == mb) {
		    alert("我是 IE");
		}
		if ("FF" == mb) {
			$("body").css("width",window.screen.availWidth);
			$("body").css("height",window.innerHeight);
		}
		if ("Chrome" == mb) {
			$("body").css("width",window.screen.availWidth*1.1);
			$("body").css("height",window.innerHeight);
		}
		if ("Opera" == mb) {
		    alert("我是 Opera");
		}
		if ("Safari" == mb) {
		    alert("我是 Safari");
		}
	}
//-------------------初始化-------------------------	
	$("body").css("width",window.screen.availWidth);
	$("body").css("height",window.innerHeight);
	//以下是调用上面的函数
		var mb = myBrowser();
		if ("IE" == mb) {
		    alert("我是 IE");
		}
		if ("FF" == mb) {
			$("body").css("width",window.screen.availWidth);
			$("body").css("height",window.innerHeight);
		}
		if ("Chrome" == mb) {
			$("body").css("width",window.screen.availWidth*1.1);
			$("body").css("height",window.innerHeight);
		}
		if ("Opera" == mb) {
		    alert("我是 Opera");
		}
		if ("Safari" == mb) {
		    alert("我是 Safari");
		}
//===========================================导航条切换======================================================
	$("a[href='#content1']").on("click",function(){
		$("#content1").show();
		$("#content2").hide();
		$("#content3").hide();
		$("#content4").hide();
		$("#content5").hide();
		$("#content6").hide();
	});
	$("a[href='#content2']").on("click",function(){
		$("#content1").hide();
		$("#content2").show();
		$("#content3").hide();
		$("#content4").hide();
		$("#content5").hide();
		$("#content6").hide();
	});
	$("a[href='#content3']").on("click",function(){
		$("#content1").hide();
		$("#content2").hide();
		$("#content3").show();
		$("#content4").hide();
		$("#content5").hide();
		$("#content6").hide();
	});
	$("a[href='#content4']").on("click",function(){
		$("#content1").hide();
		$("#content2").hide();
		$("#content3").hide();
		$("#content4").show();
		$("#content5").hide();
		$("#content6").hide();
	});
	$("a[href='#content5']").on("click",function(){
		$("#content1").hide();
		$("#content2").hide();
		$("#content3").hide();
		$("#content4").hide();
		$("#content5").show();
		$("#content6").hide();
	});
	$("a[href='#content6']").on("click",function(){
		$("#content1").hide();
		$("#content2").hide();
		$("#content3").hide();
		$("#content4").hide();
		$("#content5").hide();
		$("#content6").show();
	});
	$("#content1 table tr:not(:first)").hover(
			function(){
				$(this).css("color","white").css("background","#1f76ea");				
			},
			function(){
				$(this).css("color","#333").css("background","#fff");
			}
	);
	$("#content2 table tr:not(:first)").hover(
			function(){
				$(this).css("color","white").css("background","#1f76ea");
				$(this).find(".btn").css("color","white").css("background","#1f76ea");
			},
			function(){
				$(this).css("color","#333").css("background","#fff");
				$(this).find(".btn").css("color","#333").css("background","#fff");
			}
	);
	$("#content3 table tr:not(:first)").hover(
			function(){
				$(this).css("color","white").css("background","#1f76ea");
				$(this).find(".btn").css("color","white").css("background","#1f76ea");
			},
			function(){
				$(this).css("color","#333").css("background","#fff");
				$(this).find(".btn").css("color","#333").css("background","#fff");
			}
	);
	$("#content4 table tr:not(:first)").hover(
			function(){
				$(this).css("color","white").css("background","#1f76ea");
				$(this).find(".btn").css("color","white").css("background","#1f76ea");
			},
			function(){
				$(this).css("color","#333").css("background","#fff");
				$(this).find(".btn").css("color","#333").css("background","#fff");
			}
	);
	$("#content5 table tr:not(:first)").hover(
			function(){
				$(this).css("color","white").css("background","#1f76ea");
				$(this).find(".btn").css("color","white").css("background","#1f76ea");
			},
			function(){
				$(this).css("color","#333").css("background","#fff");
				$(this).find(".btn").css("color","#333").css("background","#fff");
			}
	);

	$("#row2 .col-md-1 .nav li a").hover(
			function(){
				$(this).css("background","#646d7e");
			},
			function(){
				$(this).css("background","#2a2d34");
			}
	);
//==========================================分页导航==================================================
		$("#content1 .pagination li").each(function(index,element){
			$(this).on("click",function(){
				$("#content1 .pagination li a:not(:eq(index))").css("background","#fff").css("color","#333");
				$(this).find("a").css("background","#1f76ea").css("color","white");
			})
		});
//=======================================汇款凭证===========================================
	$("#content2 table tr:not(:first)").find("td:eq(5)").css("text-align","center").css("padding","0px");
	$("#second input").on("click",function(){
		var result = $("#second input").is(':checked');
		if(result==true){
			$("#content2 table tr:not(:first)").each(function(){
				var self=$(this).find("td input");
				if(!self.prop('checked')){
		            self.prop('checked',true);
		        }
			});
		}
		if(result==false){
			$("#content2 table tr:not(:first)").each(function(){
				var self=$(this).find("td input");
				if(self.prop('checked')){
		            self.prop('checked',false);
		        }
			});			
		}
	});
	$("#content2 .pagination li").each(function(index,element){
		$(this).on("click",function(){
			$("#content2 .pagination li a:not(:eq(index))").css("background","#fff").css("color","#333");
			$(this).find("a").css("background","#1f76ea").css("color","white");
		})
	});
//=======================================查看摘要===========================================
	$("#content3 table tr:not(:first)").find("td:eq(10)").css("text-align","center").css("padding","0px");
	$("#third input").on("click",function(){
		var result = $("#third input").is(':checked');
		if(result==true){
			$("#content3 table tr:not(:first)").each(function(){
				var self=$(this).find("td input");
				if(!self.prop('checked')){
		            self.prop('checked',true);
		        }
			});
		}
		if(result==false){
			$("#content3 table tr:not(:first)").each(function(){
				var self=$(this).find("td input");
				if(self.prop('checked')){
		            self.prop('checked',false);
		        }
			});			
		}
	});
	$("#content3 .pagination li").each(function(index,element){
		$(this).on("click",function(){
			$("#content3 .pagination li a:not(:eq(index))").css("background","#fff").css("color","#333");
			$(this).find("a").css("background","#1f76ea").css("color","white");
		})
	});
//=======================================查看论文===========================================
	$("#content4 table tr:not(:first)").find("td:eq(4)").css("text-align","center").css("padding","0px");
	$("#Four input").on("click",function(){
		var result = $("#Four input").is(':checked');
		if(result==true){
			$("#content4 table tr:not(:first)").each(function(){
				var self=$(this).find("td input");
				if(!self.prop('checked')){
		            self.prop('checked',true);
		        }
			});
		}
		if(result==false){
			$("#content4 table tr:not(:first)").each(function(){
				var self=$(this).find("td input");
				if(self.prop('checked')){
		            self.prop('checked',false);
		        }
			});			
		}
	});
	$("#content4 .pagination li").each(function(index,element){
		$(this).on("click",function(){
			$("#content4 .pagination li a:not(:eq(index))").css("background","#fff").css("color","#333");
			$(this).find("a").css("background","#1f76ea").css("color","white");
		})
	});
//=======================================会议文件===========================================
	$("#content5 table tr:not(:first)").find("td:eq(3)").css("text-align","center").css("padding","0px");
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}