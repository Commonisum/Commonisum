document.addEventListener("DOMContentLoaded", function() {
  const tabLinks = document.querySelectorAll(".tablink");
  const tabContents = document.querySelectorAll(".tabcontent");

  // Show the home tab by default
  document.getElementById("home").style.display = "block";
  document.querySelector('.tablink[data-tab="home"]').classList.add("active");

  tabLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const tabId = this.getAttribute("data-tab");
      
      // Hide all tabs
      tabContents.forEach(content => {
        content.style.display = "none";
      });
      
      // Remove active state from all links
      tabLinks.forEach(link => link.classList.remove("active"));
      
      // Show selected tab and add active class
      document.getElementById(tabId).style.display = "block";
      this.classList.add("active");
    });
  });
});
