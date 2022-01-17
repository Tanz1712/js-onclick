// ***** TASK ONE ONCLICK() *****

document.getElementById("redirectBtn").addEventListener("click", redirect);

function redirect() {
  //   console.log("button clicked");
  document.location.href = "http://www.google.com"; // my solution - opens in same tab
  //   window.open("http://www.google.com"); // alternative solution, opens new tab
}