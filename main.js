var mouseEvent="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var last_position_of_x,last_position_of_y;
color="Blue";
widthOfLine=1;

canvas.addEventListener("mousedown",myMousedown);
function myMousedown(e){
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave(e){
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",myMousemove);
function myMousemove(e){

    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthOfLine;
        
        ctx.moveTo(last_position_of_x,last_position_of_y);

        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);

        ctx.stroke();
    }

    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}

