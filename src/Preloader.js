Card.Preloader = function(game){
	// define width and height of the game
	Card.GAME_WIDTH = 800;
	Card.GAME_HEIGHT = 600;
};
Card.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#C68D71';
		this.bar = this.add.sprite((Card.GAME_WIDTH-311)/2, (Card.GAME_HEIGHT-27)/2, 'barbase');
		this.preloadBar = this.add.sprite((Card.GAME_WIDTH-311)/2, (Card.GAME_HEIGHT-27)/2, 'preloaderBar');

		this.load.setPreloadSprite(this.bar);
		this.load.setPreloadSprite(this.preloadBar);
		// load images
		this.load.image('background', 'img/background.png');
		this.load.image('background2', 'img/background2.png');
		this.load.image('strip', 'img/strip.png');
		this.load.image('instructions', 'img/instructions.png');
		this.load.image('title', 'img/title.png');
		this.load.image('high-title', 'img/high-title.png');
		this.load.image('crd1', 'img/crd1.png');
		this.load.image('crd2', 'img/crd2.png');
		this.load.image('crd3', 'img/crd3.png');
		this.load.image('card-back', 'img/card-back.png');
		this.load.image('card-backk', 'img/card-backk.png');
		this.load.image('frame3', 'img/frame3.png')
		//this.load.image('button-pause', 'img/button-pause.png')
		//this.load.image('button-close', 'img/button-close.png')
		
		// load spritesheets
		this.load.spritesheet('button-play', 'img/button-play.png', 274, 71);
		this.load.spritesheet('button-instructions', 'img/button-instructions.png', 274, 71);
		this.load.spritesheet('button-highestscores', 'img/button-highestscores.png', 274, 71);
		this.load.spritesheet('button-back', 'img/button-back.png', 160, 54);
		this.load.spritesheet('button-pause', 'img/button-pause.png', 50, 49);
		this.load.spritesheet('button-close', 'img/button-close.png', 50, 49);
		this.load.spritesheet('button-home', 'img/button-home.png', 160, 54);
		this.load.spritesheet('button-resume', 'img/button-resume.png', 160, 54);
		this.load.spritesheet('button-exit', 'img/button-exit.png', 160, 54);
	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};