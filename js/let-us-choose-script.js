// Author: Humberto Luiz Rovina 
// Last update date: 12/05/2017 
// Update: 
// 				- Incomplete Version


// trip duration

const DEFINED_DATE = document.querySelector("#dateDefinition");
const DEFINED_DURATION = document.querySelector("#dateDuration");
const DATE_SELECTION = document.querySelector("#dateEntry");

DEFINED_DATE.addEventListener('change', displayDateEntry, false);

function displayDateEntry() {
	var choice = DEFINED_DATE.value;

	if(choice == 'no'){
		DEFINED_DURATION.classList.remove("hide");
		DATE_SELECTION.classList.add("hide");
		console.log("entry exact day");
	}else{
		DATE_SELECTION.classList.remove("hide");
		DEFINED_DURATION.classList.add("hide");
		console.log("type duration");
	}
}

// form submition
const SUBMIT_BTN = document.querySelector(".button-pattern");
const CHOSEN_DESTINY = document.querySelector("#chosenDestiny");

var COUNTRY = document.querySelector("#country").value;
var AGE = document.querySelector("#age").value;
var IDATE = document.querySelector("#startDate").value;
var FDATE = document.querySelector("#startDate").value;
var DURATION = document.querySelector("#duration").value;
var MONEY = document.querySelector("#budget").value;

// ###############################################################
// Implement function so user can retry
// var sectionDisplayed = false 

SUBMIT_BTN.addEventListener("click", displaySection, false);

function displaySection(){
	CHOSEN_DESTINY.classList.remove("hide");

	COUNTRY = document.querySelector("#country").value;
	AGE = document.querySelector("#age").value;
	IDATE = document.querySelector("#startDate").value;
	FDATE = document.querySelector("#startDate").value;
	DURATION = document.querySelector("#duration").value;
	MONEY = document.querySelector("#budget").value;

	console.log("Country: " + COUNTRY);
	console.log("Age: " + AGE);
	console.log("Idate: " + IDATE);
	console.log("Fdate: " + FDATE);
	console.log("Duration: " + DURATION);
	console.log("Money: " + MONEY);
}
// ###############################################################
//Destiny Definition

const REDIRECTION_BTN = document.querySelector("#redirection")

var TRIP_NAT;
var OBJECTIVE;

function DestinyNat(destinyNat){
	TRIP_NAT = destinyNat;
	// console.log(TRIP_NAT);
}

function TripObjective(objective){
	OBJECTIVE = objective
	// console.log(OBJECTIVE);	
}

// ###############################################################
//Redirection Page

REDIRECTION_BTN.addEventListener("click", redirecting, false);

var link = "https://www.google.ca/flights/#search;";
var rest = "f=YYZ;t=GRU;d=2017-12-15;r=2017-12-18;a=AC";

function redirecting(){
	window.open(link+rest);
}

// ###############################################################
// Image slide-show

