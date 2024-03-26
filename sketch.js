var scl = 20;
var h = 0;

function setup() {
  //size(600,600,P3D);
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  stroke(255);
  strokeWeight(0.4);
  //noFill();
}




function draw() {
  clear();
  background(0);
  stroke(255);
  strokeWeight(0.4);
  //noFill();
  rotateX(PI/3);
  translate(-900,-900)
  let yoff = h;
  h-=0.05
  windowWidth
  for(let y = 0; y < windowWidth/scl; y++) {
    let xoff = 0;
    beginShape(TRIANGLE_STRIP);
    for(let x = 0; x < windowWidth/scl;x++) {
      let z1 = map(noise(xoff,yoff),0,1,0,300);
      let z2 = map(noise(xoff,yoff+0.1),0,1,0,300)
      //stroke(z1)
      noStroke()
      fill(z1-50)
      vertex(x*scl,y*scl,z1);
      fill(z2-50)
      //stroke(z2)
      noStroke()
      vertex(x*scl,(y+1)*scl,z2);
      xoff+=0.1;
    }
    yoff+=0.1;
    endShape();
  } 
  
}
  