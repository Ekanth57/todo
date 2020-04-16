//check ,off todos
$("ul").on("click","li",function(){
$(this).toggleClass("completed")
})


//delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
});


$("input[type='text' ]").keypress(function(event){
	if(event.which===13){
		var todotext=$(this).val();
		$(this).val("");

		//create a new li and add it to the list
		$("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + todotext + "</li>")

	}
})

$("pencil").click(function(){
	$("input[type='text'").fadeToggle();
});
