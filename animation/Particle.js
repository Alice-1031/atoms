class Particle {

    constructor() {
      this.d = random(30, 60);
      this.x = random(this.d * 0.5, width - this.d * 0.5);
      this.y = random(this.d * 0.5, height - this.d * 0.5);
      this.xdir = random(-3, 3) + 2;
      this.ydir = random(-3, 3) + 2;
      this.paired = false;
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
  
      //this.x += this.xdir;
      //this.y += this.ydir;
  
      this.x = +(this.x + this.xdir).toFixed(2);
      this.y = +(this.y + this.ydir).toFixed(2);
  
    }
  
    show() {
  
  
      noStroke();
      if(this.d < 40){fillStyle(c1);}
      if(this.d < 50){fillStyle(c2);}
      if(this.d <= 60){fillStyle(c3);}

  
      ellipse(this.x, this.y, this.d, this.d);
    }
  
    checkParticles(particles) {
  
  
      const minDist = 50;
      for (let i = 0; i < particles.length; i++) {
      const other = particles[i];
      if (other === this) continue;
      const dis = dist(this.x, this.y, other.x, other.y);
      if (dis < minDist && dis > 0) {
        const dx = (other.x - this.x) / dis;
        const dy = (other.y - this.y) / dis;
        this.xdir += dx * 0.05;
        this.ydir += dy * 0.05;
      }
  
  
      /*particles.forEach(Particle => {
        const dis = dist(this.x, this.y, Particle.x, Particle.y)
        // if (dis < 50 && dis > 0 && Particle.paired == false && this.paired == false) {
        if (dis < 50 && dis > 0) {
          const dx = (Particle.x - this.x) / dis;
          const dy = (Particle.y - this.y) / dis;
          this.xdir += dx * 0.05;
          this.ydir += dy * 0.05;
        }
  
        if (dis < this.d / 2 + Particle.d / 2 && Particle.paired == false && this.paired == false) {
          // particles are almost overlapping, pair them up
          this.xdir = 2;
          this.ydir = 2;
          Particle.xdir = this.xdir;
          Particle.ydir = this.ydir;
          this.paired = true;
          Particle.paired = true;
      }
  
      });*/
    }
  
  }
  }//Particle class