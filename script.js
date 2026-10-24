// Google Apps Script Web App URL
const scriptURL = "https://script.google.com/macros/s/AKfycbwx6MXM6l4sTRTtNhbtufbZ5biJ-i9L7P-wP42mKQzjQfVmsdmJAPeACZliJ0Pz3jFG/exec";

// Get the form
const form = document.getElementById("contactForm");

// When the form is submitted
form.addEventListener("submit", function(event) {
  
  // Prevent page refresh
  event.preventDefault();

  // Get the values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Display the information on HTML page
  document.getElementById("displayInfo").innerHTML =
    "Name: " + name + "<br>" +
    "Email: " + email + "<br>" +
    "Message: " + message;

  // Send data to Google Sheets
  fetch(scriptURL, {
    method: "POST",
    body: new URLSearchParams({
      name: name,
      email: email,
      message: message
    })
  })
  .then(response => response.text())
  .then(result => {
    console.log(result);
    alert("Your information has been saved!");

    form.reset();
  })
  .catch(error => {
    console.error("Error:", error);
    alert("There was an error saving your information.");
  });
});