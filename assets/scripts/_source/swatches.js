// Changes classes when a thumbnail is clicked
$(".thumbs li").click(function() {
	var parent = $(this).parent();
	parent.children().removeClass("active");
	parent.prev().attr("class", "full " + $(this).attr("class"));
	$(this).addClass("active");
});