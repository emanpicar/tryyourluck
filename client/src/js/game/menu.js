import Table  from "Js/game/table.js";
import Game  from "Js/utils/game.js";

export default class Menu {
	constructor() {
		this.table = Table;
	}

	initialize() {
		this.addEvents("gStart", "click", this.startGame.bind(this));
		this.addEvents("gNewPlayer", "click", this.newPlayer.bind(this));
		Game.disableMenu("gStart", "menu-disable", true);
	}

	startGame() {
		if(Game.player.name == null || Game.isPlaying) return;

		Game.disableMenu("gStart", "menu-disable", true);
		this.table.startGame();
	}

	newPlayer() {
		if(Game.disableNewPlayer) return;
		Game.disableMenu("gStart", "menu-disable", false);

		let gInputNewPlayer = document.getElementById("gInputNewPlayer");
		Game.player.name = (gInputNewPlayer.value) ? gInputNewPlayer.value : "I am Stupid";
		Game.player.score = 0;

		Game.isPlaying = false;
		Game.setPlayerNameInDom(Game.player.name);
        Game.setPlayerScoreInDom(Game.player.score);
	}

	addEvents(elemId, eventType, callback) {
		let dom = document.getElementById(elemId);
		dom.addEventListener(eventType, callback);
	}
}