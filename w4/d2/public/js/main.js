const params = new URL(document.location).searchParams;
const username = params.get('username');
const room = params.get('room');

console.log('username', username);

const socket = io({ query: { username: username, room: room } });

const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('messageInput');
const messagesDiv = document.getElementById('messages');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = messageInput.value;
  console.log('message', message);
  socket.emit('message', message);
});

socket.on('message', (message) => {
  const messageDiv = document.createElement('div');
  messageDiv.innerHTML = `<div class="message">
    <div class="message__username">${message.username}: ${message.time}</div>
    <div class="message__text">${message.text}</div>
    </div>`;
  messagesDiv.appendChild(messageDiv);
});
