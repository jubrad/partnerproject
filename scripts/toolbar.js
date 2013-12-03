
function setupLinkBar(){
	if($('#linkshare-toolbar').length  == 0 ){
		alert('adding an iframe');
		$('body').prepend('<iframe id="linkshare-toolbar" src="www.leekspin.com" width="100%>"" height="200"></iframe>');
	}
	else{
		$('#linkshare-toolbar').remove();
	}
}

setupLinkBar();