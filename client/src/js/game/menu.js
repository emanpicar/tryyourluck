import Table  from "Js/game/table.js";
import Logic  from "Js/game/logic.js";
import Game  from "Js/utils/game.js";

export default class Menu {
	constructor() {
		this.table = new Table();
		this.logic = new Logic();
	}

	initialize() {
		this.addEvents("gStart", "click", this.startGame.bind(this));
		this.addEvents("gReset", "click", this.resetGame.bind(this));
		this.addEvents("gNewPlayer", "click", this.newPlayer.bind(this));
	}

	startGame() {
		if(Game.player.name == null) return;

		Game.currentResult = this.logic.generateGameResult();
		this.table.startGame(Game.currentResult);
		console.log("startGame")
	}

	resetGame() {
		console.log("resetGame")
	}

	newPlayer() {
		console.log("newPlayer")
		Game.player.name = "Eman Picar";
		Game.player.score = 0;
	}

	addEvents(elemId, eventType, callback) {
		let dom = document.getElementById(elemId);
		dom.addEventListener(eventType, callback);
	}
}