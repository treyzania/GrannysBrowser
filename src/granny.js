// Stolen from http://stackoverflow.com/questions/1144783/
String.prototype.replaceAll = function(search, replacement) {
	var target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
};

// Made myself.
String.prototype.contains = function(sub) {
	return this.indexOf(sub) !== -1;
}

var hostname = window.location.hostname;
var page = window.location.pathname;
var hash = window.location.hash;
var proto = window.location.protocol;

console.log(window.location);

var isGoogle = hostname.contains("google.com") && (page.contains("url") || page.contains("search"));
var isChromePage = proto.contains("chrome") || page.contains("chrome");
if (!hash.contains("granny") && !isGoogle && !isChromePage) {
	
	// Setup the new page URL
	var pageRep = page
		.replaceAll(":", " ")
		.replaceAll("/", " ")
		.replaceAll("_", " ")
		.replaceAll("-", " ")
		.trim()
		.replaceAll(" ", "%20");
	
	// Actually go to it.
	var newUrl = "http://google.com/search?q=" + (hostname + " " + pageRep).trim() + "#granny";
	
	// This is a yucky hack to make it so that we don't open a new tab each time.
	chrome.runtime.sendMessage({redirect: newUrl});
	
}
