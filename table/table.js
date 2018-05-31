var slider = document.getElementById("eyeRange");
var eyeoutput = document.getElementById("eyevalue");
eyeoutput.innerHTML = slider.value; // Display the default slider value
slider.oninput = function() {
    eyeoutput.innerHTML = this.value;
}// Update the current slider value (each time you drag the slider handle)


var slider = document.getElementById("earRange");
var earoutput = document.getElementById("earvalue");
earoutput.innerHTML = slider.value;
slider.oninput = function() {
    earoutput.innerHTML = this.value;
}

var slider = document.getElementById("noseRange");
var noseoutput = document.getElementById("nosevalue");
noseoutput.innerHTML = slider.value;
slider.oninput = function() {
    noseoutput.innerHTML = this.value;
}
var nose = noseoutput;

var slider = document.getElementById("mouthRange");
var mouthoutput = document.getElementById("mouthvalue");
mouthoutput.innerHTML = slider.value;
slider.oninput = function() {
    mouthoutput.innerHTML = this.value;
}


var slider = document.getElementById("heightRange");
var heightoutput = document.getElementById("heightvalue");
heightoutput.innerHTML = slider.value;
slider.oninput = function() {
    heightoutput.innerHTML = this.value;
}
