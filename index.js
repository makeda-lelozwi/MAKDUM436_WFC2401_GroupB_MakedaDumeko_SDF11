const mobileMenu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelectorAll('.menu-link');

      mobileMenu.addEventListener('click', () => {
          document.body.classList.toggle('hidden');
      });

      mobileLinks.forEach(link => {
          link.addEventListener('click', () => {
              document.body.classList.remove('nav-open');
          })
      })
