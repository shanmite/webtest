<?php
// echo '输入的是: ' . $_POST['test'];
if ($_POST['text']==1917) {
    echo '验证成功';
}
else if ($_POST['text']=='') {
    echo '未输入';
}
else {
    echo '输入错误';
}
// . 号连接字符串
?>