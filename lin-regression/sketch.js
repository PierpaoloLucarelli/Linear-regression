
var x = [400,700,656,342,787,900,232,111,543,753,842,387,234,423,642,472,124,853,423,864,100,12,45,234,542,745,123,123,456,763,345,323,89,988,532];
var y = [500,608,506,323,894,980,125,50,467,720,930,500,123,543,765,323,323,676,434,745,543,65,300,343,232,343,788,125,456,865,345,323,23,654,655];
var sumX = 0;
var sumY = 0;	
var xsq = 0;
var ysq = 0;
var xy = 0;
var n = x.length;
var point1;
var point2;

function setup() {
  // put setup code here
  createCanvas(1000,1000);
  linearRegression();
}

function draw() {
  // put drawing code here
  translate(10, 980);
  background(51);
  drawGraphLines(980);

  // draw points
  fill(0,255,100);
  ellipse(point1[0],-point1[1], 8, 8);
  ellipse(point2[0],-point2[1], 8, 8);
  stroke(255);
  strokeWeight(4);
  line(point1[0], -point1[1], point2[0], -point2[1])
  //randomise();
}

function drawGraphLines(len){
	stroke(255);
	strokeWeight(1);
	line(0, 0, len, 0)
	line(0, -len, 0, 0)
	for (var i = 40 ; i < 1000 ; i+=40){
		line(i,-10,i,0);
		line(0,-i,10,-i);
	}
	fill(250,80,200);
	noStroke();
	for(var i = 0 ; i < x.length ; i++){
		ellipse(x[i],-y[i],8,8);
	}
}

// linear regression forumala y = a + bx
// b = r * (Sy / Sx)
// a = meanY - b * meanX

function linearRegression(){
	var b = slope();
	var a = intercept(b);
	// calculate two points
	point1 = [10,getPoint(10,a,b)];
	point2 = [900,getPoint(900,a,b)];
}

function corr(){
	for(var i = 0 ; i < x.length ; i++){
		sumX += x[i];
		sumY += y[i];
		xsq += x[i] ** 2;
		ysq += y[i] ** 2;
		xy += x[i]*y[i];
	}
	var top = (n * xy) - (sumX * sumY);
	var bottom = Math.sqrt(n * xsq - (sumX**2)) * Math.sqrt(n * ysq - (sumY**2));
	return top / bottom;
}

function slope(){
	var r = corr();
	var meanY = sumY/n;
	var meanX = sumX/n;
	return r * (meanY / meanX);
}

function intercept(b){
	return (sumY/n) - (b * (sumX/n));
}

function getPoint(x,a,b){
	return a + b * x;
}

function randomise(){
	for(var i = 0 ; i < x.length ; i++){
		x[i] = x[i] + random(-x[i],x[i]);
		y[i] = y[i] + random(-y[i],y[i]);
	}
}



