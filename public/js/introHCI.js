'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	var result = 
	$.get("/project/" + idNumber, callBackFn("/project/" + idNumber, idNumber));
	
	console.log("User clicked on project " + idNumber);
}

function callBackFn(result, idNumber){
	// Print out the url to get
	console.log("Calling URL " + result);

	// Use JQuery to select the div
	// where we'll be inserting the content
	$("#" + idNumber + " .details").html("yote boat");
	console.log("Attempted to change project " + idNumber);
}