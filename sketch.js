

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b11,b12,b13,b14,b15,b16,b17;
var base,g1,g2;
var b111,b112,b113,b114,b115,b116,b117, b121,b122,b123,b131;
var striker,slingshot,strikerImg,backgroundImg;
var bg = 'pink'

function preload(){
getBackgroundImage()
  strikerImg = loadImage("polygon.png")
}

function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    b11 = new Box(510,520,30,40);
    b12 = new Box(540,520,30,40);
    b13 = new Box(570,520,30,40);
    b14 = new Box(600,520,30,40);
    b15 = new Box(630,520,30,40);
    b16 = new Box(660,520,30,40);
    b17 = new Box(690,520,30,40);

    b21= new Box(540,500,30,40);
    b22= new Box(570,500,30,40);
    b23= new Box(600,500,30,40);
    b24= new Box(630,500,30,40);
    b25= new Box(660,500,30,40);

    b31 = new Box(570,480,30,40);
    b32 =new Box(600,480,30,40);
    b33 = new Box(630,480,30,40);

    b41 = new Box(600,460,30,40);


    //2nd layer

    b111= new Box(800,250,30,40);
    b112= new Box(830,250,30,40);
    b113= new Box(860,250,30,40);
    b114= new Box(890,250,30,40);
    b115= new Box(910,250,30,40);

    b121 = new Box(830,230,30,40);
    b122 =new Box(860,230,30,40);
    b123 = new Box(890,230,30,40);

    b131 = new Box(860,210,30,40);
    
    


    base = new Ground(600,590,1200,20)
    g1 = new Ground(600,540,250,10)
    g2 = new Ground(860,270,200,10)



    striker = Bodies.circle(50,200,20);
    World.add(world,striker)

    slingshot = new Slingshot(this.striker,{x:200,y:200})
}

function draw(){
  if(bg){
background(bg);
  }
    
  
    Engine.update(engine);
    base.display();
    g1.display();
    g2.display();
    fill('lightblue');
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();

    fill('pink');
    b21.display() 
    b22.display()
    b23.display()
    b24.display()
    b25.display()
    
    fill('lightgreen');
    b31.display() 
    b32.display()
    b33.display()

    fill('gray')
    b41.display()


    //2nd layer
    fill('lightblue');
    b111.display();
    b112.display();
    b113.display();
    b114.display();
    b115.display();

    fill('pink');
    b121.display();
    b122.display();
    b123.display();

    fill('lightgreen');
    b131.display();


    imageMode(CENTER)
    image(strikerImg,striker.position.x,striker.position.y,50,50)

}
function mouseDragged(){
  Matter.Body.setPosition(striker, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  //console.log(hour);

  if (hour >= 06 && hour <= 18) {
    bg = "purple"
  } else {
    bg = "pink"
  }
  scale(1.5)
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}