console.log("this is working");





// var one = $('td.one');
// var two = $('td.two');
// var three = $('td.three');
// var four = $('td.four');
// var five = $('td.five');
// var six = $('td.six');
// var seven = $('td.seven');
// var eight = $('td.eight');
// var nine = $('td.nine');

// ---This applies symbols to boxes when clicked----
$(".playSquares td").on("click", function(event){
    $(this).text("x");
});


$("#reset").on("click", function(event) {
	$('.playSquares td').empty();
	$('.playSquares td').text('???');
});


