Card.Leaderboard = function(game){};
Card.Leaderboard.prototype = {
	init: function(score) {
	 	var stext = this.add.text(100, 250, score);
   },
	create: function(){
		// display images
		this.add.sprite(0, 0, 'background');
		this.add.sprite(180, 20, 'leaderboard-title');
		//this.add.sprite((Candy.GAME_WIDTH-395)/2, 300, 'button-instructions');
		
		this.add.button(300, 500, 'button-home', this.home, this,1,0,2);
		//this.add.button(450, 500, 'button-exit', this.exit, this,1,0,2);
		
	},
	home: function() {
		this.state.start("MainMenu");
	}
	//update: function(){
	//	stext.setText('Score: '+score);
	//}
};