$(function () {
//相当于window.onload == function()
//$(document).ready(function(){
//		
//	})
//	$(function(){
//		
//	})
//当页面加载完成时执行下面代码
    var left = $('.left');
    var right = $('.right');
    var down = $('.down');
    var up = $('.up');
    var bg = $('.bgDiv');
    var leftNav = $('.leftNav');
    var rightNav = $('.rightNav');
    var downNav = $('.downNav');
    var upNav = $('.upNav');
    //在此调用函数
    showNav(left, leftNav, "left");
    showNav(right, rightNav, "right");
    showNav(up, upNav, "up");
    showNav(down, downNav, "down");

    //定义显示函数
    function showNav(btn, navDiv, direction) {
        btn.click(function () {
            bg.css({
                display: "block",
                transition: "opacity .5s"
            });
            if (direction == "right") {
                navDiv.css({
                    right: "0px",
                    transition: "right 1s"
                });
            } else if (direction == "left") {
                navDiv.css({
                    left: "0px",
                    transition: "left 1s"
                });
            } else if (direction == "up") {
                navDiv.css({
                    top: "0px",
                    transition: "top 1s"
                });
            } else if (direction == "down") {
                navDiv.css({
                    bottom: "0px",
                    transition: "bottom 1s"
                });
            }

        });
    }

    //each()快速便利     $(selector).each(function(index,element))   类似for循环

    $('span').each(function () {

//      var dom = $(this);
        $(this).click(function () {
        	//点击时调用隐藏函数
            hideNav();
            //获取$(this)的文本内容   这里可以定义连接的页面
            alert($(this).text())
        });
    });


    //点击按钮调用函数
    bg.click(function () {
        hideNav();
    });

    //定义一个隐藏函数
    function hideNav() {
    	//左
        leftNav.css({
            left: "-70%",
            transition: "left 0.5s"
        });
        //右
        rightNav.css({
            right: "-70%",
            transition: "right 0.5s"
        });
        //上
        upNav.css({
            top: "-40%",
            transition: "top 0.5s"
        });
        //下
        downNav.css({
            bottom: "-50%",
            webkitTransition:"bottom 0.5s",
            oTransition:"bottom 0.5s",
            mozTransition:"bottom 0.5s",
            transition: "bottom 0.5s"
        });
        //阴影背景
        bg.css({
            display: "none",
            transition: "display 1s"
        });
    }


})(jQuery);