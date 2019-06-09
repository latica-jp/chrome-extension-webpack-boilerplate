const script = document.createElement('script')
script.src = chrome.extension.getURL('kintoneFieldInspector.bundle.js')
document.body.appendChild(script)
