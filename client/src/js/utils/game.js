import createjs from "createjs";

const Game = {
	stage: "",
	queue: "",
	positionList: {
		playingCardPos: {x: 380, y: 142},
		leftCardRevealPos: {x: 230, y: 252},
		rightCardRevealPos: {x: 530, y: 252},
	},
	createContainer(name, x, y) {
		const container = new createjs.Container();
		container.name = name;
		container.x = x;
		container.y = y;

		return container;
	},
	createImage(name, imagePath, x, y, scaleX, scaleY, regX, regY) {
		const image = new createjs.Bitmap(imagePath);
		image.name = name;
		image.x = x;
		image.y = y;
		image.scaleX = scaleX;
		image.scaleY = scaleY;
		image.regX = regX;
		image.regY = regY;

		return image;
	},
	eventListTimeout: null,
	eventList: {},
	gamePlay(event) {
		this.eventList[event.name] = event.status;
		let stringifyEventList = JSON.stringify(this.eventList);

		if(stringifyEventList.match(true)) {

			if(!createjs.Ticker.hasEventListener("tick")) {
				createjs.Ticker.addEventListener("tick", this.stage);
			}
		} else {
			clearTimeout(this.eventListTimeout)
			this.eventListTimeout = setTimeout(() => {
				createjs.Ticker.removeEventListener("tick", this.stage);
			}, 1000);
		}
	}
};

export default Game;