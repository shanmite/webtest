$(document).ready(function () {
    $("#test1").click(function () { 
        $.getJSON("https://api.live.bilibili.com/live_user/v1/UserInfo/get_weared_medal",
            function (data) {
                var items = [];
                $.each(data, function (key, val) {
                    items.push('<li id="' + key + '">' + val + '</li>');
                });
                $('<ul/>', {
                    'class': 'my-new-list',
                    html: items.join('')
                }).appendTo('body');
            }
        );
        // jQuery.getJSON(url,data,success(data,status,xhr))
        // $.ajax({
        // type: "get",
        // url: "https://api.live.bilibili.com/live_user/v1/UserInfo/get_weared_medal",
        // data: "data",
        // dataType: "json",
        // error: function () { 
        //     alert("错误")
        // },
        // success: function (response) {
        //     alert (response)
        // }
        // });
});
})