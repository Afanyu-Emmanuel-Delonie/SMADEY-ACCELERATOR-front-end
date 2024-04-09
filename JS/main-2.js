var messageArea = document.getElementById('messageArea');

function sendMessage() {
  var messageInput = document.getElementById('messageInput');
  var messageText = messageInput.value.trim();
  if (messageText === '') {
    return;
  }

  var messageDiv = document.createElement('div');
  messageDiv.classList.add('message', 'sent');
  messageDiv.textContent = messageText;
  
  // Add delete button to sent messages
  var deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.classList.add('deleteButton');
  deleteButton.onclick = function() {
    messageDiv.remove();
  };
  messageDiv.appendChild(deleteButton);

  messageArea.appendChild(messageDiv);

  // Clear input field after sending message
  messageInput.value = '';

  // Scroll to the bottom of the message area
  messageArea.scrollTop = messageArea.scrollHeight;

  // Remove messages after 10 hours
  setTimeout(function() {
    messageDiv.remove();
  }, 10 * 60 * 60 * 1000);

  // Simulate receiving a reply from the vendor after 1 second
  setTimeout(function() {
    receiveMessage();
  }, 1000);
}

function receiveMessage() {
  var messageDiv = document.createElement('div');
  messageDiv.classList.add('message', 'received');
  messageDiv.textContent = 'Hello! How can I assist you?';

  // Add delete button to received messages
  var deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.classList.add('deleteButton');
  deleteButton.onclick = function() {
    messageDiv.remove();
  };
  messageDiv.appendChild(deleteButton);

  messageArea.appendChild(messageDiv);

  // Scroll to the bottom of the message area
  messageArea.scrollTop = messageArea.scrollHeight;

  // Remove messages after 10 hours
  setTimeout(function() {
    messageDiv.remove();
  }, 10 * 60 * 60 * 1000);
}

// referral link 
function copyReferralLink() {
  let referralLink = document.getElementById('referralLink');
  referralLink.select();
  document.execCommand('copy');
  alert('Referral link copied to clipboard!');
}


