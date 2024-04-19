const portfolioMarquee1 = document.getElementById("portfolio-text1");
// const portfolioMarquee2 = document.getElementById("portfolio-text2");
// const portfolioMarquee3 = document.getElementById("portfolio-text3");
// const portfolioMarquee4 = document.getElementById("portfolio-text4");
animate(portfolioMarquee1);
// animate(portfolioMarquee2);
// animate(portfolioMarquee3);
// animate(portfolioMarquee4);

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