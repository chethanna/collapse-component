$(document).ready( () => {
	//hide content div on page load, used hidden class to overcome the hidden elements being displayed for a second during page load
	$(".content").removeClass("hidden");
	$(".content").hide();
	
	//To display or hide content based on button click
	$(".heading").click( function (e)  {
		if (e.target.className.includes("active"))
		{
			$(this).next().slideUp("fast");
			$(this).removeClass("active");
			return;
		}
		$(".content").slideUp("fast");
		$(".heading").removeClass("active");
		$(this).next().slideDown("fast"); 
		$(this).addClass("active");
	});
	
	//to switch color when mouse hover on heading
	$(".heading").hover( function () {
		$(this).removeClass("not-highlight").addClass("highlighted");
		},
		function () {
			$(this).removeClass("highlighted").addClass("not-highlight");
	});
	
	//to make first card active on page load
	$(".card:eq(0)").children(".heading").trigger("click");
})