// Set the date we're counting down to
var countDownDate = new Date("Dec 23, 2024").getTime();

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

// Advent //
document.addEventListener('DOMContentLoaded', () => {
  const days = document.querySelectorAll('.day');
  const today = new Date().getDate(); // Current day of the month

  // Image URLs for each day
  const images = [
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 2/E3.jpg', 
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 1/HiRes_0436224860169.jpg',
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 3/P2.jpg', 
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 2/P2.jpg',
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 4/P22-7dad4.jpg',
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 5/IMG_5038.JPG',
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 6/IMG_6951 copy.jpg', 
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 9/80778548_784782378664639_7962141202323603456_n.jpg', 
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 8/IMG_3203.JPG', 
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 7/DSC07807.jpg',
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/YEAR11/DSC_3136.jpg', 
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 1/HiRes_0436224860110.jpgg', 
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 4/P17-558ea.jpg', 
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 5/IMG_5044.JPG', 
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 6/IMG_7007 copy.jpg',
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 6/IMG_7027 copy.jpg', 
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 9/81443300_784781891998021_558752116810711040_n.jpg', 
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 7/DSC07883-2.jpg', 
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 2/P8.jpg', 
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photos2023/DSC_2007.jpg',
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 1/HiRes_0436224860193.jpg', 
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/YEAR11/DSC_3144.jpg', 
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 7/DSC07921-2.jpg', 
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photos2023/DSC_2125.jpg', 
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/YEAR11/DSC_3132.jpg',
    '/Users/markluoma/Documents/MarksMacbookEve/eveve/images/Photo Shoot - Year 1/HiRes_0436224860011.jpg'
  ];

  // Add click event listener to each day
  days.forEach((day, index) => {
    const dayNumber = index + 1;
    const img = document.createElement('img');
    img.src = images[index];
    img.alt = `Day ${dayNumber} Image`;
    day.appendChild(img);

    if (dayNumber <= today) {
      day.addEventListener('click', () => {
        day.classList.toggle('revealed');
      });
    } else {
      day.classList.add('locked');
      day.title = "This day is not yet available!";
    }
  });
});
