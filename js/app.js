$(document).ready(function(){
	var listQ = ["points", "shooter", "attendance", "win", "playoff"]
	var questions = {
		'points' : ["Who led The Bulls in points for the 2007-2008 season?", "Loul Deng", "Ben Gordon", "Kirk Hinrich", "Joakim Noah"],
		'shooter' : ["Who is The Bulls all-time leader in 3pt field goals made?", "Michael Jordan", "Steve Kerr", "Kirk Hinrich", "Toni Kukoc"],
		'attendance' : ["How many consecutive years has The Bulls led the NBA in attendance?", "3", "4", "5", "6"],
		'win' : ["What is The Bulls' all-time win percentage?", ".448", ".490", ".515", ".522"],
		'playoff' : ["How many play off appearances have The Bulls made?", "20", "26", "33", "42"]
	};

	var whichQ = 0;
	var score = 0;
//Determine how to select correct answer
	var correctAns;

	function start() {
		$('.button').hide();
		$('.answerSet').show();
		$('#submit').show();
		whichQ = 0;
		number = 0;
		loadQ();
	}

//Can't find a way to select next answer
	function loadQ() {
		
			var selector = listQ[whichQ];
			//$('.question h1').text(questions.selector[0]);
			//console.log(questions.selector[0]);
			whichQ++;
			number++;
			//clear previous question
			$('.question h1').val('');
			$('.answer1').append('');
			$('.answer2').append('');
			$('.answer3').append('');
			$('.answer4').append('');
	};	

	function calc() {
		var userAns = $('input[type="radio"]:checked').val();
		if(userAns == correctAns) {
			score++;
		};
		console.log(score);
	};


	$('#yes').click(function() {
		// Start Quiz
		start();
		loadQ();
		//Replaced by loadQ
		$('.question h1').text(questions.points[0]);
		$('.answer1').append(questions.points[1]);
		$('.answer2').append(questions.points[2]);
		$('.answer3').append(questions.points[3]);
		$('.answer4').append(questions.points[4]);
		
		console.log('Yes');
	});

	$('#submit').click(function() {
		whichQ = 6;
		if(whichQ<6) {
			calc();
			whichQ++; //increment question
			loadQ();
		} else {
			//end of quiz scenario 
			//Score, Play Again?
			$('.question h1').replaceWith('<h1>You got ' + score + ' out of 5!</h1>');
			$('.question').append('<h1>Play Again?</h1>');
			$('.button').show();
			$('.answerSet').hide();
			$('#submit').hide();
			//yes or no
		}
		
	})

	$('#no').click(function() {
		alert('We have nothing else for you.');
	});


	// This is how I call different questions
	// $('body').click(function() {
	// 	console.log(listQ[whichQ]);
	// 	whichQ++;
	// })
});



