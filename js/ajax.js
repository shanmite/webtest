function ajax() 
{
    $.ajax({
        type: "POST",
        url: "php/test.php",  //输入的php文件
        data: "text=" + $("#text").val() ,  // 等号前后不要加空格
        error: function () {
            alert("请求错误")
        },
        success: function (msg) {  //请求成功后的回调函数
        document.getElementById("post").innerHTML=msg;
        }
    });
    

    // $.ajax({
    //     type: "post",
    //     url: "php/test.php",
    //     data:"$('#fm').serialize()",//提交到demo.php的数据
    //     dataType: "json",//回调函数接收数据的数据格式
    //     success: function (msg) {
    //         $('#post').empty();   //清空Text里面的所有内容
    //         var data = '';
    //         if (msg != '') {
    //             data = eval("(" + msg + ")");    //将返回的json数据进行解析，并赋给data
    //         }
    //         $('#post').html("text" + data.text);    //在#text中输出
    //         console.log(data);    //控制台输出
    //     },
    //     error: function (msg) {
    //         console.log(msg);
    //     }
    // });

    // $.ajax({  
    //         type: "POST",   //提交的方法
    //         url:"php/test.php", //提交的地址  
    //         data:"$('#fm').serialize()",// 序列化表单值  
    //         async: false,  
    //         error: function() {  //失败的话
    //             alert("Connection error");  
    //         },  
    //         success: function(data) {  //成功
    //             document.getElementById("post").innerHTML=date;  //就将返回的数据显示出来
    //         }
    //     });
};