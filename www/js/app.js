var app = angular.module('mahat', ['ionic'])

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});


app.controller('responseController', function($scope, $timeout) {
	
	// Mahat's possible responses.
	var sayingList = [
		"Shut up.",
		"Go bother someone else!",
		"Does it look like I care?",
		"Away with you!",
		"Leave me be, you troll.",
		"THIS is what you have to say?",
		"I care not for your quarrels.",
		"Close your eyes and fall back.",
		"Do not pester me, mortal.",
		"Be on your way, mortal.",
		"You do not deserve answers.",
		"Your problems are trivial.",
		"I will claim your soul.",
		"A thousand times NO.",
		"Go away!!!",
		"You are not worthy.",
		"Ask again... never.",
		"You are meaningless.",
		"You cannot defeat me.",
		"I am true power.",
		"You are shortsighted.",
		"You cannot comprehend me.",
		"Your questions are primitive.",
		"You couldn't fathom it.",
		"HAHAHAHA!!!",
		"I DON'T CARE!!!",
		"FREE ME, MORTAL!!!",
		"Listening to you is torture.",
		"Leave me, plebeian."
	];

	$scope.saying = "Tap Mahat for an answer.";
	$scope.answered = true;
	
	$scope.tap = function() {
		$scope.answered = false;
		$scope.saying = "Pretending to care...";
		$timeout(function() {
			$scope.saying = sayingList[Math.floor(Math.random() * sayingList.length)];
			$scope.answered = true;
		}, 1500);
	};
});