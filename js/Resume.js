		// 加载页面后执行
			$(function(){
				// 获取窗口和navbar的DOM元素
				var $window = $(window);
				var $navbarTop = $('.topnavbar').offset().top;
				var $liNodes = $('nav > .list > li');
				var $arrow = $('nav > .arrow');
				var $a = $('nav > .list > li > a');
				var $totalcontent = document.querySelector(".totalcontent")
				// var $scrollTop = $window.scrollTop(); 设置在外面
				// 给页面设置一个滚动事件
				$window.scroll(function(){
					var $scrollTop = $window.scrollTop();
					if ($scrollTop >= $navbarTop) {
						$('.topnavbar').addClass('fixed');
					} else{
						$('.topnavbar').removeClass('fixed');
					}
				})
				// 同步当前屏的索引
				var now = 0;
				// var timer ;
				//重置事件
				window.onresize=function(){
					$arrow[0].style.left = $liNodes[now].offsetLeft + $liNodes[now].offsetWidth/2-$arrow[0].offsetWidth/2+"px";
				}

				
				
				// 导航栏菜单项随滚轮滚动，样式发生变化
				$(window).scroll(function(event){
				    checkscroll()
				  });
				function checkscroll(){
				    var winPos = $(window).scrollTop(); //屏幕位置
				    var NodePos = [$('#wrapper').offset().top,$('#aboutme').offset().top,$('#technical').offset().top,$('#exprience').offset().top,$('#reffernces').offset().top,$('#contact').offset().top]//提前获取好元素位置
					if(winPos+100<=NodePos[1]){
						   headMove(0);
					   }else if(winPos+100<=NodePos[2]){
						   headMove(1);
					   }else if(winPos+100<=NodePos[3]){
						   headMove(2);
					   }else if(winPos+100<=NodePos[4]){
						   headMove(3);
					   }else if(winPos+100<=NodePos[5]){
						   headMove(4);
					   }else{
						   headMove(5);
					   }
				  }
				
				
				// 头部事件
				headBind();
				function headBind(){
					$arrow[0].style.left = $liNodes[0].offsetLeft + $liNodes[0].offsetWidth/2-$arrow[0].offsetWidth/2+"px";
					// 出现js中的变量提升和函数提升问题
					// 参考资料：https://blog.csdn.net/kontar123/article/details/83508740?utm_medium=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-2.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-2.control
					for (let i = 0; i < $liNodes.length; i++) {
						$liNodes[i].onclick=function(){
							headMove(i);
							now = i;
						}
					}
				}
					// 头部箭头下标移动事件
				function headMove(index){
							for (let i = 0,alength=$a.length; i < alength; i++) {
								$a[i].style.color="#4c404d";
							}
							$a[index].style.color="red";
							$arrow[0].style.left = $liNodes[index].offsetLeft + $liNodes[index].offsetWidth/2-$arrow[0].offsetWidth/2+"px";
						}	
			})
				
			