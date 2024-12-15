document.addEventListener("DOMContentLoaded", () => {
  const mybutton = document.getElementById("btn-back-to-top");

  // Show or hide button on scroll
  window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "flex";
      } else {
          mybutton.style.display = "none";
      }
  };

  // Scroll to top when button is clicked
  mybutton.addEventListener("click", () => {
      document.body.scrollTop = 0; // Safari
      document.documentElement.scrollTop = 0; // Other browsers
  });
});
