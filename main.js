console.log("this is working");

// PLAYER DATA ----
var playerOne = {
	name: "I am making an X",
	mark: "X",
	class: "X"
};
var playerTwo = {
	name: "I am making an O",
	mark: "O",
	class: "O"
};

var currentPlayer;
var players = [playerOne, playerTwo];

// -------------




// DETERMINES WHO STARTS --------
$(document).ready(function() {
var startNum = Math.floor((Math.random() * 2) + 1);
	if (startNum === 1) {
		currentPlayer = playerOne;
	} else if (startNum === 2) {
		currentPlayer = playerTwo;
	}
console.log(currentPlayer);

});
// --------------------------------




// ---This applies symbols to boxes when clicked----

$(".playSquares td").on("click", function(event) {
		if ($(this).attr('class','notPlayed') && currentPlayer === playerOne) {
			$(this).text(currentPlayer.mark);
			$(this).attr('class', 'X played');
			
			currentPlayer = playerTwo;
			console.log($(this));
		} else if ($(this).attr('class','notPlayed') && currentPlayer === playerTwo) {
			$(this).text(currentPlayer.mark);
			
			$(this).attr('class', 'O played');
			currentPlayer = playerOne;
			console.log($(this));
		}
		checkWin();

});


// ----------------------------------

// SCORING ----

var checkWin = function() {
if ($('#one').hasClass('X') && $('#two').hasClass('X') && $('#three').hasClass('X') || 
	$('#one').hasClass('X') && $('#four').hasClass('X') && $('#seven').hasClass('X') ||
	$('#one').hasClass('X') && $('#five').hasClass('X') && $('#nine').hasClass('X') || 
	$('#two').hasClass('X') && $('#five').hasClass('X') && $('#eight').hasClass('X') || 
	$('#three').hasClass('X') && $('#five').hasClass('X') && $('#seven').hasClass('X') ||
	$('#three').hasClass('X') && $('#six').hasClass('X') && $('#nine').hasClass('X') || 
	$('four').hasClass('X') && $('#five').hasClass('X') && $('#six').hasClass('X') ||
	$('#seven').hasClass('X') && $('#eight').hasClass('X') && $('#nine').hasClass('X')) {
		
		alert("Player One has won!!");

}  else if ($('#one').hasClass('O') && $('#two').hasClass('O') && $('#three').hasClass('O') ||
	$('#one').hasClass('O') && $('#four').hasClass('O') && $('#seven').hasClass('O') ||
	$('#one').hasClass('O') && $('#five').hasClass('O') && $('#nine').hasClass('O') || 
	$('#two').hasClass('O') && $('#five').hasClass('O') && $('#eight').hasClass('O') || 
	$('#three').hasClass('O') && $('#five').hasClass('O') && $('#seven').hasClass('O') ||
	$('#three').hasClass('O') && $('#six').hasClass('O') && $('#nine').hasClass('O') || 
	$('four').hasClass('O') && $('#five').hasClass('O') && $('#six').hasClass('O') ||
	$('#seven').hasClass('O') && $('#eight').hasClass('O') && $('#nine').hasClass('O')) {
		
		alert("Player Two has won!!");
}
};


		// if (playerOneBoard[0] === "one") {
		// 	console.log("PLAYER ONE WINS");
		// }



//add counter var






// -----Reset Button ---------------
$("#reset").on("click", function(event) {
	$('.playSquares td').empty();
	$('.playSquares td').text('');
	$('.playSquares td').attr('class',"");
	$('.playSquares td').attr('class','notPlayed');
	
	
});
// -----------------------

