/* Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_overlay_text */
function showImage(which) {
    var ol = document.getElementById("overlay");
    var img = document.getElementById("in_overlay"); 
    ol.style.display = "block";
    img.src = which.src;

}

function hideImage() {
    var ol = document.getElementById("overlay");
    ol.style.display = "none";
}

function showVideo(which) {
    var ol = document.getElementById("overlay");
    var video = document.getElementById("in_overlay");
    ol.style.display = "block";
    video.src = which.src;
    video.type = which.type;
}

function hideVideo() {
    var ol = document.getElementById("overlay");
    ol.style.display = "none";
}

/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top */
var scrollButton = document.getElementById("scroll");
var limit = window.innerHeight / 4;

window.onscroll = function() { 
	scrollButtonCtrl(); 
}

function scrollButtonCtrl() {
    if (document.body.scrollTop > limit || document.documentElement.scrollTop > limit) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    scrollButtonCtrl();
}

/* https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript */
function checkEmail() {
    const regex  = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var input = document.getElementById("email");
    var res = document.getElementById("result");
    if(regex.test(input.value.toLowerCase()) == true) {
        res.innerHTML = "Email successfully recorded.";
        res.style.color = "green";  
    } else {
        res.innerHTML = "Invalid email address.";
        res.style.color = "red";
    }
}