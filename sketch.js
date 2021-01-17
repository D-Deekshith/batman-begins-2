const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bruce,bruceImg;
var engine,world;
var rain;
var maxDrops = 150;
var drops = [];
var s1,s2,s3,s4;
var visibility = 255;
var thunderframe;
var thunderbolt;
var num;

function preload(){
    s1 = loadImage('1.png');
    s2 = loadImage('2.png');
    s3 = loadImage('3.png');
    s4 = loadImage('4.png');
    
    bruceImg = loadAnimation('images/p8.png','images/p7.png','images/p6.png','images/p5.png','images/p4.png','images/p3.png','images/p2.png','images/p1.png')
}

function setup(){
    createCanvas(1000,700);

    engine = Engine.create();
    world = engine.world;

    bruce = new Umbrella(500,530);

    if(frameCount%150===0){
        for(var i=0;i<maxDrops;i++){
            drops.push(new Rain(random(0,1000),random(0,1000)))            
        }
        }

}

function draw(){
    background(0);
    Engine.update(engine);

    if(frameCount % 200===0){
        thunderframe=frameCount;  
        thunderbolt=createSprite(random(100,900),random(50,150),10,10);
        num=Math.round(random(1,4)); 
        switch(num){
            case 1: thunderbolt.addImage("thunder",s1);
                break;
            case 2: thunderbolt.addImage("thunder",s2);
                break;
            case 3: thunderbolt.addImage("thunder",s3);
                break;
            case 4: thunderbolt.addImage("thunder",s4);
                break;
            default:  break;
        }
        //randomizing thunderbolt
        thunderbolt.scale=0.6;
    }
    
    //destorying thunderbolt after 10 frames from its creation frame count
    if(thunderframe+10===frameCount && thunderbolt){
        thunderbolt.destroy();
    }

    drawSprites();

    bruce.display();

    for(i=0;i<maxDrops;i++){
        drops[i].display();
        drops[i].updateY(); 
       }
}