import Game  from "Js/utils/game.js";
import Fixtures  from "Js/utils/fixtures.js";

export default class Logic {
	constructor() {}

	generateGameResult() {
		let gameResult = {};

		if(Math.floor(Math.random() * 2)) {
			gameResult[Fixtures.cardLeftName] = Fixtures.loseStatus;
			gameResult[Fixtures.cardRightName] = Fixtures.winStatus;
		} else {
			gameResult[Fixtures.cardLeftName] = Fixtures.winStatus;
			gameResult[Fixtures.cardRightName] = Fixtures.loseStatus;
		}

		console.log(gameResult);
		return gameResult;
	}

	updateGameScore(cardCont) {
		const resultStatus = Game.currentResult[cardCont.name];
		if(resultStatus == Fixtures.winStatus && Game.player.pickResult != Fixtures.loseStatus) Game.player.score++;
		else {
			Game.player.score = 0;
			Game.player.pickResult = "";
			Game.currentResult = {};
		}

		Game.player.pickResult = resultStatus;
		console.log(Game.player);
	}
}