// Set the date we're counting down to
var countDownDate = new Date("Dec 23, 2025").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Output the result in an element with id="demo"
document.getElementById("demo").innerHTML =
days +
"&nbsp" +
"Days " +
hours +
"&nbsp" +
"Hours " +
"<br>" +
minutes +
"&nbsp" +
"min. " +
seconds +
"&nbsp" +
"sec. ";

// If the count down is over, write some text
if (distance < 0) {
clearInterval(x);
document.getElementById("demo").innerHTML = "It's Christmas EVE EVE!";
}
}, 1000);

const images = [
  './images/Photo Shoot - Year 2/E3.jpg', 
'./images/Photo Shoot - Year 1/HiRes_0436224860169.jpg',
'./images/Photo Shoot - Year 3/P2.jpg', 
'./images/Photo Shoot - Year 2/P2.jpg',
'./images/Photo Shoot - Year 4/P22-7dad4.jpg',
'./images/Photo Shoot - Year 5/IMG_5038.JPG',
'./images/Photo Shoot - Year 6/IMG_6951 copy.jpg', 
'./images/Photo Shoot - Year 9/80778548_784782378664639_7962141202323603456_n.jpg', 
'./images/Photo Shoot - Year 8/IMG_3203.JPG', 
'./images/Photo Shoot - Year 7/DSC07807.jpg',
'./images/YEAR11/DSC_3136.jpg', 
'./images/Photo Shoot - Year 1/HiRes_0436224860110.jpg', 
'./images/Photo Shoot - Year 4/P17-558ea.jpg', 
'./images/Photo Shoot - Year 5/IMG_5044.JPG', 
'./images/Photo Shoot - Year 6/IMG_7007 copy.jpg',
'./images/Photo Shoot - Year 6/IMG_7027 copy.jpg', 
'./images/Photo Shoot - Year 9/81443300_784781891998021_558752116810711040_n.jpg', 
'./images/Photo Shoot - Year 7/DSC07883-2.jpg', 
'./images/Photo Shoot - Year 2/P8.jpg', 
'./images/Photos2023/DSC_2007.jpg',
'./images/Photo Shoot - Year 1/HiRes_0436224860193.jpg', 
'./images/YEAR11/DSC_3144.jpg', 
'./images/Photo Shoot - Year 8/IMG_3225.JPG', 


];

const today = new Date().getDate();
const calendar = document.getElementById('calendar');

for (let i = 1; i <= 23; i++) {
  const day = document.createElement('div');
  day.textContent = i;

  if (i <= today) {
      day.addEventListener('click', () => {
          day.classList.toggle('open');
      });
      if (i === today) {
          day.classList.add('current-day');
      }
  } else {
      day.style.cursor = 'not-allowed';
      day.style.opacity = '0.5';
  }

  const img = document.createElement('img');
  img.src = images[i - 1];
  day.appendChild(img);

  calendar.appendChild(day);
}


//Snowflakes//

// Array to store our Snowflake objects
let snowflakes = [];

// Global variables to store our browser's window size
let browserWidth;
let browserHeight;

// Specify the number of snowflakes you want visible
let numberOfSnowflakes = 50;

// Flag to reset the position of the snowflakes
let resetPosition = false;

// Handle accessibility
let enableAnimations = false;
let reduceMotionQuery = matchMedia("(prefers-reduced-motion)");

// Handle animation accessibility preferences
function setAccessibilityState() {
  if (reduceMotionQuery.matches) {
    enableAnimations = false;
  } else {
    enableAnimations = true;
  }
}
setAccessibilityState();

reduceMotionQuery.addListener(setAccessibilityState);

//
// It all starts here...
//
function setup() {
  if (enableAnimations) {
    window.addEventListener("DOMContentLoaded", generateSnowflakes, false);
    window.addEventListener("resize", setResetFlag, false);
  }
}
setup();

