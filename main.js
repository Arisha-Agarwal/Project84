canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);

if((keyPressed>=48 && keyPressed<=57) || (keyPressed>=48 && keyPressed<=57))
{
    document.getElementById("d1").innerHTML="You pressed a number key";
    console.log("number");
}
else if((keyPressed>=97 && keyPressed<=122)|| (keyPressed>=65 && keyPressed<=90))
{
    document.getElementById("d1").innerHTML="You pressed an alphabet key";
    console.log("alphabet key");
}
}
