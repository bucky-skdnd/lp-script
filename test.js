window.iframePort = null;

window.addEventListener('message', (event) => {
    if (event.data === 'init' && event.ports.length > 0) {
       iframePort = event.ports[0];
       // Now the iframe can use iframePort to send and receive messages
       iframePort.onmessage = onMessage;
   }
});

// document.body.addEventListener('click', () => {
//    iframePort.postMessage({ date: new Date() });
// })

// Handle messages received on port2
function onMessage(e) {
  // console.log('Message from parent:', e.data);
  // alert(JSON.stringify(e.data));
  // channel.postMessage(`Message received by IFrame: "${e.data}"`, '*');
}

document.addEventListener("DOMContentLoaded", (event) => {
    // send iframe Height
    setTimeout(()=> {
            var container = document.querySelector('[data-height]');
    
    iframePort.postMessage({type: 'setIframeHeight', data: { height: container.dataset.height }});
    }, 3000);

});

