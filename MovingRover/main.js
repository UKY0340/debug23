canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_x = 90;
rover_y = 180;

rover_width = 80;
rover_height = 90;

backgroundImage ="mars.jpg";
rover_Image ="rover.png";

function Add()
 {
backgroundImage_tag = new Image();
backgroundImage_tag.onload = uploadbackground;
backgroundImage_tag.src = backgroundImage;

roverImage_tag = new Image();
roverImage_tag.onload = uploadrover;
roverImage_tag.src = rover_Image;

}
function uploadbackground()
{
ctx.drawImage(backgroundImage_tag,0,0,canvas.width,canvas.height)
}

function uploadrover()
{
ctx.drawImage(roverImage_tag,rover_x,rover_y,rover_width,rover_height)   
}


window.addEventListener("keydown",mykeydown)
function mykeydown(e)
{
keypress =e.keyCode;
console.log(keypress)
if (keypress == "38") {
    up();
    console.log("up is pressed")
}
if (keypress =="40")
{
    down();
    console.log("down is pressed")
}
if (keypress = "37")
{

Left();
console.log("left is presses")

}
if (keypress == "39")
{
    right();
    console.log("right is pressed")

}

}
function up(){
if (rover_y >= 0)
{
  rover_y = rover_y-10;
 console.log("When up arrow is pressed, X="+rover_x+" | y="+rover_y);
 uploadbackground();
 uploadrover();
 } }
 function down(){
    if (rover_y <= 600)
    {
      rover_y = rover_y+10;
     console.log("When down arrow is pressed, X="+rover_x+" | y="+rover_y);
     uploadbackground();
     uploadrover();
    }}
 
//  ctx.drawImage(roverImage_tag,rover_x,rover_y,rover_width,rover_height);
 function Left()
{

    if (rover_x >= 0)
    {
      rover_x = rover_x-10;
     console.log("When left arrow is pressed, X="+rover_x+" | y="+rover_y);
     uploadbackground();
     uploadrover();
     }


}
 function right(){
    if (rover_x <= 800)
    {
      rover_x = rover_x+10;
     console.log("When right arrow is pressed, X="+rover_x+" | y="+rover_y);
     uploadbackground();
     uploadrover();
    }}


















