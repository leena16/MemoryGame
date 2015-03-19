Card.Leaderboard = function(game){
		
		
};
Card.Leaderboard.prototype = {
	init: function(score,myMinutes,mySeconds) {
		gameScore = score;
		minutes = myMinutes;
		seconds = mySeconds;
	 	
   },
	create: function(){
		// display images and buttons.
		this.add.sprite(0, 0, 'background');
		this.add.sprite((Card.GAME_WIDTH-434)/2, 20, 'leaderboard-title');
		this.add.button(100, 500, 'button-playAgain', this.playAgain, this,1,0,2);
		this.add.button(500, 500, 'button-mainMenu', this.mainMenu, this,1,0,2);
		if(seconds<=10){
		this.add.text(100, 200, "You scored: "+gameScore + " in " + minutes +":0"+seconds,{ font: "30px Old English", fill: "#000000", align: "center" });
		}
		else{
		this.add.text(100, 200, "You scored: "+gameScore + " in " + minutes +":"+seconds,{ font: "30px Old English", fill: "#000000", align: "center" });	
		}
	},
	playAgain: function() {
		this.state.start("Game");
	},
	mainMenu: function() {
		this.state.start("MainMenu");
	}
	
};