class Particle {

    constructor() {
      this.d = random(30, 60);
      this.x = random(this.d * 0.5, width - this.d * 0.5);
      this.y = random(this.d * 0.5, height - this.d * 0.5);
      this.xdir = random(-3, 3);
      this.ydir = random(-3, 3);
      this.distanceCheckCounter = 0;
     
    }
    
    update() {
      this.checkParticles(particles);
      
      if (this.x > width - this.d * 0.5) {
        this.x = width - this.d * 0.5;
        this.xdir *= -1;
      }
      if (this.x < this.d * 0.5) {
        this.x = 0 + this.d * 0.5;
        this.xdir *= -1;
      }
      if (this.y > height - this.d * 0.5) {
        this.y = height - this.d * 0.5;
        this.ydir *= -1;
      }
      if (this.y < this.d * 0.5) {
        this.y = 0 + this.d * 0.5;
        this.ydir *= -1;
      }
  
      this.x += this.xdir;
      this.y += this.ydir;

      const speed = Math.sqrt(this.xdir * this.xdir + this.ydir * this.ydir);
       if (speed > 4) {
       this.xdir = (this.xdir / speed) *4;
      this.ydir = (this.ydir / speed) * 4;
      }
    }
  
    show() {
      noStroke();
      
      ellipse(this.x, this.y, this.d, this.d);
    }
  
    checkParticles(particles) {

      
      this.distanceCheckCounter++;
      if (this.distanceCheckCounter % 3 === 0) { // check distance every 3 frames
        for (let i = 0; i < particles.length; i++) {
          const otherParticle = particles[i];
          if (otherParticle === this) continue; //avoid checking the particle with itself
          
          const dx = otherParticle.x - this.x;
          const dy = otherParticle.y - this.y;
          const disSquared = dx * dx + dy * dy;
          const mx = mouseX - (this.x + this.d);
          const my = mouseY - (this.y + this.d);
          const sq = mx*mx + my*my
          if(sq < 1600){
            this.xdir += (mx/10);
            this.ydir += (my/10);
            otherParticle.xdir -= (mx/10);
            otherParticle.ydir -= (my/10);
            break;
            
          }else if (disSquared < 2500 ) {//this ensures we only check and modify for dist < 50 and greatly improve performance
            const dis = sqrt(disSquared); //sqrt is computationally expensive
            const dirX = dx / dis;
            const dirY = dy / dis;
            this.xdir += dirX * 0.05;
            this.ydir += dirY * 0.05;
            //otherParticle.xdir -= dirX * 0.05;
            //otherParticle.ydir -= dirY * 0.05;
          }

          
        }//for
      }//if
    
    }

  }
  

      //old checkParticles terrible performance due to use of dist function
    /*particles.forEach(Particle => {
        const dis = dist(this.x, this.y, Particle.x, Particle.y)
        // if (dis < 50 && dis > 0 && Particle.paired == false && this.paired == false) {
        if (dis < 50 && dis > 0) {
          const dx = (Particle.x - this.x) / dis;
          const dy = (Particle.y - this.y) / dis;
          this.xdir += dx * 0.05;
          this.ydir += dy * 0.05;
        })*/