chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(
		tab.id, {
		code: "$('body').prepend('<div> hello world</div>')"
	});
		
});