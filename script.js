function setup(){
 createCanvas(800,600);
}
function draw(){
    // background("white")
    // fill("orange");
    // circle(400, 300, 50);
    // fill("black");
    // circle(400, 290, 13);
    // fill("black");
    // circle(410, 300, 10);
    // fill("white");
    // circle(400, 360, 100);
    // fill("orange");
    // circle(400, 360, 75);
    // fill("white");
    // circle(400, 360, 60);
    
    //roof
    fill("black");
    quad(10, 30, 255, 0, 520, 30);
    //main body
    fill("grey");
    quad(40, 30, 490, 30, 500, 250, 30, 250);
    //door
    fill("black");
    circle(255, 200, 100);
    //door contour
    fill("orange");
    circle(255, 200, 95);
    //door handle
    fill("black");
    circle(290, 200, 10);
    //windows
    c = 'white';    
    fill(c)
        //top windows
    square(90, 50, 50);
    square(180, 50, 50);
    square(310, 50, 50);
    square(400, 50, 50);
    square(400, 50, 50);
        //bottom window
    square(100, 150, 50);
    //garage door
    square(350, 150, 100);
    line(350, 160, 450, 160);
    line(350, 170, 450, 170);
    line(350, 180, 450, 180);
    line(350, 190, 450, 190);
    line(350, 200, 450, 200);
    line(350, 210, 450, 210);
    line(350, 220, 450, 220);
    line(350, 230, 450, 230);
    line(350, 240, 450, 240);
}
