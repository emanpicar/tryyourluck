require("Css/main.css");
const image = require("Images/card_b_da.png");
const createjs = require("createjs");


class Main {
	constructor() {
		console.log("HELLLLOOOOO");
		console.log(image);
		console.log(createjs);
		this.displayImage();
	}

	displayImage() {
		let ddom = document.getElementById("myimage");
		ddom.src = image
	}
}


(function() {
	new Main();
})();