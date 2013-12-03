chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(
		tab.id, {
		file: "resources/jquery.min.js"
	});
});



chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(
		tab.id, {
		file: "scripts/toolbar.js"
	});
});

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(
		tab.id, {
		code: "console.log('linkshare button clicked')"
	});
});
