var httpRequest;

document.addEventListener('click', function(e) {
		e = e || window.event;

		var target = e.target || e.srcElement;
		
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



