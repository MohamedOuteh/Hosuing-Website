menuToggler.addEventListener('click', ev =>{
  menuToggler.classList.toggle('open');
  menuToggler.textcontent = menuToggler.textcontent === "X" ? "≡" : "X";
});

for(const element of document.querySelectorAll('nav a')){
  element.addEventListener('click', ev => {
    menuToggler.classList.remove('open');
  });
}


function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

function myFunction1(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandImg");
  // Get the image text
  var imgText = document.getElementById("imtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

function myFunction2(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandIm");
  // Get the image text
  var imgText = document.getElementById("imtex");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}
