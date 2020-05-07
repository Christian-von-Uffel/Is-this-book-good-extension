chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({"url": "https://honestmarketer.com/?ref=chrome-extension"});
});
