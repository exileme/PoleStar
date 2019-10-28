// ==UserScript==
// @name         Add font color
// @namespace    PoleStar
// @version      0.2
// @description  为自己所看小说页面字体添加字体颜色
// @author       PoleStar
// @include      *://www.zhaishuyuan.com/*
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var url = window.location.host;
    var divId=$('#content');//zhaishuyuan
    if(url.indexOf('zhaishuyuan')!=-1){
        if(divId.length==1){
            // alert("hello world");
            divId.attr("style","font-size:26px;font-family:'黑体';color:#00F");
        }
    }
    // Your code here...
})();