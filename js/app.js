/* --------------------------------------------------------------------------------------------------
Imports
---------------------------------------------------------------------------------------------------*/

/* --------------------------------------------------------------------------------------------------
Variables
---------------------------------------------------------------------------------------------------*/
var contactForm = document.querySelector("#kontakt form");
var selectAdults = document.querySelector("#adults");
var selectChildren = document.querySelector("#children");

/* --------------------------------------------------------------------------------------------------
functions
---------------------------------------------------------------------------------------------------*/
function pickRecipient() {
    contactForm.action = "https://formsubmit.co/"+event.target.value;
}

function addNameFields() {
	var inputFields, newInput;

	inputFields = document.getElementsByClassName(event.target.id);
	if (event.target.value === 0) {
		inputFields.length = 0;
	}

	while (event.target.value > inputFields.length){
		newInput = document.createElement("input");
		newInput.type = "text";
		newInput.className = event.target.id;
		newInput.name = event.target.id;
		newInput.placeholder = "Name";
		newInput.required = true;
		document.querySelector("#"+event.target.id).after(newInput);
	}

	while (event.target.value < inputFields.length){
		inputFields[inputFields.length-1].remove();
	}
}

function activateScroll() {
    var osm = document.querySelector("#osm");
    var mapCta = document.querySelector("#map-cta");
    osm.classList.remove("no_scroll");
    mapCta.remove();
}

function deactivateScroll() {
    var osm = document.querySelector("#osm");
    osm.classList.add("no_scroll");
}


function init() {
    contactForm[0].addEventListener("change", pickRecipient, false);
	selectAdults.addEventListener("change", addNameFields, false);
	if (selectChildren) {
		selectChildren.addEventListener("change", addNameFields, false);
	}
	document.body.addEventListener("click", activateScroll, false);
	window.addEventListener("scroll", deactivateScroll, false);
}

/* --------------------------------------------------------------------------------------------------
public members, exposed with return statement
---------------------------------------------------------------------------------------------------*/
window.app = {
    init
};

app.init();
