function f() {
    document.getElementById("ok").innerHTML="スクショ";
    document.getElementById("pic").src="html/images/aquashion.jpg"
}
function f2() {
    document.getElementById("ok").innerHTML="图片";
    document.getElementById("pic").src="html/images/盐水.jpg"
}
$(document).ready(function(){
    $("#korone").click(
        function () {
            if (document.getElementById("korone").attributes["src"].value=="html/images/korone0.png") {
                document.getElementById("korone").src="html/images/korone1.png"
                document.getElementById("button1").title="あ~!↗あ~!↗あ~!↗"
            } else {
                document.getElementById("korone").src="html/images/korone0.png"
                document.getElementById("button1").title="ほら見てほらよ"
            }
        }
    )
});