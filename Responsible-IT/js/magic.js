
function setup() {
    createCanvas(1980, 650);
    blendMode(MULTIPLY)
  }

  function draw() {
    // background(220);
    variableTriangle(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  function variableTriangle(x,y,px,py){
  let speed = abs(x - px) + abs(y - py);
    l = speed
    colors = ['rgba(255,204,0,0.7)', 'rgba(0,0,170,0.6)']
    var randomInteger =  Math.round(Math.random());
    fillColor = colors[randomInteger];
    noStroke()
    fill(fillColor)
    rightTriangle = [x,y,x,y-l,x+l*Math.sqrt(2),y- l/2]
    leftTriangle = [x,y,x,y-l,x-l*Math.sqrt(2), y-l/2]
    var triangleType = Math.round(Math.random());
    if (triangleType == 0)
      triangle(leftTriangle[0], leftTriangle[1], leftTriangle[2], leftTriangle[3], leftTriangle[4], leftTriangle[5])
    else
      triangle(rightTriangle[0], rightTriangle[1], rightTriangle[2], rightTriangle[3], rightTriangle[4], rightTriangle[5])
  
  }