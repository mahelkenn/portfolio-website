// Create event listener to resize and change color of links when mouse is over them //
const link = document.querySelectorAll("#link");

link.forEach(function(l, index) {
    l.addEventListener("mouseover", function() {
        l.style.color = "#5EB0B6";
        l.style.fontSize = "1.1em";
    });
    l.addEventListener("mouseleave", function() {
        l.style.color = "white";
        l.style.fontSize = "1em";    
    });
});

// Create event listeners to resize responsive web design image during mouse over, only at tablet and higher size //
const responsive = document.querySelector("#portfolio");
const mediaQuery = window.matchMedia('(min-width: 768px)');

responsive.addEventListener("mouseover", function() {
    if (mediaQuery.matches) {
        responsive.style.width = "800px";
        responsive.style.height = "auto";
        };
    });

responsive.addEventListener("mouseleave", function() {
    if (mediaQuery.matches) {
        responsive.style.width = "400px";
        responsive.style.height = "auto";
        };
    });