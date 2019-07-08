

var s=5;
var t=1000;//循环周期(1秒)
var timer;

/*-----------------------div1---------------------------------*/
function changeMc1(x,y){
// x是当前显示的层 y是即将显示的层
 clearTimeout(timer);
 if (x!=y){
 document.getElementById('yp1_card'+x).style.display = "none";
 document.getElementById('yp1_card'+y).style.display = "block";
 s=y
 }
}

/*-----------------------div2---------------------------------*/
function changeMc2(x,y){
// x是当前显示的层 y是即将显示的层
 clearTimeout(timer);
 if (x!=y){
 document.getElementById('yp2_card'+x).style.display = "none";
 document.getElementById('yp2_card'+y).style.display = "block";
 s=y
 }
}


/*-----------------------div3---------------------------------*/
function changeMc3(x,y){
// x是当前显示的层 y是即将显示的层
 clearTimeout(timer);
 if (x!=y){
 document.getElementById('yp3_card'+x).style.display = "none";
 document.getElementById('yp3_card'+y).style.display = "block";
 s=y
 }
}


/*-----------------------div4---------------------------------*/
function changeMc4(x,y){
// x是当前显示的层 y是即将显示的层
 clearTimeout(timer);
 if (x!=y){
 document.getElementById('yp4_card'+x).style.display = "none";
 document.getElementById('yp4_card'+y).style.display = "block";
 s=y
 }
}