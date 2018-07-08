import Table  from "Js/game/table.js";

export default class Menu {
	constructor() {
		this.table = new Table();
	}

	startGame() {
		this.table.startGame();
	}

	resetGame() {

	}

	newPlayer() {

	}

	clickCard(cardName) {
		console.log(cardName);
	}
}