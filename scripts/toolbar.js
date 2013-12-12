
function setupLinkBar(){
	console.log('setupLinkBar() has been called')
	if($('#linkshare-toolbar').length  == 0 && document.location.protocol != "https:"){

		link = $(location).attr('href');
		/*Correct URL: http://linkshare-burstworks.herokuapp.com/shares/new?url=*/
		$('body').prepend("<iframe id=\"linkshare-toolbar\" src=\"http://localhost:3000/shares/new?url=" + link + "\" seamless></iframe>");
		$('#linkshare-toolbar').css({'position':'fixed','z-index':'999999','width':'100%','height':'0px','top': '0px' ,'left': '0px ','right':'0px ','overflow':'hidden ','margin-top':'0px','padding-top':'0px'});
		$('#linkshare-toolbar').animate({'height': '100px'},300);
	}
	else{
		$('#linkshare-toolbar').slideUp(300,function(){
			$(this).remove();
		});
		// $('#linkshare-toolbar').delay(1000).remove();
	}
}

setupLinkBar();

// 'width': "" + $(document).width()})


		// $('body').prepend("<iframe id=\"linkshare-toolbar\" src=\"www.google.com/?url=\" " + pathname +" seamless></iframe>");
