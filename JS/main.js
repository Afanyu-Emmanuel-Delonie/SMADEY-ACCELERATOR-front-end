function openProfile() {
  document.getElementById("myDropdown").classList.toggle("active");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/*
let sideBar = document.querySelector(".side-bar");

document.querySelector("#menu-btn").onclick = () => {
    sideBar.classList.toggle("active");
    
}*/

    let sideBar = document.querySelector(".M-side-bar");
    let menuBtn = document.querySelector("#M-menu-btn");


    // Add an event listener to the menu button to toggle the "active" class on the sidebar
    menuBtn.addEventListener("click", () => {
        sideBar.classList.toggle("active");
    });


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


//dark and light mood

const toggleButton = document.getElementById("dark-mode-toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mood");
});

//massages 
 function showReplyForm(button) {
        var replyForm = button.nextElementSibling;
        replyForm.style.display = 'block';
    }

    function submitReply(button) {
        var replyInput = button.previousElementSibling;
        var replyMessage = replyInput.value;
        // You can perform further actions here, like sending the reply to a server
        console.log('Reply:', replyMessage);
        // Reset the input field
        replyInput.value = '';
        // Hide the reply form
        var replyForm = button.parentNode;
        replyForm.style.display = 'none';
    }