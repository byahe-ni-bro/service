// RESPONSIVE

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// LOADER

  document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
          "#loader").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};

// SCROLL NAVBAR CHANGE

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 50) {
      document.getElementById("logo").style.backgroundColor = "blue";
    } 
    else {
        document.getElementById("logo").style.fontSize = "0px";
    }
  }

// Zoom Image

function enlargeImage(image) {
  var body = document.body;
  body.style.overflow = "hidden";

  var enlargedImage = document.querySelector(".enlarged-image");
  var img = enlargedImage.querySelector("img");
  img.src = image.src;
  enlargedImage.style.display = "block";
  overflow = "hidden"

  document.getElementById("header").style.fontSize = "14px";
  document.getElementById("header").style.height = "0px";
  document.getElementById("header").style.overflow = "hidden";
}

function hideImage() {
  var body = document.body;
  body.style.overflow = "visible";

  var enlargedImage = document.querySelector(".enlarged-image");
  enlargedImage.style.display = "none";

  document.getElementById("header").style.fontSize = "14px";
  document.getElementById("header").style.height = "140px";
  document.getElementById("header").style.overflow = "hidden";
}