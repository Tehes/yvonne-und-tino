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
		newInput.placeholder = "Name für Tischkarte";
		newInput.required = true;
		document.querySelector("#"+event.target.id).after(newInput);
	}
	
	while (event.target.value < inputFields.length){
		inputFields[inputFields.length-1].remove();
	}
}


function init() {
    contactForm[0].addEventListener("change", pickRecipient, false);
	selectAdults.addEventListener("change", addNameFields, false);
	selectChildren.addEventListener("change", addNameFields, false);
}

/* --------------------------------------------------------------------------------------------------
public members, exposed with return statement
---------------------------------------------------------------------------------------------------*/
window.app = {
    init
};

app.init();
