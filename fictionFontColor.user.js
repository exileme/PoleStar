// ==UserScript==
// @name         Add font color
// @namespace    PoleStar
// @version      0.1
// @description  为自己所看小说页面字体添加字体颜色
// @author       PoleStar
// @include      *://www.zhaishuyuan.com/*
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var divId=$('#content');
    if(divId.length==1){
       // alert("hello world");
        divId.attr("style","font-size:26px;font-family:'黑体';color:#00F");
    }
    // Your code here...
})();