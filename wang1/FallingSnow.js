
var t = TweenLite;
var allowSnowMovement = true;

// The star of every good animation
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

var transforms = ["transform", 
                  "msTransform", 
                  "webkitTransform", 
                  "mozTransform", 
                  "oTransform"];
                   
var transformProperty = getSupportedPropertyName(transforms);

// Array to store our Snowflake objects
var snowflakes = [];

// Global variables to store our browser's window size
var bannerWidth = 300+50;
var bannerHeight = 250+50;

// Specify the number of snowflakes you want visible
var numberOfSnowflakes = 120;

// Flag to reset the position of the snowflakes
var resetPosition = false;

//
// It all starts here...
//
function setup() {
	window.addEventListener("DOMContentLoaded", generateSnowflakes, false);
	//window.addEventListener("resize", setResetFlag, false);
}
setup();

//
// Vendor prefix management
//
function getSupportedPropertyName(properties) {
    for (var i = 0; i < properties.length; i++) {
        if (typeof document.body.style[properties[i]] != "undefined") {
            return properties[i];
        }
    }
    return null;
}

//
// Constructor for our Snowflake object
//
function Snowflake(element, scale, opacity, rotation, speed, xPos, yPos) {

	// set initial snowflake properties
    this.element = element;
    this.scale = scale;
    this.opacity = opacity;
    this.rotation = rotation;
    this.speed = speed;
    this.xPos = xPos;
    this.yPos = yPos;
	
	// declare variables used for snowflake's motion
    this.counter = 0;
    this.sign = Math.random() < 0.5 ? 1 : -1;
	
	// setting an initial scale, opacity, rotation for the snowflake
    //t.set(this.element, {scaleX:scale, scaleY:scale, opacity:opacity, rotation:rotation});
    t.set(this.element, {opacity:opacity});
}

//
// The function responsible for actually moving our snowflake
//
Snowflake.prototype.update = function () {

	// using some trigonometry to determine our x and y position
    this.counter += this.speed / 5000;
    this.xPos += this.sign * this.speed * Math.cos(this.counter) / 40;
    this.yPos += Math.sin(this.counter) / 40 + this.speed / 30;

	// setting our snowflake's position
    setTranslate3DTransform(this.element, this.rotation, this.scale, Math.round(this.xPos), Math.round(this.yPos));
    
    // if snowflake goes below the browser window, move it back to the top
    if (this.yPos > bannerHeight) {
    	this.yPos = -50;
    }
}

//
// A performant way to set your snowflake's position
//
function setTranslate3DTransform(element, rotation, scale, xPosition, yPosition) {
    this.scale = scale;
    this.rotation = rotation;
   // var val = "rotate(" + rotation + "deg) scale(" + scale + ") translate3d(" + xPosition/scale + "px, " + yPosition/scale + "px" + ", 0)";
    var val = "scale(" + scale + ") translate3d(" + xPosition/scale + "px, " + yPosition/scale + "px" + ", 0)";
    element.style[transformProperty] = val;
}

//
// The function responsible for creating the snowflake
//
function generateSnowflakes() {
	
	// get our snowflake element from the DOM and store it
   // var originalSnowflake = document.querySelector(".snowflake");
    
    // access our snowflake element's parent container
    //var snowflakeContainer = originalSnowflake.parentNode;
    
    // get our browser's size
	//bannerWidth = document.documentElement.clientWidth;
    //bannerHeight = document.documentElement.clientHeight;
	        
    // create each individual snowflake
    for (var i = 0; i < numberOfSnowflakes; i++) {


        // get our snowflake element from the DOM and store it
        var randFlakeID = Math.floor(Math.random()*5)+1;
        var originalSnowflake = document.querySelector(".snowflake"+randFlakeID);
        
        // access our snowflake element's parent container
        var snowflakeContainer = originalSnowflake.parentNode;
    
    	// clone our original snowflake and add it to snowflakeContainer
        var snowflakeCopy = originalSnowflake.cloneNode(true);
        snowflakeContainer.appendChild(snowflakeCopy);

		// set our snowflake's initial position and related properties
        var initialXPos = getPosition(50, bannerWidth);
        var initialYPos = getPosition(50, bannerHeight);
        var speed = 5+Math.random()*40;
        var scale = .10+Math.random()*.25;
        var opacity = .2 + Math.random()*.9;
        var rotation = Math.random()*360;
        
        // create our Snowflake object
        var snowflakeObject = new Snowflake(snowflakeCopy, 
        									scale, 
                                            opacity,
                                            rotation,
        									speed, 
        									initialXPos, 
        									initialYPos);
        snowflakes.push(snowflakeObject);

    }
    
    // remove the original snowflake because we no longer need it visible
	snowflakeContainer.removeChild(originalSnowflake);
	
	// call the moveSnowflakes function every 30 milliseconds
    moveSnowflakes();
}

//
// Responsible for moving each snowflake by calling its update function
//
function moveSnowflakes() {
    for (var i = 0; i < snowflakes.length; i++) {
        var snowflake = snowflakes[i];
        snowflake.update();
    }
    
	// Reset the position of all the snowflakes to a new value
    if (resetPosition) {
    	//bannerWidth = document.documentElement.clientWidth;
	    //bannerHeight = document.documentElement.clientHeight; 
	    
		for (var i = 0; i < snowflakes.length; i++) {
	        var snowflake = snowflakes[i];
	        
	        snowflake.xPos = getPosition(5, bannerWidth);
	        snowflake.yPos = getPosition(50, bannerHeight);
	    }
	    
	    resetPosition = false;
    }
    
    if (allowSnowMovement) requestAnimationFrame(moveSnowflakes);
}

//
// This function returns a number between (maximum - offset) and (maximum + offset)
//
function getPosition(offset, size) {
	return Math.round(-1*offset + Math.random() * (size+2*offset));
}

//
// Trigger a reset of all the snowflakes' positions
//
function setResetFlag(e) {
	resetPosition = true;
}