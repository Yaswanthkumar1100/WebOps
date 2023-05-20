function fetchNotification() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(message => showNotification(message))
    .catch(error => console.error(error));
}

function showNotification(message) {
  const notification = document.getElementById('notification');
  const requiredText = extractRequiredText(message);
  notification.innerHTML = requiredText;
  notification.style.display = 'block';
  playNotificationSound();
  setTimeout(() => {
    notification.style.display = 'none';
  }, 5000);
}

function extractRequiredText(message) {
  const requiredText = message.setup + "<br>" + message.punchline;
  return requiredText;
}

function playNotificationSound() {
  const audio = new Audio('pm2.mp3');
  audio.play();
}

setInterval(fetchNotification, 11000);

function toggleTheme() {
  var theme = document.getElementById("theme");
  var currentTheme = theme.getAttribute("href");

  if (currentTheme === "pm211a.css") {
    theme.href = "pm211b.css";
  } else {
    theme.href = "pm211a.css";
  }
}