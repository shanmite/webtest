function f() {
    document.getElementById("ok").innerHTML="スクショ";
    document.getElementById("pic").src="images/aquashion.jpg"
}
function f2() {
    document.getElementById("ok").innerHTML="图片";
    document.getElementById("pic").src="images/盐水.jpg"
}
$(document).ready(function(){
    $("#korone").click(
        function () {
            if (document.getElementById("korone").attributes["src"].value=="images/korone0.png") {
                document.getElementById("korone").src="images/korone1.png"
                document.getElementById("korone").title="あ~!↗あ~!↗あ~!↗"
            } else {
                document.getElementById("korone").src="images/korone0.png"
                document.getElementById("korone").title="ほら見てほらよ"
            }
        }
    )
});