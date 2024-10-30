chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "captureDOM") {
    const fullDOM = document.documentElement.outerHTML;
    sendResponse({ html: fullDOM });
  }
});
