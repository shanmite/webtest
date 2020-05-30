function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
if (IsPC()) {
    document.getElementById("view").content="";
    //win
}
var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        document.getElementById("css").href= "";
        //Android css
    } else if (u.indexOf('iPhone') > -1) {
        //苹果手机
    } else if (u.indexOf('Windows Phone') > -1) {
        //winphone手机
    }
function isWeiXin(){
        var ua = navigator.userAgent.toLowerCase();
        if(ua.indexOf('micromessenger') != -1) {
            return true;
        } else {
            return false;
        }
    }
if (isWeiXin()) {
    //微信
}