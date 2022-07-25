const topButton = document.getElementById("back-to-top");
if (topButton)
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  };

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {  items: 1, },
      600: { items: 2,  },
      1000: {  items: 3, },
    },
  });
});
