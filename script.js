//your JS code here. If required.
function getBrowserDetail (){
	let browserName = navigator.appName;
	let version = navigator.appVersion;
	// console.log('You are using', ua);
	let displayDetail = document.body;
	displayDetail.innerHTML = "You are using " + browserName + " version " + version;
	// console.log(displayDetail);
}

getBrowserDetail();