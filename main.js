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

		// } else if ($(this).attr('class','O') && currentPlayer === playerOne) {
		// 	$(this).attr('class','O');
		// } else if ($(this).attr('class','X') && currentPlayer === playerTwo) {
		// 	$(this).attr('class','X');
		// }



		// {
		// 	if (currentPlayer === playerOne) {
		// 		$(this).text("X");
		// 		currentPlayer = playerTwo;
		// 		$(this).class = "played";
		// 	} else if (currentPlayer === playerTwo) {
		// 		$(this).text('O');
		// 		currentPlayer = playerOne;
		// 		$(this).class = "played";
		// 	}
		// } else if (this.text === "O" || "X") {
		// 	return;
		// }

});


$("#reset").on("click", function(event) {
	$('.playSquares td').empty();
	$('.playSquares td').text('???');
});


