$("ul").on("click",".del",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("ul").on("click",".check",function(event){
	$(this).parent().css("color","#a9a9a9");
	
	event.stopPropagation();
});

