chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, { action: "captureDOM" }, function(response) {
    if (response && response.html) {
      sendToOllamaAPI(response.html);
    }
  });
});

function sendToOllamaAPI(htmlContent) {
  fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "reader-lm",
      prompt: htmlContent,
      stream: false
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data && data.response) {
      downloadMarkdown(data.response);
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

function downloadMarkdown(markdownContent) {
  const blob = new Blob([markdownContent], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "converted.md";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
