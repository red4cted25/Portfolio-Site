const portfolioMarquee1 = document.getElementById("portfolio-text1");
animate(portfolioMarquee1);

function animate(element) {
    let elementWidth = element.offsetWidth;
    let parentWidth = element.parentElement.offsetWidth;
    let flag = 0;

    setInterval(() => { 
        element.style.marginLeft = --flag + "px";

        if (elementWidth == -flag) {
            flag = parentWidth;
        }
    }, 10);
}

let albumCovers = document.getElementsByClassName("albumcover");
let recordBox = document.getElementById("record-collection");

const factor = -350;
for (var i = 0; i < albumCovers.length; i++) {
    albumCovers[i].style.left = (factor + (i * factor) + "px");
    albumCovers[i].style.zIndex = "" + 19 - i + "";
}

// Modal Functions 
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function openModal() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}