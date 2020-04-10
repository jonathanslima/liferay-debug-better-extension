chrome.runtime.onInstalled.addListener(function() {
	var t = false;
	
	chrome.browserAction.onClicked.addListener(function(tab){
		chrome.tabs.getSelected(null, function(tab)   {
			t = !t;
			chrome.tabs.sendMessage(tab.id, t);
			chrome.browserAction.setBadgeText({text: t ? 'ON' : 'OFF'});
			chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
		});
	});
})	