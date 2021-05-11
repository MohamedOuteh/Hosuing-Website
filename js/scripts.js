menuToggler.addEventListener('click', ev => {
	menuToggler.classList.toggle('open');
});

for (const element of document.querySelectorAll('nav a')) {
	element.addEventListener('click', ev => {
		menuToggler.classList.remove('open');
	});
}


const checkConfirmation = (ev) => {
 if (myEmail.value & myQuery.value) {
  myConfirmation.setCustomValidity("Wait. What? This is not correct, please enter valid data");
 } else {
  myConfirmation.setCustomValidity('Your query has been sent');
 }
};

myEmail.addEventListener('input', checkConfirmation);
myQuery.addEventListener('input', checkConfirmation);
