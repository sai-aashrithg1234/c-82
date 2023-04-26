var me="empty";
var lpx,lpy;
canvas=document.getElementById(myCanvas);
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;
canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e)
{
    me="mousedown";
}

canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e)
{
    me="mousemove";
cp_mouseX=e.clientX-canvas.offsetLeft;

cp_mouseY=e.clientY-canvas.offsetRight;
ctx.beginpPath();
ctx.strokestyle=color;
ctx.lineWidth=width_of_line;
}

canvas.addEventListener("mouseup",mymouseup);

function mymouseup(e)
{
    me="mouseup";
}

canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(e)
{
    me="mouseleave";
}