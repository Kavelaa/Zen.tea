var myButton = document.querySelector("button");
var str = document.getElementsByName("email").value;

function isEmail( st ){  
    var myReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/; 
    if(myReg.test(st)) return true; 
    return false;
    }

myButton.onclick = function() {
    if(isEmail(str) == true) alert('订阅成功！');
    alert('wrong address!');
}