// Set today's password and message
let correctPassword = "password";  // You can change this each day
let messageToShow = "                                                                                                My Dearest Griselda,\n\nAs I sit down to write this, I realize there are no perfect words to fully express the way I feel about you. But I'll try, with all the sincerity in my heart, to let you know just how deeply you have touched my soul.\n\nFrom the moment we met, there was something different about you. Your kindness, your warmth, and your strength have wrapped around me in ways I never expected, making every moment we share feel like a gift. When I think of you, my heart swells with gratitude that someone as beautiful—both inside and out—chose to walk beside me.\n\nYour smile is like sunshine after a storm, melting away all my worries, and your laughter is the music that fills my life with joy. I often find myself thinking about you in the quiet moments, and it always brings a sense of peace and happiness. You have become the center of my thoughts, and I love every little detail that makes you, you.\n\nGriselda, you inspire me every single day. You make me want to be better—to be kinder, more patient, and more loving. Your courage and determination never cease to amaze me, and I am in awe of everything you do. With you by my side, I feel like there’s nothing I can’t face, no mountain too tall, no dream too distant. You give me hope and strength in ways I never imagined, and for that, I am forever grateful.\n\nI often think about our future, about all the moments we have yet to share. I dream of long walks, quiet nights, shared laughter, and the comfort of knowing that no matter what life throws our way, we will always have each other. Our love is my safe harbor, my anchor in the storm, and I promise to cherish and protect it with everything I have.\n\nGriselda, you are my greatest adventure, my sweetest dream, my deepest love. I can’t imagine my world without you in it, and I look forward to all the tomorrows we’ll spend together. Through every challenge, every joy, and every moment in between, my love for you only grows stronger.\n\nYou are my heart, my soul, and my forever. Thank you for being the most incredible partner I could ever ask for, for loving me as fiercely as you do, and for letting me love you with all that I am.\n\nI love you today, tomorrow, and for every day after that.\n\nForever yours,\nSydney";

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
