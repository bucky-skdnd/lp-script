const { port1, port2 } = new MessageChannel();

 window.addEventListener('message', onMessage);

document.body.addEventListener('click', () => {
   window.parent.postMessage({ date: new Date() }, '*');
})


// Handle messages received on port2
function onMessage(e) {
  alert(JSON.stringify(e.data));
  // channel.postMessage(`Message received by IFrame: "${e.data}"`, '*');
}

document.addEventListener("DOMContentLoaded", (event) => {
 // channel.postMessage("DOM fully loaded and parsed", '*');
 window.parent.postMessage({ message: 'DOMContentLoaded' }, '*');
});

