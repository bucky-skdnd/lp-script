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
  console.log('Message from parent:', e.data);
  // alert(JSON.stringify(e.data));
  // channel.postMessage(`Message received by IFrame: "${e.data}"`, '*');
switch (event.data.type) {
  case 'getIframeHeight':
    const container = document.querySelector('[data-height]');
    iframePort.postMessage({type: 'setIframeHeight', data: { height: container.dataset.height }});
    break;
  default:
    console.log('default');
    break;
}
}

document.addEventListener("load", () => {
    // send iframe Height
    var container = document.querySelector('[data-height]');
    iframePort.postMessage({type: 'setIframeHeight', data: { height: container.dataset.height }});
});

window.addEventListener('resize', () => {
  var container = document.querySelector('[data-height]');
  iframePort.postMessage({type: 'setIframeHeight', data: { height: container.dataset.height }});  
});

