function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white")
}
function drawe(){
    strokeWeight(13)
    stroke("blue")
    if(mouseIsPressed){
        line(pmouseX, pmouseY,mouseX, mouseY)
    }
}
function limpiarLienzo(){
    background("white")
}