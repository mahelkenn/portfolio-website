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
})