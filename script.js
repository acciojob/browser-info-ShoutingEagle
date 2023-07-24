//your JS code here. If required.
function getBrowserDetail (){
	let ua = navigator.userAgent;
	// console.log('You are using', ua);
	let displayDetail = document.body;
	displayDetail.innerHTML = 'You are using '+ua;
	// console.log(displayDetail);
}

getBrowserDetail();