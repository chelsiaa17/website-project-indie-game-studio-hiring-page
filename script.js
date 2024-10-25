document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      
      const targetElement = document.querySelector(this.getAttribute("href"));
      
      // Calculate the position 10vh (10% of viewport height) above the target element
      const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight * 0.1);
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });
  