var obj = new Date();
var pjx =obj.getMinutes();
let endseconds = new Date().getTime() + 60 * 1000 * (60-pjx);
let d = h = m = s = 0;
let id =setInterval(seckill, 1000);

function seckill(){  //获取当前时间
    let nowtime = new Date();
    let remaining=parseInt((endseconds - nowtime.getTime())/1000);

    if(remaining>0){
        d = parseInt(remaining / 86400);
        h = parseInt((remaining / 3600) % 24);
        m = parseInt((remaining / 60) % 60);
        s = parseInt(remaining % 60);
        d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
    }else{
        clearInterval(id);
        d = h = m = s = '00';
    }

    document.getElementById('d').innerHTML = d + '天';
    document.getElementById('h').innerHTML = h + '时';
    document.getElementById('m').innerHTML = m + '分';
    document.getElementById('s').innerHTML = s + '秒';
}