Card.Game = function(game){
	var swap;
	
	
	this.x=null;
	this.cards=null;
	this.card_names=null;
};
Card.Game.prototype = {
	
	create: function(){
		this.add.sprite(0, 0, 'background2');
		this.add.sprite(0,0,'strip'); 
		//this.add.sprite(2, 52, 'crd1');
		//this.add.sprite(73, 52, 'crd2');
		//this.add.sprite(144, 52, 'crd3');
		//this.add.sprite(216, 52, 'card-back');
		//this.add.sprite(288, 52, 'card-backk');
		// add pause button
		this.add.button(670, 0, 'button-pause', this.managePause, this,1,0,2);
		this.add.button(730, 0, 'button-close', this.close, this,1,0,2);


 cards =new Array();
 card_names=new Array();
 card_names[0]='2c';
 card_names[1]='3c';
 card_names[2]='4c';
 card_names[3]='5c';
 card_names[4]='6c';
 card_names[5]='7c';
 card_names[6]='8c';
 card_names[7]='9c';
 card_names[8]='10c';
 card_names[9]='ac';
 card_names[10]='jc';
 card_names[11]='2d';
 card_names[12]='3d';
 card_names[13]='4d';
 card_names[14]='5d';
 card_names[15]='6d';
 card_names[16]='7d';
 card_names[17]='8d';
 card_names[18]='9d';
 card_names[19]='10d';
 card_names[20]='ad';
 card_names[21]='jd';
 card_names[22]='2s';
 card_names[23]='3s';
 card_names[24]='4s';
 card_names[25]='5s';
 card_names[26]='6s';
 card_names[27]='7s';
 card_names[28]='8s';
 card_names[29]='9s';
 card_names[30]='10s';
 card_names[31]='as';
 card_names[32]='js';
 card_names[33]='2h';
 card_names[34]='3h';
 card_names[35]='4h';
 card_names[36]='5h';
 card_names[37]='6h';
 card_names[38]='7h';
 card_names[39]='8h';
 card_names[40]='9h';
 card_names[41]='10h';
 card_names[42]='ah';
 card_names[43]='jh';
 card_names[44]='qc';
 card_names[45]='kc';
 card_names[46]='qd';
 card_names[47]='kd';
 card_names[48]='qs';
 card_names[49]='ks';
 card_names[50]='qh';
 card_names[51]='kh';



for (i = card_names.length-1; i > 0; i--) { 

	this.randomize(card_names);
 
 //  do{ 
   		/*swap = Math.floor(Math.random() * i);
 //  } while (card_names[swap]);
 //  card_names[swap] = true;

    	temp = card_names[i];
    	card_names[i] = card_names[swap];
    	card_names[swap] = temp;*/


    
}
 //cards[0]=new Array(11);
 cards[0]=this.add.sprite(2,52,card_names[0]);
 cards[1]=this.add.sprite(74,52,card_names[1]);
 cards[2]=this.add.sprite(146,52,card_names[2]);
 cards[3]=this.add.sprite(218,52,card_names[3]);
 cards[4]=this.add.sprite(290,52,card_names[4]);
 cards[5]=this.add.sprite(362,52,card_names[5]);
 cards[6]=this.add.sprite(434,52,card_names[6]);
 cards[7]=this.add.sprite(508,52,card_names[7]);
 cards[8]=this.add.sprite(582,52,card_names[8]);
 cards[9]=this.add.sprite(656,52,card_names[9]);
 cards[10]=this.add.sprite(728,52,card_names[10]);

 //cards[1]=new Array(11);
 cards[11]=this.add.sprite(2,156,card_names[11]);
 cards[12]=this.add.sprite(74,156,card_names[12]);
 cards[13]=this.add.sprite(146,156,card_names[13]);
 cards[14]=this.add.sprite(218,156,card_names[14]);
 cards[15]=this.add.sprite(290,156,card_names[15]);
 cards[16]=this.add.sprite(362,156,card_names[16]);
 cards[17]=this.add.sprite(434,156,card_names[17]);
 cards[18]=this.add.sprite(508,156,card_names[18]);
 cards[19]=this.add.sprite(582,156,card_names[19]);
 cards[20]=this.add.sprite(656,156,card_names[20]);
 cards[21]=this.add.sprite(728,156,card_names[21]);

 cards[22]=this.add.sprite(2,260,card_names[22]);
 cards[23]=this.add.sprite(74,260,card_names[23]);
 cards[24]=this.add.sprite(146,260,card_names[24]);
 cards[25]=this.add.sprite(218,260,card_names[25]);
 cards[26]=this.add.sprite(290,260,card_names[26]);
 cards[27]=this.add.sprite(362,260,card_names[27]);
 cards[28]=this.add.sprite(434,260,card_names[28]);
 cards[29]=this.add.sprite(508,260,card_names[29]);
 cards[30]=this.add.sprite(582,260,card_names[30]);
 cards[31]=this.add.sprite(656,260,card_names[31]);
 cards[32]=this.add.sprite(728,260,card_names[32]);

 cards[33]=this.add.sprite(2,364,card_names[33]);
 cards[34]=this.add.sprite(74,364,card_names[34]);
 cards[35]=this.add.sprite(146,364,card_names[35]);
 cards[36]=this.add.sprite(218,364,card_names[36]);
 cards[37]=this.add.sprite(290,364,card_names[37]);
 cards[38]=this.add.sprite(362,364,card_names[38]);
 cards[39]=this.add.sprite(434,364,card_names[39]);
 cards[40]=this.add.sprite(508,364,card_names[40]);
 cards[41]=this.add.sprite(582,364,card_names[41]);
 cards[42]=this.add.sprite(656,364,card_names[42]);
 cards[43]=this.add.sprite(728,364,card_names[43]);

 cards[44]=this.add.sprite(74,468,card_names[44]);
 cards[45]=this.add.sprite(146,468,card_names[45]);
 cards[46]=this.add.sprite(218,468,card_names[46]);
 cards[47]=this.add.sprite(290,468,card_names[47]);
 cards[48]=this.add.sprite(362,468,card_names[48]);
 cards[49]=this.add.sprite(434,468,card_names[49]);
 cards[50]=this.add.sprite(508,468,card_names[50]);
 cards[51]=this.add.sprite(582,468,card_names[51]);
 
 
 
},
	randomize: function(){
		swap = Math.floor(Math.random() * i);
		temp = card_names[i];
    	card_names[i] = card_names[swap];
    	card_names[swap] = temp;

	},
	

	close: function(){
		this.state.start("MainMenu");
	},
	managePause: function(){
		// pause the game
		this.game.paused = true;
		
		// add proper informational text
		//var pausedText = this.add.text(200, 250, "Game paused.\nTap anywhere to continue.", this._fontStyle);
		var image = this.add.sprite(0,0,'blur')
		var pausedText = this.add.sprite(170, 50, 'framescroll');
		var resume = this.add.button(300,320,'button-resume');

		var tween = this.add.tween(pausedText);
		tween.to({ y: 400 });
		tween.start();
  
   


		
		//this.add.sprite(100,100,'frame');
		// set event listener for the user's click/tap the screen
		this.input.onDown.add(function(){
			// remove the pause text
			image.destroy();
			pausedText.destroy();
			resume.destroy();

			// unpause the game
			this.game.paused = false;
		}, this);
	},



	update: function(){
		


	}
};
