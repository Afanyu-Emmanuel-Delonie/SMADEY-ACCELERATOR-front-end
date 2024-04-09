function sendMessage() {
  var messageInput = document.getElementById('messageInput');
  var messageText = messageInput.value.trim();
  if (messageText === '') {
    return;
  }

  var messageArea = document.getElementById('messageArea');
  var messageDiv = document.createElement('div');
  messageDiv.textContent = messageText;
  messageArea.appendChild(messageDiv);

  // Clear input field after sending message
  messageInput.value = '';

  // Scroll to the bottom of the message area
  messageArea.scrollTop = messageArea.scrollHeight;

  // Remove messages after 2 hours
  setTimeout(function() {
    messageDiv.remove();
  }, 2 * 60 * 60 * 1000); // 2 hours
}
