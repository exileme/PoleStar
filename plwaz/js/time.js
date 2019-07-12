
var bsYear; 
var bsDate; 
var bsWeek; 
var arrLen=9; //数组长度   //因增加了数组中的【8】故从原来8改成9
var sValue=0; //当年的秒数 
var dayiy=0; //当年第几天 
var miy=0; //月份的下标 
var iyear=0; //年份标记 
var dayim=0; //当月第几天 
var spd=86400; //每天的秒数 

var year1999="30;29;29;30;29;29;30;29;30;30;30;29"; //354 
var year2000="30;30;29;29;30;29;29;30;29;30;30;29"; //354 
var year2001="30;30;29;30;29;30;29;29;30;29;30;29;30"; //384 
var year2002="30;30;29;30;29;30;29;29;30;29;30;29"; //354 
var year2003="30;30;29;30;30;29;30;29;29;30;29;30"; //355 
var year2004="29;30;29;30;30;29;30;29;30;29;30;29;30"; //384 
var year2005="29;30;29;30;29;30;30;29;30;29;30;29"; //354 
var year2006="30;29;30;29;30;30;29;29;30;30;29;29;30"; 
var year2019="30;29;30;29;30;29;29;30;29;29;30;30";//<!–2019年无闰年 354天–>

var month1999="正月;二月;三月;四月;五月;六月;七月;八月;九月;十月;十一月;十二月" 
var month2001="正月;二月;三月;四月;闰四月;五月;六月;七月;八月;九月;十月;十一月;十二月" 
var month2004="正月;二月;闰二月;三月;四月;五月;六月;七月;八月;九月;十月;十一月;十二月" 
var month2006="正月;二月;三月;四月;五月;六月;七月;闰七月;八月;九月;十月;十一月;十二月" 
var Dn="初一;初二;初三;初四;初五;初六;初七;初八;初九;初十;十一;十二;十三;十四;十五;十六;十七;十八;十九;二十;廿一;廿二;廿三;廿四;廿五;廿六;廿七;廿八;廿九;三十"; 

var Ys=new Array(arrLen); //<!–计算每一年的秒数–> 1970年1月1号至今的毫秒数/1000  
Ys[0]=919094400;Ys[1]=949680000;Ys[2]=980265600; 
Ys[3]=1013443200;Ys[4]=1044028800;Ys[5]=1074700800; 
Ys[6]=1107878400;Ys[7]=1138464000; Ys[8]=1546272000; //8中的秒数有问题 导致60行时计算有问题

var Yn=new Array(arrLen); //农历年的名称 
Yn[0]="己卯年";Yn[1]="庚辰年";Yn[2]="辛巳年"; 
Yn[3]="壬午年";Yn[4]="癸未年";Yn[5]="甲申年"; 
Yn[6]="乙酉年";Yn[7]="丙戌年"; Yn[8]="己亥年"; 
var D=new Date(); 
var yy=D.getFullYear();//修改，因D.getYear(); 获取2019年得到的是119
var mm=D.getMonth()+1; 
var dd=D.getDate(); 
var ww=D.getDay(); 
if (ww==0) ww="<font color=RED>星期日"; 
if (ww==1) ww="星期一"; 
if (ww==2) ww="星期二"; 
if (ww==3) ww="星期三"; 
if (ww==4) ww="星期四"; 
if (ww==5) ww="星期五"; 
if (ww==6) ww="<font color=RED>星期六"; 
ww=ww; 
var ss=parseInt(D.getTime() / 1000);  

if (yy<100) yy="19"+yy;  

for (i=0;i<arrLen;i++) 
if (ss>=Ys[i]){ 
iyear=i; 
sValue=ss-Ys[i]; //当年的秒数 
} 
dayiy=parseInt(sValue/spd)+1; //当年的天数 

var dpm=year1999; //<!–凭据不同的年份，挑选不同的农历月份日子表–>
if (iyear==1) dpm=year2000; 
if (iyear==2) dpm=year2001; 
if (iyear==3) dpm=year2002; 
if (iyear==4) dpm=year2003; 
if (iyear==5) dpm=year2004; 
if (iyear==6) dpm=year2005; 
if (iyear==7) dpm=year2006; 
if (iyear==8) dpm=year2019; //add 20190709
dpm=dpm.split(";"); 

var Mn=month1999; //<!–凭据不同的年份，挑选不同的农历月份表–>
if (iyear==2) Mn=month2001; 
if (iyear==5) Mn=month2004; 
if (iyear==7) Mn=month2006; 
Mn=Mn.split(";"); 

var Dn="初一;初二;初三;初四;初五;初六;初七;初八;初九;初十;十一;十二;十三;十四;十五;十六;十七;十八;十九;二十;廿一;廿二;廿三;廿四;廿五;廿六;廿七;廿八;廿九;三十"; 
Dn=Dn.split(";"); 

dayim=dayiy; 
    
var total=new Array(13); 
total[0]=parseInt(dpm[0]); //<!–取得total的值，用来计算农历的日期和月份–>
for (i=1;i<dpm.length-1;i++) total[i]=parseInt(dpm[i])+total[i-1]; 
for (i=dpm.length-1;i>0;i--) 
if (dayim>total[i-1]){ 
dayim=dayim-total[i-1]; 
miy=i; 
} 
bsWeek=ww; 
bsDate=yy+"年"+mm+"月"; 
bsDate2=dd; 
bsYear="农历"+Yn[iyear]; //<!–取得农历的年份–>
bsYear2=Mn[miy-2]+Dn[dayim-1]; //<!—将农历的月份和日分解一个新的变量–>  //这里用来获取农历月日的参数计算有错误，暂未更正

if (ss>=Ys[7]||ss<Ys[0]) bsYear=Yn[7]; 
function CAL(){ 
document.write("<table border='1' cellspacing='1' width='80' bordercolor='#000000' bgcolor='#FFFFFF' height='80' cellpadding='1'"); 
document.write("<tr><td align='center'><b><font color=#008040>"+bsDate+"</font><br><font face='Arial' size='5' color=#FF8040>"+bsDate2+"</font><br><font color=#008040><span style='font-size: 10px'>"); 
document.write(bsWeek+"</span><br>"+"</b><font color=#9B4E00>"); 
document.write(bsYear+"<br>"+bsYear2+"</td></tr></table>"); 
} 
//--> 

CAL();