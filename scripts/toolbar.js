
function setupLinkBar(){
	console.log('setupLinkBar() has been called')
	if($('#linkshare-toolbar').length  == 0 && document.location.protocol != "https:"){
		$('body').prepend('<iframe id="linkshare-toolbar" style="z-index:100 " src="http://www.leekspin.com" width="100%" height="100"></iframe>');
		// $('linkshare-toobar').
	}
	else{
		$('#linkshare-toolbar').remove();
	}
}

setupLinkBar();