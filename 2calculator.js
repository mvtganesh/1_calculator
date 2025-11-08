function addition(){
    var num1=parseInt(document.getElementById("a1").value);
    var num2=parseInt(document.getElementById("a2").value);
    var num3=num1+num2;
    document.getElementById("a3").value=num3;
}


function sub(){
    var num1=parseInt(document.getElementById("a1").value);
    var num2=parseInt(document.getElementById("a2").value);
    var num3=num1-num2;
    document.getElementById("a3").value=num3;
}


function mul(){
    var num1=parseInt(document.getElementById("a1").value);
    var num2=parseInt(document.getElementById("a2").value);
    var num3=num1*num2;
    document.getElementById("a3").value=num3;
}


function div(){
    var num1=parseInt(document.getElementById("a1").value);
    var num2=parseInt(document.getElementById("a2").value);
    var num3=num1/num2;
    document.getElementById("a3").value=num3;
}


function rem(){
    var num1=parseInt(document.getElementById("a1").value);
    var num2=parseInt(document.getElementById("a2").value);
    var num3=num1%num2;
    document.getElementById("a3").value=num3;
}
function res(){
    document.getElementById("a3").value=0;
    location.reload()
}