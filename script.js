// Set today's password and message
let correctPassword = "10212024";  // You can change this each day
let messageToShow = "My Dearest Griselda,\n\nThank you so much for sending me that beautiful video about love being the truest kind of friendship. It really touched my heart and made me think about how lucky I am to have you in my life. Our connection truly is built on the foundation of trust, kindness, and understanding, and that means everything to me.\n\nYou make my world brighter every day, and I’m so grateful for the love and friendship we share.\n\nWith all my love,\nSydney";

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
