function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
}
  
function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    console.log('Successfully logged in with Facebook');
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response) {
    // Print response out to the console
    console.log("Response = " + response);
    
    // Hide the Facebook login button
    $(".facebookLogin").hide();

    // Change 'Scott Klemmer' to your name
    $("#name").text(response.name);

    // Set your photo as the profile picture
    $("#photo").attr("src", response.picture.data.url);
}