document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      
      const targetElement = document.querySelector(this.getAttribute("href"));
      const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - (window.innerHeight * 0.1);
      
      window.scrollTo({
        top: offsetPosition
      });
    });
  });
  