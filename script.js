// Set today's password and message
let correctPassword = "password";  // You can change this each day
let messageToShow = "....pst. Hey I love you\n\nWith all my heart,\nSydney";

function checkPassword() {
  let enteredPassword = document.getElementById('passwordInput').value;
  let messageElement = document.getElementById('message');
  
  if (enteredPassword === correctPassword) {
    messageElement.textContent = messageToShow;
   
    messageElement.style.color = "green";
  } else {
    messageElement.textContent = "Incorrect password. Please try again.";
    messageElement.style.color = "red";
  }
}
