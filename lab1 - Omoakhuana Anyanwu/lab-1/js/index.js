 // Reference variables for elements with unique IDs
const runSpeedTestButton = document.querySelector('#runSpeedTestButton');
console.log(runSpeedTestButton);
const emailDialog = document.querySelector('#emailDialog');
console.log(emailDialog);
const closeButton = document.querySelector('#closeButton');
console.log(closeButton);

// Event handler function for the call-to-action button
function handleRunSpeedTestButtonClick() {
  if (emailDialog) {
    emailDialog.showModal();
  }
}

// Event handler function for the close dialog button
function handleCloseButtonClick() {
  if (emailDialog) {
    emailDialog.close();
  }
}

// Add event listeners to the buttons
 runSpeedTestButton.addEventListener("click", handleRunSpeedTestButtonClick);

 closeButton.addEventListener("click", handleCloseButtonClick);


