// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

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

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
     // Animations
ScrollReveal().reveal(".top_nav", {
        origin: 'bottom',
      distance: '20px',
      opacity: 0,
     });
 ScrollReveal().reveal(".nav", {
        origin: 'bottom',
      distance: '20px',
      opacity: 0,
      delay: 300,
     }); 
     ScrollReveal().reveal(".header", {
        origin: 'bottom',
      distance: '20px',
      opacity: 0,
      delay: 400,
     });   
     ScrollReveal().reveal(".section", {
        origin: 'bottom',
      distance: '20px',
      opacity: 0,
      duration:1000,
      delay: 500,
     });
     ScrollReveal().reveal(".footer", {
        origin: 'bottom',
      distance: '20px',
      opacity: 0,
      duration: 1000,
      delay: 100,
     });