//
// Constructor for our Snowflake object
//
class Snowflake {
  constructor(element, speed, xPos, yPos) {
    // set initial snowflake properties
    this.element = element;
    this.speed = speed;
    this.xPos = xPos;
    this.yPos = yPos;
    this.scale = 1;

    // declare variables used for snowflake's motion
    this.counter = 0;
    this.sign = Math.random() < 0.5 ? 1 : -1;

    // setting an initial opacity and size for our snowflake
    this.element.style.opacity = (0.1 + Math.random()) / 3;
  }

  // The function responsible for actually moving our snowflake
  update(delta) {
    // using some trigonometry to determine our x and y position
    this.counter += (this.speed / 5000) * delta;
    this.xPos += (this.sign * delta * this.speed * Math.cos(this.counter)) / 40;
    this.yPos += Math.sin(this.counter) / 40 + (this.speed * delta) / 30;
    this.scale = 0.5 + Math.abs((10 * Math.cos(this.counter)) / 20);

    // setting our snowflake's position
    setTransform(
      Math.round(this.xPos),
      Math.round(this.yPos),
      this.scale,
      this.element
    );

    // if snowflake goes below the browser window, move it back to the top
    if (this.yPos > browserHeight) {
      this.yPos = -50;
    }
  }
}

//
// A performant way to set your snowflake's position and size
//
function setTransform(xPos, yPos, scale, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) scale(${scale}, ${scale})`;
}

//
// The function responsible for creating the snowflake
//
function generateSnowflakes() {
  // get our snowflake element from the DOM and store it
  let originalSnowflake = document.querySelector(".snowflake");

  // access our snowflake element's parent container
  let snowflakeContainer = originalSnowflake.parentNode;
  snowflakeContainer.style.display = "block";

  // get our browser's size
  browserWidth = document.documentElement.clientWidth;
  browserHeight = document.documentElement.clientHeight;

  // create each individual snowflake
  for (let i = 0; i < numberOfSnowflakes; i++) {
    // clone our original snowflake and add it to snowflakeContainer
    let snowflakeClone = originalSnowflake.cloneNode(true);
    snowflakeContainer.appendChild(snowflakeClone);

    // set our snowflake's initial position and related properties
    let initialXPos = getPosition(50, browserWidth);
    let initialYPos = getPosition(50, browserHeight);
    let speed = (5 + Math.random() * 40) * delta;

    // create our Snowflake object
    let snowflakeObject = new Snowflake(
      snowflakeClone,
      speed,
      initialXPos,
      initialYPos
    );
    snowflakes.push(snowflakeObject);
  }

  // remove the original snowflake because we no longer need it visible
  snowflakeContainer.removeChild(originalSnowflake);

  requestAnimationFrame(moveSnowflakes);
}

//
// Responsible for moving each snowflake by calling its update function
//
let frames_per_second = 60;
let frame_interval = 1000 / frames_per_second;

let previousTime = performance.now();
let delta = 1;

function moveSnowflakes(currentTime) {
  delta = (currentTime - previousTime) / frame_interval;

  if (enableAnimations) {
    for (let i = 0; i < snowflakes.length; i++) {
      let snowflake = snowflakes[i];
      snowflake.update(delta);
    }
  }

  previousTime = currentTime;

  // Reset the position of all the snowflakes to a new value
  if (resetPosition) {
    browserWidth = document.documentElement.clientWidth;
    browserHeight = document.documentElement.clientHeight;

    for (let i = 0; i < snowflakes.length; i++) {
      let snowflake = snowflakes[i];

      snowflake.xPos = getPosition(50, browserWidth);
      snowflake.yPos = getPosition(50, browserHeight);
    }

    resetPosition = false;
  }

  requestAnimationFrame(moveSnowflakes);
}

//
// This function returns a number between (maximum - offset) and (maximum + offset)
//
function getPosition(offset, size) {
  return Math.round(-1 * offset + Math.random() * (size + 2 * offset));
}

//
// Trigger a reset of all the snowflakes' positions
//
function setResetFlag(e) {
  resetPosition = true;
}
