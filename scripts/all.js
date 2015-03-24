var httpRequest;

document.addEventListener('click', function(e) {
		e = e || window.event;

		var target = e.target || e.srcElement;

		// makeRequest("https://api.justgiving.com/9e94dc3c/v1/account");
		// makeRequest("https://api.justgiving.com/9e94dc3c/v1/fundraising/pages/Yogging-In-Denmark");


}, false);


function showInfo() {
		if (httpRequest.readyState === 4) {
				if (httpRequest.status === 200) {

				return data = JSON.parse(httpRequest.responseText);

				} else {
						alert('There was a problem with the request.');
				}
		}
}



