// Stolen from http://stackoverflow.com/questions/4859689/
chrome.runtime.onMessage.addListener(function(request, sender) {
	chrome.tabs.update(sender.tab.id, {url: request.redirect});
});
