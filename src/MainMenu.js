Card.MainMenu = function(game){};
Card.MainMenu.prototype = {
	create: function(){
		// display images
		this.add.sprite(0, 0, 'background');
		this.add.sprite(75, 60, 'title');
		
		//this.add.sprite((Candy.GAME_WIDTH-395)/2, 300, 'button-instructions');
		this.add.button(250, 300, 'button-instructions', this.instructions, this,1,0,2);
		this.add.button(250, 400, 'button-leaderboard',this.leaderboard, this,1,0,2);
		this.add.button(250	,200, 'button-play', this.startGame, this,1,0,2);
		
	},
	startGame: function() {
		this.state.start("Game");
	},
	instructions: function(){
		this.state.start("Instructions");
	},
	leaderboard: function(){
		this.state.start("Leaderboard");
	}
};