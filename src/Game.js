Card.Game = function(game){
	this.cards=null;
	cardNames=new Array();
	var change;
	var timeLimit;
  	var timesUpText;
    var mySeconds;
    myCountdownSeconds = 10;
    timesUp = null;
    this._fontStyle = { font: "30px Old English", fill: "#FFCC00", stroke: "#333", strokeThickness: 5};
	
};
Card.Game.prototype = {

	create: function(){

		// Add all display elements.
		this.add.sprite(0, 0, 'background2');
		this.add.sprite(0,0,'strip'); 
		this.add.button(670, 0, 'button-pause', this.managePause, this,1,0,2);
		this.add.button(730, 0, 'button-close', this.close, this,1,0,2);
		timesUpText = this.add.text( 400, 10, timesUp,this._fontStyle);
   		t = this.add.text( 10, 10, 'Time: ' + myCountdownSeconds,this._fontStyle);
   	
   		this.displayFaceDownCards();
 },

 	displayFaceDownCards: function() {
 		var chars = ["h", "s", "d", "c"];

		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 13; j++) {
				cardNames[j+13*i]= (j+1)+ chars[i];
			};
		};

		for (var i = cardNames.length-1; i > 0; i--) { 
			this.randomize(cardNames);
		}
		
		var counter = 0;
		for(var r = 0; r < 5; r++){
			for(var c = 0; c < 11; c++){
		   		this.add.sprite(2+c*72, 52+r*102,cardNames[counter]);
		   		faceDownButton = this.add.button(2+c*72, 52+r*102,"card-back", this.faceDownButtonClicked, this);
		   		faceDownButton.counter = counter;
				counter++;
				if (counter == 52) { break; }
			 }
			 if (counter == 52) { break; }
		}
 	},

 	faceDownButtonClicked: function(button) {
 		alert(button.counter);
 		button.visible = false;
 	},

	randomize: function(){
		
		for (var i = cardNames.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cardNames[i];
        cardNames[i] = cardNames[j];
        cardNames[j] = temp;
    	}
   		return cardNames;
		
	},

	update: function(){
	}
};