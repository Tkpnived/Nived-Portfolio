function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", function() {
    var modeSwitchBtn = document.getElementById("mode-switch-btn");
    var body = document.body;

    modeSwitchBtn.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        // Save the current mode to localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }
    });

    // Function to set initial mode based on localStorage
    function setInitialMode() {
        var savedMode = localStorage.getItem("mode");
        if (savedMode === "dark") {
            body.classList.add("dark-mode");
        }
    }

    // Call the function to set initial mode
    setInitialMode();
});
