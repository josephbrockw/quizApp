$(document).ready(function(){
	var listQ = ["points", "shooter", "attendance", "win", "playoff"]
	var questions = {
<<<<<<< HEAD
		'points': ["Who led The Bulls in points for the 2007-2008 season?", "Loul Deng", "Ben Gordon", "Kirk Hinrich", "Joakim Noah"]
		'shooter': ["Who is The Bulls all-time leader in 3pt field goals made?", "Michael Jordan", "Steve Kerr", "Kirk Hinrich", "Toni Kukoc"]
		//attendance: ["How many consecutive years has The Bulls led the NBA in attendance?", "3", "4", "5", "6"]
		//win: ["What is The Bulls' all-time win percentage?", ".448", ".490", ".515", ".522"]
		//playoff: ["How many play off appearances have The Bulls made?", "20", "26", "33", "42"]
=======
		'points' : ["Who led The Bulls in points for the 2007-2008 season?", "Loul Deng", "Ben Gordon", "Kirk Hinrich", "Joakim Noah"],
		'shooter' : ["Who is The Bulls all-time leader in 3pt field goals made?", "Michael Jordan", "Steve Kerr", "Kirk Hinrich", "Toni Kukoc"],
		'attendance' : ["How many consecutive years has The Bulls led the NBA in attendance?", "3", "4", "5", "6"],
		'win' : ["What is The Bulls' all-time win percentage?", ".448", ".490", ".515", ".522"],
		'playoff' : ["How many play off appearances have The Bulls made?", "20", "26", "33", "42"]
>>>>>>> 2c6fa9d39cb45ff5eabf5805f0f2d979ff897dc3
	};

	var whichQ = 0;

	function loadQ() {
		
			var selector = listQ[whichQ];
			//$('.question h1').text(questions.selector[0]);
			console.log(questions.selector[0]);
			whichQ++;

	}


	$('#yes').click(function() {
		// Start Quiz
		$('.button').hide();
		$('.answerSet').show();
		//$('.question h1').text(questions.points[0]);
		loadQ();
		console.log('Yes');
	});

	$('#no').click(function() {
		alert('We have nothing else for you.');
	});


	// This is how I call different questions
	// $('body').click(function() {
	// 	console.log(listQ[whichQ]);
	// 	whichQ++;
	// })
});



