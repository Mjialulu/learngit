	var i=0;
		function show(){
			Zepto(function(){
				$("#banner>ul").children("li").eq(i).show();
				$("#banner>ul").children("li").eq(i).siblings().hide();
				$("#mark>span").eq(i).siblings().removeClass("bg");
				$("#mark>span").eq(i).addClass("bg");
			})
			i++;
			if(i>3){i=0};	
		};
		j=setInterval(show,3000);


