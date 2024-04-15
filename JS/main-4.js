
const searchBox = document.querySelector('.home-menu');

document.querySelector('#search').onclick = () => {
    searchBox.classList.toggle('active');
}
const navBar = document.querySelector("#nav");

document.querySelector("#menu").onclick = () => {
    navBar.classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll(".animate-text");

  function checkViewport() {
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);

      if (isVisible) {
        element.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkViewport);
  window.addEventListener("resize", checkViewport);

  // Trigger on page load
  checkViewport();
});


//FAQ's 
document.addEventListener('DOMContentLoaded', function() {
  var dropdownBtns = document.querySelectorAll('.dropdown-btn');

  dropdownBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
        this.querySelector('.toggle-btn').innerText = '+';
      } else {
        content.style.display = 'block';
        this.querySelector('.toggle-btn').innerText = '-';
      }
    });
  });
});


  let sideBar = document.querySelector(".nav-links ul");
    let menuBtn = document.querySelector("#menu-btn");


    // Add an event listener to the menu button to toggle the "active" class on the sidebar
    menuBtn.addEventListener("click", () => {
        sideBar.classList.toggle("active");
        console.log("clicked")
    });




document.addEventListener('DOMContentLoaded', function() {
  var dropdownBtns = document.querySelectorAll('.dropdown-btn');

  dropdownBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
        this.querySelector('.toggle-btn').innerText = '+';
      } else {
        content.style.display = 'block';
        this.querySelector('.toggle-btn').innerText = '-';
      }
    });
  });
});



const navLinks = document.querySelector('.nav-items ul');

document.querySelector('#homeMenu').onclick = () => {
  navLinks.classList.toggle('active');
  console.log("clicked")
}




