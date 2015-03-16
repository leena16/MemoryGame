Card.Game = function(game){
	this.cards=null;
	cards=new Array();
	
	faceDownButton = new Array();
	counter = 0;
	count = 52;
	firstClickIndex = 0;
	secondClickIndex = 0;
	click = 0;
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
				cards[j+13*i] = { name: (j+1)+ chars[i], button: null, image: null }
			};
		};

		for (var i = cards.length-1; i > 0; i--) { 
			this.randomize(cards);
		}
		
		for(var r = 0; r < 5; r++){
			for(var c = 0; c < 11; c++){


		   		image = this.add.sprite(2+c*72, 52+r*102, cards[counter].name);
		   		button = this.add.button(2+c*72, 52+r*102,"card-back", this.faceDownButtonClicked, this);
				button.counter = counter;		   		

		   		cards[counter].button = button;
		   		cards[counter].image = image;

				counter++;
				if (counter == 52) { break; }
			 }
			 if (counter == 52) { break; }
		}
	
		
 	},

 	faceDownButtonClicked: function(button) {
 		//alert(button.counter);
 		button.visible = false;
 		click++;
 		
 		if(click==1){
 			firstClickIndex = button.counter;
 		}
 		else if(click==2){
 			secondClickIndex = button.counter;
 			click = 0;
 			this.isMatchFound();
 		}
 		
 		
 	},
 	isMatchFound: function(){
 		
 		if((parseInt(cards[firstClickIndex].name.match(/\d+/))) == (parseInt(cards[secondClickIndex].name.match(/\d+/))))
 		{	
			cards[firstClickIndex].image.destroy();
 			cards[secondClickIndex].image.destroy();
 			count = count - 2;

 		}
 		else
 		{
 			setTimeout(function(){cards[firstClickIndex].button.visible = true; cards[secondClickIndex].button.visible = true;
 			secondClickIndex = 0;},200);
 			if(count == 0){
 				alert("game over");
 				this.state.start("HighestScores");
 			}
 			else{
 				console.log(count);
 			}

 			
 		}


 	},
 	

	randomize: function(){
		
		for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    	}
   		return cards;
		
	},

	update: function(){
	}

};