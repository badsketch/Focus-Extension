document.onclick = function() {
chrome.runtime.sendMessage({url: document.URL},function(response) {
	
});
}

// $(document).ready(function() {
	// $(document).click(function() {
		// chrome.runtime.sendMessage({url: document.location.href},function(response) {
	
		// });
	// });
// });