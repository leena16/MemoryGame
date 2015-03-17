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
		this.load.image('leaderboard-title', 'img/leaderboard-title.png');
		this.load.image('card-back', 'img/card-back.png');
		this.load.image('blur','img/blur.png')
		
		this.load.image('1c', 'img/cards/1c.png');
		this.load.image('2c', 'img/cards/2c.png');
		this.load.image('3c', 'img/cards/3c.png');
		this.load.image('4c', 'img/cards/4c.png');
		this.load.image('5c', 'img/cards/5c.png');
		this.load.image('6c', 'img/cards/6c.png');
		this.load.image('7c', 'img/cards/7c.png');
		this.load.image('8c', 'img/cards/8c.png');
		this.load.image('9c', 'img/cards/9c.png');
		this.load.image('10c', 'img/cards/10c.png');
		this.load.image('11c', 'img/cards/11c.png');
		this.load.image('12c', 'img/cards/12c.png');
		this.load.image('13c', 'img/cards/13c.png');

		this.load.image('1d', 'img/cards/1d.png');
		this.load.image('2d', 'img/cards/2d.png');
		this.load.image('3d', 'img/cards/3d.png');
		this.load.image('4d', 'img/cards/4d.png');
		this.load.image('5d', 'img/cards/5d.png');
		this.load.image('6d', 'img/cards/6d.png');
		this.load.image('7d', 'img/cards/7d.png');
		this.load.image('8d', 'img/cards/8d.png');
		this.load.image('9d', 'img/cards/9d.png');
		this.load.image('10d', 'img/cards/10d.png');
		this.load.image('11d', 'img/cards/11d.png');
		this.load.image('12d', 'img/cards/12d.png');
		this.load.image('13d', 'img/cards/13d.png');

		this.load.image('1s', 'img/cards/1s.png');
		this.load.image('2s', 'img/cards/2s.png');
		this.load.image('3s', 'img/cards/3s.png');
		this.load.image('4s', 'img/cards/4s.png');
		this.load.image('5s', 'img/cards/5s.png');
		this.load.image('6s', 'img/cards/6s.png');
		this.load.image('7s', 'img/cards/7s.png');
		this.load.image('8s', 'img/cards/8s.png');
		this.load.image('9s', 'img/cards/9s.png');
		this.load.image('10s', 'img/cards/10s.png');
		this.load.image('11s', 'img/cards/11s.png');
		this.load.image('12s', 'img/cards/12s.png');
		this.load.image('13s', 'img/cards/13s.png');
		
		this.load.image('1h', 'img/cards/1h.png');
		this.load.image('2h', 'img/cards/2h.png');
		this.load.image('3h', 'img/cards/3h.png');
		this.load.image('4h', 'img/cards/4h.png');
		this.load.image('5h', 'img/cards/5h.png');
		this.load.image('6h', 'img/cards/6h.png');
		this.load.image('7h', 'img/cards/7h.png');
		this.load.image('8h', 'img/cards/8h.png');
		this.load.image('9h', 'img/cards/9h.png');
		this.load.image('10h', 'img/cards/10h.png');
		this.load.image('11h', 'img/cards/11h.png');
		this.load.image('12h', 'img/cards/12h.png');
		this.load.image('13h', 'img/cards/13h.png');

		
		
		// load spritesheets
		this.load.spritesheet('button-play', 'img/button-play.png', 274, 71);
		this.load.spritesheet('button-instructions', 'img/button-instructions.png', 274, 71);
		this.load.spritesheet('button-leaderboard', 'img/button-leaderboard.png', 274, 71);
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