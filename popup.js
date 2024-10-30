document.addEventListener('DOMContentLoaded', function() {
  var convertButton = document.getElementById('convertButton');
  convertButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: 'captureDOM' });
  });
});
