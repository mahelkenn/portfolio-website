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

// Create event listener to resize portfolio images when mouse is over them //
const portfolio = document.querySelectorAll("#portfolio");

portfolio.forEach(function(image, index) {
    image.addEventListener("mouseover", function() {
        image.style.width = "500px";
        image.style.height = "auto";
    });
    image.addEventListener("mouseleave", function() {
        image.style.width = "400px";
        image.style.height = "auto";
    });
});