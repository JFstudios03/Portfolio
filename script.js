function hamburger(){
    const navBar =  document.querySelector(".nav-bar");
    const one = document.querySelector(".one");
    const two = document.querySelector(".two");
    const three = document.querySelector(".three");
    navBar.classList.toggle("active");
    one.classList.toggle("open");
    two.classList.toggle("open");
    three.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const iCode = document.getElementById("icode");

    iCode.addEventListener("mouseenter", function() {
        // Toggle the CSS class to apply the new background and gradient
        body.classList.add("iCodehover");
    });

    iCode.addEventListener("mouseleave", function() {
        // Remove the CSS class to reset the background and gradient
        body.classList.remove("iCodehover");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const iDesign = document.getElementById("idesign");

    iDesign.addEventListener("mouseenter", function() {
        // Toggle the CSS class to apply the new background and gradient
        body.classList.add("iDesignhover");
    });

    iDesign.addEventListener("mouseleave", function() {
        // Remove the CSS class to reset the background and gradient
        body.classList.remove("iDesignhover");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const iEdit = document.getElementById("iedit");

    iEdit.addEventListener("mouseenter", function() {
        // Toggle the CSS class to apply the new background and gradient
        body.classList.toggle("iEdithover");
    });

    iEdit.addEventListener("mouseleave", function() {
        // Remove the CSS class to reset the background and gradient
        body.classList.remove("iEdithover");
    });
});



const drop1 = document.querySelector(".drop1");
const drop2 = document.querySelector(".drop2");
const drop3 = document.querySelector(".drop3");
const sign1 = document.querySelector(".sign1");
const sign2 = document.querySelector(".sign2");
const sign3 = document.querySelector(".sign3");

function tab1(){
    let sign = drop1.classList.toggle("active"); 
    drop2.classList.remove("active");
    drop3.classList.remove("active");

    sign2.textContent = "+";
    sign3.textContent = "+";

    if (sign == true) {
        sign1.textContent = "-"
    } else{
        sign1.textContent = "+"
    }
}
function tab2(){
    drop1.classList.remove("active");
    let sign = drop2.classList.toggle("active");
    drop3.classList.remove("active");

    sign1.textContent = "+";
    sign3.textContent = "+";

    if (sign == true) {
        sign2.textContent = "-"
    } else{
        sign2.textContent = "+"
    }
}
function tab3(){
    drop1.classList.remove("active");
    drop2.classList.remove("active");
    let sign = drop3.classList.toggle("active");

    sign2.textContent = "+";
    sign3.textContent = "+";

    if (sign == true) {
        sign3.textContent = "-"
    } else{
        sign3.textContent = "+"
    }
}