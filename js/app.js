$(document).ready(function(){
	var listQ = ["points", "shooter", "attendance", "win", "playoff"]
	var questions = [
		["Who led The Bulls in points for the 2007-2008 season?", "Loul Deng", "Ben Gordon", "Kirk Hinrich", "Joakim Noah", "answer2"],
		["Who is The Bulls all-time leader in 3pt field goals made?", "Michael Jordan", "Steve Kerr", "Kirk Hinrich", "Toni Kukoc", "answer3"],
		["How many consecutive years has The Bulls led the NBA in attendance?", "3", "4", "5", "6", "answer4"],
		["What is The Bulls' all-time win percentage?", ".448", ".490", ".515", ".522", "answer4"],
		["How many play off appearances have The Bulls made?", "20", "26", "33", "42", "answer3"]
	]

	var whichQ = 0;
	var score = 0;
	
//Determine how to select correct answer

	$('#yes').click(function() {
		// Start Quiz
		start();
		loadQ();
		whichQ++;
	});

	console.log(whichQ);

	$('#submit').click(function() {
		if(whichQ <= 4) {
			calc();
			loadQ();
			whichQ++; //increment question
			console.log('whichQ: ' + whichQ);
		} else {
			//end of quiz scenario 
			//Score, Play Again?
			calc();
			$('.question h1').replaceWith('<h1>You got ' + score + ' out of 5!</h1>');
			$('.question').append('<h1 class="play">Play Again?</h1>');
			$('.button').show();
			$('.answerSet').hide();
			$('#submit').hide();
			//yes or no
		}
	});

	function start() {
		if(whichQ>0){
			$('.play').remove();
			$('.button').hide();
			$('.answerSet').show();
			$('#submit').show();
			whichQ = 0;
			score = 0;
		}
		$('.button').hide();
		$('.answerSet').show();
		$('#submit').show();
		whichQ = 0;
	}

//Can't find a way to select next answer
	function loadQ() {
			//clear previous question
			$('.question h1').val('');
			$('.answer1').empty();
			$('.answer2').empty();
			$('.answer3').empty();
			$('.answer4').empty();
			$('.question h1').text(questions[whichQ][0]);
			$('.answer1').append(questions[whichQ][1]);
			$('.answer2').append(questions[whichQ][2]);
			$('.answer3').append(questions[whichQ][3]);
			$('.answer4').append(questions[whichQ][4]);
			$('input:radio').attr('checked', false);
	};	

	function calc() {
		var userAns = $('input[type="radio"]:checked').val();
		var correctAns = questions[whichQ-1][5];
		console.log('userAns: ' + userAns);
		console.log('correctAns: ' + correctAns);
		if(userAns == correctAns) {
			score++;
		};
		console.log('score: ' + score);
	};

	$('#no').click(function() {
		alert('We have nothing else for you.');
	});

});



