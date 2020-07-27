// ==UserScript==
// @name         便于领瓜子
// @namespace    https://github.com/shanmite/webtest
// @version      1.14
// @description  解决直播间全屏时无法领瓜子和送辣条的痛点(^)0(^)
// @author       Shanmite
// @match        *://live.bilibili.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function (){
        fiexd("item z-gift-package",1);//包裹
        fiexd("treasure-box p-relative gift-left-part",2);//宝箱
        function fiexd (classname,pos){
            var child = document.getElementsByClassName(classname)[0];
            pos = 300+pos*100;
            var childStyle = "position: fixed;bottom:10%;left:"+pos+"px;z-index:999999999";
            child.setAttribute("style",childStyle);
            var par = document.getElementById("aside-area-vm");
            par.appendChild(child);
            child.onmousedown = move;
            function move() {
                var that = this;
                document.onselectstart=new Function ("return false");
                var e = event || window.event;
                var dx = e.clientX - parseInt(this.offsetLeft);
                var dy = e.clientY - parseInt(this.offsetTop);
                document.onmousemove = function () {
                    var e = event || window.event;
                    var x = e.clientX - dx;
                    var y = e.clientY - dy;
                    that.style.left = x + "px";
                    that.style.top = y + "px";
                }
                document.onmouseup = function () {
                    this.onmousemove = null;
                    this.onselectstart=new Function ("return ture");
                }
            }
        }
    }, 5000);//5s后执行，确保页面加载完毕
})();