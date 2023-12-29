var fired=0;

// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixel
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    if (sec == 0 & fired==0){
        clocklog();
        setInterval(clocklog,60000);
        fired+=1;
    }
    
    background(240);
    textSize(32);

    for (i=0;i<2;i++){
        for(j=0;j<12;j++){
            noStroke();
            if(12*i+j<hr){
                fill('#192f6b');
            }
            else {
                fill(150);
            }
            square(10+60*j,60+60*i,50);
        }
    }

    for (i=0;i<15;i++){
        for(j=0;j<4;j++){
            noStroke();
            if(15*j+i<min){
                fill('#4565ba');
            }
            else{
                fill(150);
            }
            square(10+45*i,220+45*j,35);
        }
    }

    for (i=0;i<20;i++){
        for(j=0;j<3;j++){
            noStroke();
            if(20*j+i<sec){
                fill('#8ca6ed');
            }
            else{
                fill(150);
            }
            square(10+32.5*i,447.5+32.5*j,25);
        }
    }
    
}

function clocklog(){
    console.log(minute());
}



