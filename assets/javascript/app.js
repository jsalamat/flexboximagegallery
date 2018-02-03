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

function toggleActive(e) {
	console.log(e.propertyName)
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
// listen for transitionend event and toggleActive function
// this will have multiple transitionend event fired
// ^^ to figure it out -  put e for event and console log the event
// when transition finish it will tell what transition

// Summary
// listen for click on each panel - it will toggle open in css
// after that finishes it trigger transitionend and then toggle open-active