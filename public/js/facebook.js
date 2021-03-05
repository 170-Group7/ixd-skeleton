function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log("Facebook login status changed.");
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === "connected") {
    // Logged into your app and Facebook.
    console.log("Successfully logged in with Facebook");
    localStorage.setItem("fbtoken", JSON.stringify(response));
    FB.api("/me?fields=name,first_name,picture.width(480)", changeUser);
  }
  if (response.status === "unknown") {
    // Logged into your app and Facebook.
    alert("Facebook login failed. Please refresh the page and try again.");
  }
}

function changeUser(response) {
  $(".facebookLogin").hide();
  console.log(response);
  localStorage.setItem("userinfo", JSON.stringify(response));
  window.location.href = "/index";

  //$("#name").text(response.name);
  //$("#photo").attr("src", response.picture.data.url);
}
