// ==UserScript==
// @name         百度文库提取文字
// @namespace    http://tampermonkey.net/
// @version      1.5.5
// @description  提取非pdf格式的内容到一个浮动窗口方便复制
// @author       shanmite
// @match        https://wenku.baidu.com/view/*
// @grant        none
// ==/UserScript==
// time 2:01 2020/6/15
(function () {
    'use strict';
    window.onload = function () {
        //生成一个区域
        var div_1_style = "z-index: 9999999;position: fixed;top: 20%;right: 0;border: 1px solid #000;border-radius: 10px;overflow: hidden;;width: 600px;height: 400px;box-shadow: rgb(0, 0, 0) 0px 0px 6px;background-color: white;"
        var div_1 = addElement("div", "1", div_1_style);
        document.body.appendChild(div_1);
        //在区域内放一个拖动区
        var div_2_style = "width: 100%;height: 35px;text-align: center;line-height: 35px;font-size: 20px;background-color: grey;top: 0;cursor:move"
        var div_2 = addElement("div", "", div_2_style);
        div_2.innerText = "提取文字";
        div_1.appendChild(div_2);
        //生成文本域
        var textarea_style = "width: 100%;height: 332px;background-color: white;border: 0;resize:none"
        var textarea = addElement("textarea", "", textarea_style);
        div_1.appendChild(textarea);
        //绑定点下事件
        div_2.onmousedown = move;

        function move() {
            var e = event || window.event;
            var dx = e.clientX - parseInt(div_1.offsetLeft);
            var dy = e.clientY - parseInt(div_1.offsetTop);
            document.onmousemove = function () {
                var e = event || window.event;
                var x = e.clientX - dx;
                var y = e.clientY - dy;
                div_1.style.left = x + "px";
                div_1.style.top = y + "px";
            }
            document.onmouseup = function () {
                e.onmousedown = null;
                document.onmousemove = null;
            }
        }
        //底部栏
        var div_3_style = "width: 100%;";
        var div_3 = addElement("div", "", div_3_style);
        div_1.appendChild(div_3);

        //生成提取按钮
        var btn_style = "border: 1px solid #000;border-radius: 5px;margin: 5px;padding: 3px;box-shadow: rgb(0, 0, 0) 0px 0px 6px;background-color: #fff;outline: none;cursor: pointer"
        var button_1 = addElement("button", "", btn_style);
        button_1.innerText = "提取主要内容";
        div_3.appendChild(button_1);
        button_1.onclick = function () {
            var con = document.getElementsByClassName("reader-word-layer")
            var text = "";
            if (con.length == 0) {
                text = "无法提取pdf内的内容"
            }
            else {
                for (var i = 0; i < con.length; i++) {
                    var t = con[i].innerText;
                    text = text + t;
                }
            }
            text = text.replace(/\s+/g,'\r\n');
            textarea.value = text;
        }
        //放大字的按钮
        var fontsize = 14;
        var button_2 = addElement("button", "", btn_style);
        button_2.setAttribute("style", btn_style);
        button_2.innerText = "字体变大";
        div_3.appendChild(button_2);
        button_2.onclick = function () {
            fontsize = fontsize + 1;
            textarea.style.fontSize = fontsize + "px";
        }
        //缩小字
        var button_3 = addElement("button", "", btn_style);
        button_3.setAttribute("style", btn_style);
        button_3.innerText = "字体变小";
        div_3.appendChild(button_3);
        button_3.onclick = function () {
            fontsize = fontsize - 1;
            textarea.style.fontSize = fontsize + "px";
        }
        //拖动区内生成关闭按钮
        var btn_0_style = "float: right;border: 1px solid #000;border-radius: 5px;margin: 5px;padding: 5px;background-color: #fff;outline: none;cursor: pointer"
        var button_0 = addElement("button", "", btn_0_style);
        button_0.setAttribute("title", "关闭");
        div_2.appendChild(button_0);
        button_0.onclick = function () {
            alert("确定关闭？想好了？");
            div_1.style.display = "none";
        }
    }
    //追加元素
    function addElement(e, id, style) {
        var box = document.createElement(e);
        box.setAttribute("style", style);
        box.setAttribute("id", id);
        return box;
    }
})();