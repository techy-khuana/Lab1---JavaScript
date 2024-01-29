 // Reference variables for elements with unique IDs
const runSpeedTestButton = document.querySelector('#runSpeedTestButton');
console.log(runSpeedTestButton);
const emailDialog = document.querySelector('#emailDialog');
console.log(emailDialog);
const closeButton = document.querySelector('#closeButton');
console.log(closeButton);

// Event handler function for the call-to-action button
function handleRunSpeedTestButtonClick(e) {
    emailDialog.showModal();
}

// Event handler function for the close dialog button
function handleCloseButtonClick(e) {
    emailDialog.close();
  }

// Add event listeners to the buttons
 runSpeedTestButton.addEventListener("click", handleRunSpeedTestButtonClick);

 closeButton.addEventListener("click", handleCloseButtonClick);


 emailDialog.addEventListener("click", onClickOutsideDialog);

 function onClickOutsideDialog(e) {
  console.log("Click outside detected");
   const dialogDimensions = emailDialog.getBoundingClientRect();
   console.log("Dialog dimensions:", dialogDimensions);

   if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom) {

     e.currentTarget.close();

  }
 }