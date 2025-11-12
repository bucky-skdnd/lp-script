const channel = new BroadcastChannel("betterliving");

channel.onmessage = onmessage;

document.body.addEventListener('click', () => {
   window.parent.postMessage({ message: 'Hello whos there' }, '*');
})


// Handle messages received on port2
function onMessage(e) {
  alert(JSON.stringify(e.data));
  channel.postMessage(`Message received by IFrame: "${e.data}"`);
}

document.addEventListener("DOMContentLoaded", (event) => {
 channel.postMessage("DOM fully loaded and parsed");
});

