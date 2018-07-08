import createjs from "createjs";

import Game  from "Js/utils/game.js";

export default class Table {
	constructor() {}

	startGame() {
		console.log(Game.stage)
		Game.gamePlay({name: "startGame", status: true});
		const cardLeft = Game.stage.getChildByName("cardLeft");
		const cardRight = Game.stage.getChildByName("cardRight");

		this.animateCardRight(cardLeft, cardRight);
	}

	animateCardRight(cardLeft, cardRight) {
		createjs.Tween.get(cardRight)
			.to({
				x: Game.positionList.rightCardRevealPos.x,
				y: Game.positionList.rightCardRevealPos.y,
				scaleX: 2,
				scaleY: 2,
			}, 500, createjs.Ease.sineIn)
			.call(() => {
				this.animateCardLeft(cardLeft)
			});
	}

	animateCardLeft(cardLeft) {
		createjs.Tween.get(cardLeft)
			.to({
				x: Game.positionList.leftCardRevealPos.x,
				y: Game.positionList.leftCardRevealPos.y,
				scaleX: 2,
				scaleY: 2,
			}, 500, createjs.Ease.sineIn)
			.call(() => {
				Game.gamePlay({name: "startGame", status: false});
			});
	}
}