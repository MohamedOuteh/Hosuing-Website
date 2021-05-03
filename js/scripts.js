menuToggler.addEventListener('click', ev => {
	menuToggler.classList.toggle('open');
});

for (const element of document.querySelectorAll('nav a')) {
	element.addEventListener('click', ev => {
		menuToggler.classList.remove('open');
	});
}


const expandImg = document.getElementById("expandedImg");
const imgtext = document.getElementById("imgtext");
expandImg.addEventListener('click', myFunction);
imgtext.addEventListener('click', myFunction);

function myFunction(imgs){
  // Get the expanded image
  const expandImg = document.getElementById("expandedImg");
  // Get the image text
  const imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

const closebtn = document.getElementById("closebtn");
closebtn.addEventListener("click", function(){
	this.parentElement.style.display='none';
});



function myFunction1(imgs) {
  // Get the expanded image
  const expandImg = document.getElementById("expandImg");
  // Get the image text
  const imgText = document.getElementById("imtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

const image = document.getElementById("expandImg");
const text = document.getElementById("imtext");
image.addEventListener("click", myFunction1);
text.addEventListener("click", myFunction1);

const close = document.getElementById("close");
close.addEventListener("click", function(){
	this.parentElement.style.display='none';
});

function myFunction2(imgs) {
  // Get the expanded image
  const expandImg = document.getElementById("expandIm");
  // Get the image text
  const imgText = document.getElementById("imtex");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

const expandIm = document.getElementById("expandIm");
const imtex = document.getElementById("imtex");
expandIm.addEventListener("click", myFunction2);
imtex.addEventListener("click", myFunction2);

const buttonclose = document.getElementById("buttonclose");
buttonclose.addEventListener("click", function(){
	this.parentElement.style.display='none';
});
