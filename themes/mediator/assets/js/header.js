var navigation = $('header.blog-header');
var main = $('main.content');

//var offset = 200; // ToDo - make this variable to height of header.teaserimage
var offset = $("header.teaserimage").height();

$(window).scroll(function(){
	checkMenu();
});

function checkMenu()
{
	if( $(window).scrollTop() > offset )
	{
		if(!navigation.hasClass('is-fixed'))
		{
			navigation.addClass('is-fixed');
			// ToDo - make this variable to height of header.blog-header
			main.css('padding-top', $("header.blog-header").height()+1);
			//main.css('padding-top', '70px');
		}
	}
	else if(navigation.hasClass('is-fixed'))
	{
		navigation.removeClass('is-fixed');
		main.css('padding-top', '0px');
	}
}

$(document).ready(function(){
	$("div.content").has(".highlight").addClass("content-highlight");
});
