Card.Leaderboard = function(game){
		
		
};
Card.Leaderboard.prototype = {
	init: function(myScore,myMinutes, mySeconds) {
		score = myScore;
		minutes = myMinutes;
		seconds = mySeconds;
		this.fontStyle = { font: "30px Cinzel Decorative", fill: "#000000"};
   },
	create: function(){
		this.add.sprite(0, 0, 'background');
		this.add.sprite((Card.GAME_WIDTH-434)/2, 20, 'leaderboard-title');
		this.add.button(100, 500, 'button-playAgain', this.playAgain, this,1,0,2);
		this.add.button(500, 500, 'button-mainMenu', this.mainMenu, this,1,0,2);
		this.add.text(150, 150, "NAME ", this.fontStyle);
		this.add.text(350, 150, "SCORES ", this.fontStyle);
		this.add.text(550, 150, "TIME ", this.fontStyle);
		this.add.text(350, 200, score, this.fontStyle);
		this.add.text(550, 200, minutes +":"+seconds, this.fontStyle);
	},
	playAgain: function() {
		this.state.start("Game");
	},
	mainMenu: function() {
		this.state.start("MainMenu");
	}
	
};