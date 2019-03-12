// Author: Humberto Luiz Rovina 
// Last update date: 12/20/2017 
// Update: 
// 				- Contact form validation

 

// ###############################################################
// Form Validation
function ContactValidation(){

	// QuerySelectors
	const CONTACT_FNAME = document.querySelector("#contact-fname").value;
	const CONTACT_LNAME = document.querySelector("#contact-lname").value;
	const CONTACT_EMAIL = document.querySelector("#contact-email").value;
	const CONTACT_COUNTRY = document.querySelector("#contact-country").value;
	const CONTACT_PHONE = document.querySelector("#contact-phone").value;
	const CONTACT_GENDER = document.getElementsByName("contact-gender");
	const CONTACT_METHOD = document.getElementsByName("contact-mtd");
	const CONTACT_MSG = document.querySelector("#contact-msg").value;

	// Variables declaration
	var contactGender;
	var contactMtd ="";
	var feedback = "Error List: ";
	var contactFlag = 0;
	var i = 0;
	var checkedBox = 0;

	// Name parameters
	var regName = /^[A-Za-z]+$/;
	var regNum = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
	var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

	// Check if name field is empty, if not check if its valid
	if(CONTACT_FNAME == "" || CONTACT_FNAME == null){
		feedback += ("\n\t- Please enter your first name before submitting the form.");
		contactFlag++;
	}else if(regName.test(CONTACT_FNAME)==false){
		feedback += ("\n\t- Enter a valid first name.");
		contactFlag++;
	}
	// Check if last name field is empty, if not check if its valid
	if(CONTACT_LNAME == ""|| CONTACT_LNAME == null){
		feedback += ("\n\t- Please enter your last name before submitting the form.");
		contactFlag++;
	}else if(regName.test(CONTACT_LNAME)==false){
		feedback += ("\n\t- Enter a valid last name.");
		contactFlag++;
	}
	// Check if email field is empty, if not check if its valid
	if(CONTACT_EMAIL == ""|| CONTACT_EMAIL == null){
		feedback += ("\n\t- Please enter email before submitting the form.");
		contactFlag++;
	}else{
		if(regEmail.test(CONTACT_EMAIL)==false){
			feedback += ("\n\t- Enter a valid email address (example@mail.com).");
			contactFlag++;
		}
	}

	// Check if any country was selected
	if(CONTACT_COUNTRY == "null" || CONTACT_COUNTRY == null){
		feedback += ("\n\t- Pelase enter one of the options for country.")
		contactFlag++;
	}

	// Check if any gender was selected
	if(CONTACT_GENDER == "null"){
		feedback += ("\n\t- Pelase enter one of the options for gender.")
		contactFlag++;
	}

	// Check if phone number is filled and if it is correct
	if (CONTACT_PHONE == "" || CONTACT_PHONE == null){
		feedback += ("\n\t- Pelase enter your phone.")
		contactFlag++;
	}else if(regNum.test(CONTACT_PHONE)==false){
		feedback += ("\n\t- Pelase enter a valid phone number.")
		contactFlag++;
	}

	// loop to go through all radio buttons checking wheter any was selected
	for(i = 0; i <= ((Number((CONTACT_GENDER.length))+1)); i++){
		
		if (i <= ((Number((CONTACT_GENDER.length))-1))) {
			if (CONTACT_GENDER[i].checked){
				contactGender = CONTACT_GENDER[i].value;
				break;
			}
		}
		if(i == ((Number((CONTACT_GENDER.length))+1))){
			feedback += ("\n\t- Pelase enter your gender.");
			contactFlag++;
		}
	}
	// loop to go through all checkboxes checking whether any was selected
	for(i = 0; i <= ((Number((CONTACT_METHOD.length))+1)); i++){
		
		if (i <= ((Number((CONTACT_METHOD.length))-1))) {
			if (CONTACT_METHOD[i].checked){
				contactMtd += CONTACT_METHOD[i].value;
				checkedBox++;
			}
		}
		// if one or more options were checked, end loop
		if (checkedBox >= 1 && i >= 1){
			break;
		}
		if(i == ((Number((CONTACT_METHOD.length))+1))){
			feedback += ("\n\t- Pelase enter your prefered contact method.");
			contactFlag++;
		}
	}
	// checking if any message was typed on text are
	if (CONTACT_MSG == "" || CONTACT_MSG == null){
		feedback += ("\n\t- Pelase enter your message.")
		contactFlag++;
	}

	// check if any error was found, if it was, displayed all them coupled with 
	// a number of errors encountered
	if (contactFlag == 0){
		feedback = ("Contact info: \n" 
					+"\n\tName: " + CONTACT_FNAME + " " + CONTACT_LNAME
					+"\n\tE-mail: " + CONTACT_EMAIL
					+"\n\tPhone: " + CONTACT_PHONE
					+"\n\tCountry: " + CONTACT_COUNTRY
					+"\n\tGender: " + contactGender
					+"\n\tPrefered contact method: " + contactMtd
					+"\n\nSubmitting form.");
		alert(feedback);
	}else{
		feedback += ("\n\nTotal errors found: " + contactFlag)
		alert(feedback);
		return false;
	}
}

//####################### JQuery - Roll to show #######################

// Code adapted from: https://www.machine-agency.com/blog/simple-jquery-scroll-reveal-script/
/* Simple Scroll Reveal
 * @author Machine Agency [hello@machine-agency.com]
 * @link http://machine-agency.com
 */

jQuery(document).ready( function($) {
    var revealClass = '.animated';
    var targetClass = '.has-scroll-reveal:not(' + revealClass + ')';
    var offset = 50; // Offset from bottom of viewport (pixels)

    var winHeight = $(window).height();

    // Recalc height of window in case of resize
    $(window).bind('resizeEnd', function() {
      winHeight = $(window).height();
    });

    // Triggered when page loads
    triggerAnimation(revealClass, targetClass, offset, winHeight);

    // Also Triggered on scroll
    $(window).on('scroll', function() {
        triggerAnimation(revealClass, targetClass, offset, winHeight);
    }); // window.on('scroll')

}); 

function triggerAnimation(revealClass, targetClass, offset, winHeight) {

      // Get current scrollPos
      var trigger = $(window).scrollTop() + winHeight - offset;

      // Loop through elements we're affecting
      $(targetClass).each(function() {
        var elementOffset = $(this).offset().top;

        if( elementOffset < trigger ) {

          $(this).addClass( revealClass.replace('.','') );
        }
      });

}

$(window).resize(function() {

    if(this.resizeTO) clearTimeout(this.resizeTO);

    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 1000);

});

//####################### Change NavBar classes #######################

