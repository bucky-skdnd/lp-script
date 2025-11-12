// document.body.addEventListener('click', () => {
//   window.alert('test')})
let parentFramePort;

// Setup the transferred port
function initPort(e) {
  if (e.origin !== "localhost:3000") {
    return;
  }

  [parentFramePort] = e.ports || [];

  if (!parentFramePort) {
    return;
  }

  // parentFramePort = e.ports[0];
  parentFramePort.onmessage = onMessage;
}

// Handle messages received on port2
function onMessage(e) {
  alert(JSON.stringify(e.data));
  parentFramePort.postMessage(`Message received by IFrame: "${e.data}"`);
}

document.addEventListener("DOMContentLoaded", (event) => {
  alert("DOM fully loaded and parsed");
  
  // Listen for the initial port transfer message
  window.addEventListener("message", initPort);
});
