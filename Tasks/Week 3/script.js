document.addEventListener("DOMContentLoaded", function () {
  // HEADER SCROLL EFFECT
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.site-header');
    if(window.scrollY > 8) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });

  // Fake search field JS
  const headerSearch = document.getElementById("headersearch");
  const fakeSearchBtn = document.getElementById("fakeSearchBtn");

  if (headerSearch) {
    headerSearch.addEventListener("focus", function () {
      this.style.border = "2px solid #7d5f44";
    });
    headerSearch.addEventListener("blur", function () {
      this.style.border = "1px solid #dde5ef";
    });
  }
  if (fakeSearchBtn && headerSearch) {
    fakeSearchBtn.addEventListener("click", function () {
      headerSearch.style.border = "2px solid #7d5f44";
      setTimeout(() => {
        headerSearch.style.border = "1px solid #dde5ef";
      }, 600);
    });
  }

  // Add to cart fake alerts
  const addBtns = document.querySelectorAll(".btn");
  addBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const productName = this.parentElement.querySelector("h1")?.innerText || "Item";
      alert(productName + " added to cart ");
    });
  });

  // Contact page feedback
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you for contacting us!');
      this.reset();
    });
  }
});

document.addEventListener("DOMContentLoaded", function(){
  const hash = window.location.hash.replace('#','');
  if(hash) {
    document.querySelectorAll('.pd-product-layout').forEach(sec => sec.style.display='none');
    const showSection = document.getElementById(hash);
    if (showSection) {
      showSection.style.display = 'flex'; // Or block, as per your CSS
    }
  }
});
