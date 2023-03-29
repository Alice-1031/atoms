
let bg, c1, c2, c3,r,g,b;
//let x, y, d, xdir, ydir;
let particles = [];

function setup() {

  frameRate(30);
  createCanvas(windowWidth, windowHeight);
  //bg = color(random(0, 255), random(0, 255), random(0, 255));
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  bg = color(r,g,b);
  c1 = color((r*0.5)%255,(g*0.5)%255,(b*0.5)%255,200);
  //c2 = color(random(0, 255), random(0, 255), random(0, 255),200);
  //c3 = color(random(0, 255), random(0, 255), random(0, 255),200);

}



function draw() {

  background(bg);

  for (var i = 0; i < 25; i++) {
    var p = new Particle();
    particles.push(p);
    fill(c1);
    particles[i].show();
    particles[i].update();
  
  }

  /*if(frameCount < 1){
    particles.forEach(Particle => {
    if      (this.d < 40) { fill(c1); }
    else if (this.d < 50) { fill(c2); }
    else if (this.d <= 60) { fill(c3); }

  });
}*/


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved(){



}

