var myButton = document.querySelector("button");
var str = document.querySelector('input');

function isEmail(){  
    var myReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/; 
    if(myReg.test(str.value)) return true; 
    return false;
    }

myButton.onclick = function() {
    if(isEmail() == true) alert('订阅成功！');
    alert('wrong address!');
}