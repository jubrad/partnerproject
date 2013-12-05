chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(
		tab.id, {
		file: "resources/jquery.min.js"
	});
});

// chrome.browserAction.onClicked.addListener(function(tab) {
// 	chrome.tabs.executeScript(
// 		tab.id, {
// 		file: "resources/toolbar.css"
// 	});
// });

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(
		tab.id, {
		file: "scripts/toolbar.js"
	});
});

