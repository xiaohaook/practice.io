// 获取html中的标签--名字
var myMusic = document.getElementById("myMusic");
var btn = document.getElementById("btn");
var oDiv = document.getElementsByClassName("gc")[0];
var txt = document.getElementById("txt");
//点击实现播放音乐歌曲
//做一个标记来记录音乐的播放状态
var mark = true;
btn.onclick = function () {
    if (mark) {
        myMusic.play();//播放音乐
        // this指代 btn
        this.className = "rotate";
        mark = false;
    } else {
        myMusic.pause();//暂停音乐
        this.className = "";
        mark = true;
    }

}
var lrc = txt.value;//获取歌词文档
//console.log(lrc);
var lrcArr = lrc.split("[");//清除[    split--清除
// console.log(lrcArr);

var html = '';//自定义一个变量来保存歌词
for (var i = 0; i < lrcArr.length; i++) {
    var arr = lrcArr[i].split("]");//清除]
    //console.log(arr);
    var time = arr[0].split(".");//获取时间
    // console.log(time);
    var timer = time[0].split(":");
    //将时间转化为秒钟
    var curTime = timer[0] * 60 + timer[1] * 1;
    // console.log(curTime);
    var text = arr[1];//歌词
    // console.log(text);
    if (text) {//如果歌词获取到啦，就输出 出来
        html += "<p id=" + curTime + ">" + text + "</p>"
    }
    oDiv.innerHTML = html;//将歌词文档添加到div里面
}
// 监听音乐的播放进度，然后让相应id名的歌词变色
myMusic.addEventListener("timeupdate",function () {
    var times = parseInt(this.currentTime);//获取当前播放的时间
    console.log(times);
    // 如果有id 和 times 相同的p标签存在的话   就让它变色
    if (document.getElementById(times)) {
        document.getElementById(times).style.color = "red";
    }
},false);