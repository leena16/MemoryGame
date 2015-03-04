Card.HighestScores = function(game){};
Card.HighestScores.prototype = {
	create: function(){
		// display images
		this.add.sprite(0, 0, 'background');
		this.add.sprite(100, 20, 'high-title');
		//this.add.sprite((Candy.GAME_WIDTH-395)/2, 300, 'button-instructions');
		
		this.add.button(150, 500, 'button-home', this.home, this,1,0,2);
		this.add.button(450, 500, 'button-exit', this.exit, this,1,0,2);
		
	},
	home: function() {
		this.state.start("MainMenu");
	},
	exit: function(){
		

	}
};