  //Nav-bar hamburger functionality 

  const menuLinks = document.querySelectorAll(".menu-link");
  const mobileMenu = document.getElementById("mobile-menu")

  document.getElementById("mobile-menu-toggle").addEventListener("click", function() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
    
  })

  menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          mobileMenu.classList.toggle("hidden")
        });
      });

 
  
  // Back to top button
  document.addEventListener("DOMContentLoaded", function () {
    var backToTopBtn = document.getElementById("back-to-top-btn");

    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";} 
      else {
        backToTopBtn.style.display = "none";}
    });

    backToTopBtn.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });
