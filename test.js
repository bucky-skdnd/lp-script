

window.addEventListener('message', (event) => {
    if (event.data === 'init' && event.ports.length > 0) {
       const iframePort = event.ports[0];
       // Now the iframe can use iframePort to send and receive messages
       iframePort.onmessage = (messageEvent) => {
           console.log('Message from parent:', messageEvent.data);
       };
       iframePort.postMessage('Hello from iframe!');
   }
});

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

