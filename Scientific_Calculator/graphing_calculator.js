//JavaScript code for the graphing calculator here
var canvas = document.getElementById('myCanvas'),
    c = canvas.getContext('2d'),

    //n is the number of segments used to create the line of the equation on the graph
    n = 100,

    //define the math "window"
    xMin = -10,
    xMax = 10,
    yMin = -10,
    yMax = 10,

    math = mathjs(),
    expr = 'sin(x)',
    scope = {x: 0},
    tree = math.parse(expr, scope);

    drawCurve();

 
function drawCurve(){
     //these are used for the for loop
    var i,
    
    //these vary between xMin and xMax and yMin and yMax
    xPixel,yPixel,

    //these vary between 0 and 1
    percentX, percentY,

    //these are in math coordinates.
    mathX, mathY;


    c.beginPath();
    for(i = 0; i < n; i++){
        percentX = i / (n-1);

        mathX = percentX * (xMax - xMin) + xMin;

        mathY = evaluateMathExpr(mathX);

        percentY = (mathY - yMin) / (yMax - yMin); 


        xPixel = percentX * canvas.width;
        yPixel = percentY * canvas.height;
        c.lineTo(xPixel,yPixel);
    }
    c.stroke();
}

function evaluateMathExpr(mathX){
    scope.x = mathX;
    return tree.eval();
}


    //c.strokeStyle = 'Blue';  default color is black
    //c.lineWidth = 10;        default size is 1 pixel
    


function goBack() {
    // Close the current tab (go back to the main calculator)
    window.close();
  }
  