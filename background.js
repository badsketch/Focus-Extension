var API_KEY = "AIzaSyBE9GaVdrJo3Uxbt2Z1fudOj86qWkK6Ufo";

function blocker(url){
	return {cancel: true};
};
	

chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse) {
			console.log(request.url);
			var patt = new RegExp("https://www.youtube.com/watch\\?v=.*","ig");

			if(patt.test(request.url))
			{
				var vid = request.url.substring(32);
				var apiUrl = 'https://www.googleapis.com/youtube/v3/videos?id='+vid+'&part=snippet&key='+API_KEY;
				
				var xhttp = new XMLHttpRequest();
				var cat;
				xhttp.onreadystatechange = function(){
					if(xhttp.readyState == 4 && xhttp.status == 200){
						data = JSON.parse(xhttp.response);
						cat = data.items[0].snippet.categoryId;
						
	
					}
				};
					
				
				
				xhttp.open("GET",apiUrl,false);
				xhttp.send();
				
				if(cat != 27)
				{	
					console.log("music");
					if (chrome.webRequest.onBeforeRequest.hasListener(blocker)) {
						chrome.webRequest.onBeforeRequest.removeListener(blocker);
					}
					chrome.webRequest.onBeforeRequest.addListener(blocker
					
						
					,{urls:[request.url]},["blocking"]);
					chrome.tabs.reload();
					
					//chrome.webRequest.onBeforeRequest.removeListener(blocker);
				}
				

				
						
			}
			
	});
	
// function getCategory(url) {
			// console.log(url);
			// var patt = new RegExp("https://www.youtube.com/watch\\?v=.*","ig");

			// if(patt.test(url))
			// {
				// var vid = url.substring(32);
				// var apiUrl = 'https://www.googleapis.com/youtube/v3/videos?id='+vid+'&part=snippet&key='+API_KEY;
				
				// var xhttp = new XMLHttpRequest();
				// var cat;
				// xhttp.onreadystatechange = function(){
					// if(xhttp.readyState == 4 && xhttp.status == 200){
						// data = JSON.parse(xhttp.response);
						// cat = data.items[0].snippet.categoryId;
						
	
					// }
				// };
					
				
				
				// xhttp.open("GET",apiUrl,false);
				// xhttp.send();
				
				// if(cat == 10)
				// {	
					// console.log("music");
					// chrome.webRequest.onBeforeRequest.addListener(blocker
						
					// ,{urls:[url]},["blocking"]);
					// chrome.tabs.reload();
					//chrome.webRequest.onBeforeRequest.removeListener(blocker);
					//alert("in here");
				// }

				
				
						
			// }
// }
// function getCurrentTabUrl(callback) {
	
	//alert(document.location.href);
	// var queryInfo = {
		// "active":true,
		// "currentWindow":true
	// };
	
	// chrome.tabs.query(queryInfo,function(tabs) {
			// var tab = tabs[0];
			// var url = tab.url;
			
			// console.assert(typeof url == 'string','tab.url should be a string');
			// console.log("url is "+url);
			// callback(url);
	// });
	

// };



// function checkCategory(url){
	// var flag = false;
	// var patt = new RegExp("https://www.youtube.com/watch\\?v=.*","ig");

	// if(patt.test(url))
	// {
		// var vid = url.substring(32);

		// $.get( 
			// "https://www.googleapis.com/youtube/v3/videos",{
				// part:'snippet',
				// id: vid,
				// key: API_KEY},
				// function(data) {
				// var cat = data.items[0].snippet.categoryId;
				// if(cat == 10)
				// {	
					
					// chrome.webRequest.onBeforeRequest.addListener(function(info){
						// console.log("inside listener");
						// return {cancel: true};
						
					// },{urls:["*://www.youtube.com/*"]},["blocking"]);
					// console.log("in here");
					// chrome.tabs.reload();
					// return;
				// }
			// }
		// );
		
				
	// }


	
	
	
	
// }

