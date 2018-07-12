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

		return gameResult;
	}

	updateGameScore(cardCont) {
		const resultStatus = Game.currentResult[cardCont.name];
		if(!Game.player.pickResult) Game.player.pickResult = resultStatus;
		if(Game.player.pickResult == Fixtures.winStatus && Game.player.pickResult == resultStatus) {
			Game.player.score++;
		} else if(Game.player.pickResult == Fixtures.loseStatus && Game.player.pickResult == resultStatus) {
			Game.player.score = 0;
			Game.player.pickResult = null;
			Game.currentResult = {};
		}
	}
}