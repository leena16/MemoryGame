Card.Instructions = function(game){};
Card.Instructions.prototype = {
	create: function(){
		
		this.add.sprite(0, 0, 'instructions');
		this.add.button(125, 500, 'button-back', this.back, this,1,0,2);
		
		

	},
	back: function() {
		
		this.state.start("MainMenu");
	}
	
	
};