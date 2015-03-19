Card.MainMenu = function(game){};
Card.MainMenu.prototype = {
	create: function(){
		// display images
		this.add.sprite(0, 0, 'background');
		this.add.sprite(75, 60, 'title');
		this.add.button((Card.GAME_WIDTH-274)/2, 300, 'button-instructions', this.instructions, this,1,0,2);
		this.add.button((Card.GAME_WIDTH-274)/2, 400, 'button-leaderboard',this.leaderboard, this,1,0,2);
		this.add.button((Card.GAME_WIDTH-274)/2	,200, 'button-play', this.startGame, this,1,0,2);
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