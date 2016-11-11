$(function(){
	var $write = $('#write'),
		shift = false,
		capslock = false;
	$('#keyboard li').click(function(){
		var $this = $(this),
		// character对于单个字符进行操作
			character = $this.html();
		
		
			// uppercase大写字母盘
		if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
			$('.letter').toggleClass('uppercase');
			$('.symbol span').toggle();
			
			shift = (shift === true) ? false : true;
			capslock = false;
			return false;
		}
		
		// Caps lock 检查被选元素是否包含指定的 class
		if ($this.hasClass('capslock')) {
			$('.letter').toggleClass('uppercase');
			capslock = true;
			return false;
		}
		
		// Delete 回退
		if ($this.hasClass('delete')) {
			var html = $write.html();
			// substr() 的参数指定的是子串的开始位置和长度
			$write.html(html.substr(0, html.length - 1));
			return false;
		}
		
	
		if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
		//空格键
		if ($this.hasClass('space')) character = ' ';
		//tap键
		if ($this.hasClass('tab')) character = "\t";
		//回车键
		if ($this.hasClass('enter')) character = "\n";
		
		// toUpperCase() 方法用于把字符串转换为大写。
		if ($this.hasClass('uppercase')) character = character.toUpperCase();
		
		
		if (shift === true) {
			$('.symbol span').toggle();
			if (capslock === false) $('.letter').toggleClass('uppercase');
			shift = false;
		}
		
		
		$write.html($write.html() + character);
	});
});