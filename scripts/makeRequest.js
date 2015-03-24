function makeRequest(url) {
	if (window.XMLHttpRequest) {
	  httpRequest = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
	  try {
	    httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
	  } 
	  catch (e) {
	    try {
	      httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	    } 
	    catch (e) {}
	  }
	}
	if (!httpRequest) {
	  alert('Giving up :( Cannot create an XMLHTTP instance');
	  return false;
	}

	httpRequest.onreadystatechange = showInfo;
	httpRequest.open('GET', url);
	httpRequest.setRequestHeader("Accept", "application/json");
	httpRequest.send();
}
