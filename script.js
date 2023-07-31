//your JS code here. If required.
function getBrowserDetail (){
	const ptag = document.createElement('p');
	ptag.id = 'browser-info';
	document.body.appendChild(ptag);
	let browserName = navigator.appName;
	let version = navigator.appVersion;
	// console.log('You are using', ua);
	ptag.innerText = "You are using " + browserName + " version " + version;
}

getBrowserDetail();