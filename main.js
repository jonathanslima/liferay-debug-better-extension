document.addEventListener('DOMNodeInserted', function (event) {
	var url = location.href;
	var ext = '?js_fast_load=0&css_fast_load=0&strip=0';

	if(url.indexOf(ext) == -1){
		var arrUrls = [	'array urls here' ];
		
		arrUrls.map(function(i){
			if(url.indexOf(i) !== -1 ){
				if(location.href.slice(-1) == '/'){
					var newUrl = location.href.slice(0, -1)
				}else{
					var newUrl = url
				}

				if(url.indexOf('?') !== -1){
					location.href = newUrl + '&' + ext;

				}else{
					location.href = newUrl + ext;
					
				}
			}
		})
	}
});



