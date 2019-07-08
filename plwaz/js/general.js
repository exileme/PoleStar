var arrCSS=[
    ["<img src='images/lan.gif' width='16' height='8' class='themes' alt='红色'>","css/css1.css"],
    ["<img src='images/cheng.gif' width='16' height='8' class='themes' alt='橙色'>","css/css2.css"],
    ["<img src='images/huang.gif' width='16' height='8' class='themes' alt='黄色'>","css/css3.css"],
    ["<img src='images/lv.gif' width='16' height='8' class='themes' alt='绿色'>","css/css4.css"],
    ["<img src='images/hong.gif' width='16' height='8' class='themes' alt='蓝色'>","css/css5.css"],
	["<img src='images/ding.gif' width='16' height='8' class='themes' alt='啶色'>","css/css6.css"],
    ["<img src='images/zi.gif' width='16' height='8' class='themes' alt='紫色'>","css/css7.css"],
    ["<img src='images/hei.gif' width='16' height='8' class='themes' alt='黑色'>","css/css8.css"],
    ""
];


// *** function to replace href="#" ***
function v(){
	return;
}

// *** Cookies ***
function writeCookie(name, value){ 
	exp = new Date(); 
	exp.setTime(exp.getTime() + (86400 * 1000 * 30));
	document.cookie = name + "=" + escape(value) + "; expires=" + exp.toGMTString() + "; path=/"; 
} 

function readCookie(name){ 
	var search; 
	search = name + "="; 
	offset = document.cookie.indexOf(search); 
	if (offset != -1) { 
		offset += search.length; 
		end = document.cookie.indexOf(";", offset); 
		if (end == -1){
			end = document.cookie.length;
		}
		return unescape(document.cookie.substring(offset, end)); 
	}else{
		return "";
	}
}


////////////////////////////////////
// StyleSheet
////////////////////////////////////
function writeCSS(){
  for(var i=0;i<arrCSS.length;i++){
    document.write('<link title="css'+i+'" href="'+arrCSS[i][1]+'" rel="stylesheet" disabled="true" type="text/css" />');
  }
    setStyleSheet(readCookie("stylesheet"));
}

function writeCSSLinks(){
  for(var i=0;i<arrCSS.length-1;i++){
    if(i>0) document.write('  ');
    document.write('<a href="javascript:v()" onclick="setStyleSheet(\'css'+i+'\')">'+arrCSS[i][0]+'</a>');
  }
}

function setStyleSheet(strCSS){
  var objs=document.getElementsByTagName("link");
  var intFound=0;
  for(var i=0;i<objs.length;i++){
    if(objs[i].type.indexOf("css")>-1&&objs[i].title){
      objs[i].disabled = true;
      if(objs[i].title==strCSS) intFound=i;
    }
  }
  objs[intFound].disabled = false;
  writeCookie("stylesheet",objs[intFound].title);
}

writeCSS();
setStyleSheet(readCookie("stylesheet"));
