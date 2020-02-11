var $ = document;

let c1 =  $.getElementById("color1");
let c2 = $.getElementById("color2");
let body = $.getElementById("gradient");
let target = $.querySelector("h3");

console.log(color1, color2);


function setGradient() {
    body.style.background =
    "linear-gradient(to right,"+ color1.value  + "," + color2.value + ")";
    target.textContent = body.style.background + ";";

    

}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);