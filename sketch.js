let h = [];
let h_num = 300

let c = [];
let c_num = 300

let heart_img

function preload(){
    heart_img = loadImage('images/heart.png')
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    for(let i=0; i<h_num; i++){
        h[i] = new hearts(random(0, width), random(0, height), 40, 40, random(0.1, 10), color(random(99, 255), random(99, 255), random(99,255)));
    for(let i=0; i<c_num; i++)
        c[i] = new candy(random(0, width), random(0, height), 40, 40, random(0.1, 10), color(random(99, 255), random(99, 255), random(99,255)));
    }
}

function draw(){
    background(255, 199, 225);
    if (mouseX < width/2){
        for(let i=0; i<h_num; i++){
            h[i].display()
            h[i].move()
        }
    }else{
        for(let i=0; i<c_num; i++){
            c[i].display()
            c[i].move()
        }
    }
}

class hearts{
    constructor(tempX, tempY, tempW, tempH, tempSpeed, tempShade){
        this.x = tempX;
        this.y = tempY;
        this.w = tempW;
        this.h = tempH;
        this.speed = tempSpeed;
        this.shade = tempShade;
    }

    move(){
        this.x = this.x + this.speed;
        if(this.x > width){
            this.x = 0;
        }
    }

    display(){
        fill(this.shade)
        image(heart_img, this.x, this.y, this.w, this.h);
    }
}

class candy{
    constructor(tempX, tempY, tempW, tempH, tempSpeed, tempShade){
        this.x = tempX;
        this.y = tempY;
        this.w = tempW;
        this.h = tempH;
        this.speed = tempSpeed;
        this.shade = tempShade
    }

    move(){
        this.y = this.y + this.speed;
        if(this.y > height){
            this.y = 0;
        }
    }

    display(){
        ellipse(this.x, this.y, this.w, this.h);
        fill(this.shade)
    }
}