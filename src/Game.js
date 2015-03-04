Card.Game = function(game){
	
	this.x=null;
};
Card.Game.prototype = {
	
	create: function(){
		this.add.sprite(0, 0, 'background2');
		this.add.sprite(0,0,'strip'); 
		//this.add.sprite(2, 52, 'crd1');
		this.add.sprite(73, 52, 'crd2');
		this.add.sprite(144, 52, 'crd3');
		//this.add.sprite(216, 52, 'card-back');
		this.add.sprite(288, 52, 'card-backk');
		// add pause button
		this.add.button(670, 0, 'button-pause', this.managePause, this,1,0,2);
		this.add.button(730, 0, 'button-close', this.close, this,1,0,2);

		

    this.x = this.add.sprite(330, 100, 'crd1', 'card-back');

    this.input.onDown.add(this.changeFrame, this);



    

},

	changeFrame: function(){

    this.x.sprite = 'card-back';

	},

	close: function(){
		this.state.start("MainMenu");
	},
	managePause: function(){
		// pause the game
		this.game.paused = true;
		
		// add proper informational text
		//var pausedText = this.add.text(200, 250, "Game paused.\nTap anywhere to continue.", this._fontStyle);
		var pausedText = this.add.sprite(100, -100, 'frame3');
		var resume = this.add.button(300,300,'button-resume');
		var tween = this.add.tween(pausedText);
		tween.to({ y: 400 });
		tween.start();
  
   


		
		//this.add.sprite(100,100,'frame');
		// set event listener for the user's click/tap the screen
		this.input.onDown.add(function(){
			// remove the pause text
			pausedText.destroy();
			resume.destroy();

			// unpause the game
			this.game.paused = false;
		}, this);
	},



	update: function(){
		


	}
};
