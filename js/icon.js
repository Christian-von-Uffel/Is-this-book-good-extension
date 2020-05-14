chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({
    "url": "https://isthisbookgood.com/?ref=chrome-extension"
  });
});