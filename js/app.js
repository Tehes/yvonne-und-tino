/* --------------------------------------------------------------------------------------------------
Imports
---------------------------------------------------------------------------------------------------*/

/* --------------------------------------------------------------------------------------------------
Variables
---------------------------------------------------------------------------------------------------*/
var contactForm = document.querySelector("#kontakt form");
console.log(contactForm[0]);

/* --------------------------------------------------------------------------------------------------
functions
---------------------------------------------------------------------------------------------------*/
function pickRecipient() {
    contactForm.action = "https://formsubmit.co/"+event.target.value;
}


function init() {
    document.addEventListener("touchstart", function() {}, false);
    contactForm[0].addEventListener("change", pickRecipient, false);
}

/* --------------------------------------------------------------------------------------------------
public members, exposed with return statement
---------------------------------------------------------------------------------------------------*/
window.app = {
    init
};

app.init();
