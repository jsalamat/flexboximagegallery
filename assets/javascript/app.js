// select all .panels
const panels = document.querySelectorAll('.panel');

// function to toggle the panels class
function toggleOpen() {
	this.classList.toggle('open');
}
// for each panel listen event on click

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// for each panel to loop over and listen click to run toggleOpen function
// the reason it not toggleOpen() because it would run on page load
// toggleOpen is just a reference to function 
// when click to look for function and run