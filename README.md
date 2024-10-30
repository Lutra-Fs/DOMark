# DOMark

This repository contains a cross-browser extension that captures the full DOM of the current page and sends it to the Ollama API using the Reader-LM model for conversion to Markdown. The extension also allows you to download the response Markdown file.

## Features

- Capture the full DOM of the current page.
- Send the captured HTML content to the Ollama API for conversion to Markdown.
- Download the converted Markdown content as a file.
- Cross-browser compatibility using the WebExtensions API.

## Installation

1. Clone this repository to your local machine.
2. Open your browser and navigate to the extensions page.
   - For Chrome: `chrome://extensions/`
   - For Firefox: `about:addons`
   - For Edge: `edge://extensions/`
3. Enable "Developer mode" or "Load unpacked" option.
4. Click on "Load unpacked" and select the cloned repository folder.

## Usage

1. Click on the extension icon in the browser toolbar.
2. In the popup, click the "Convert DOM to Markdown" button.
3. The extension will capture the full DOM of the current page and send it to the Ollama API.
4. Once the conversion is complete, the Markdown file will be downloaded automatically.

## Permissions

The extension requires the following permissions:

- `activeTab`: Allows the extension to access the content of the currently active tab, including the DOM.
- `tabs`: Required to interact with the browser's tab system.
- `http://*/*` and `https://*/*`: Allows the extension to access and interact with web pages over HTTP and HTTPS protocols.

## Security Considerations

- Use permissions wisely: Only request the necessary permissions to minimize potential security risks.
- Validate and sanitize inputs: Ensure that any data sent to the Ollama API is properly validated and sanitized.
- Use HTTPS for API requests: Always use HTTPS to encrypt data transmitted between the extension and the Ollama API.
- Implement content security policy (CSP): Define a strict Content Security Policy to prevent cross-site scripting (XSS) attacks and other code injection vulnerabilities.
- Regularly update dependencies: Keep all libraries and dependencies up to date to ensure that any known vulnerabilities are patched.
- Handle sensitive data securely: Avoid storing sensitive data in the extension. If necessary, use secure storage mechanisms provided by the browser.
- Review and audit code: Regularly review and audit the extension's code to identify and fix potential security issues.
- Follow best practices for web development: Adhere to best practices for web development, such as using standard HTML, CSS, and JavaScript, and avoiding deprecated or non-standard features.
