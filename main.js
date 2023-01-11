function setup(){
    canvas = createCanvas(640,480);
    
    video = createCapture(VIDEO)
    video.hide()
    tintColor = "";
}
function draw(){
    image(video,0,0,640,480)
    tint(tintColor)
}
function takeSnapShot(){
    save('filtro.png');
}

function filterTint(){
    tintColor = document.getElementById("colorName").value;
}