(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-63656103-1', 'auto');
ga('require', 'linkid', 'linkid.js');
ga('send', 'pageview');
// Changes classes when a thumbnail is clicked
$(".thumbs li").click(function() {
	var parent = $(this).parent();
	parent.children().removeClass("active");
	parent.prev().attr("class", "full " + $(this).attr("class"));
	$(this).addClass("active");
});