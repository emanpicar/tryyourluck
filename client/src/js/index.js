import "Css/main.css"

import createjs from "createjs";
import Loading from "Js/game/loading.js";

class Main {
	constructor() {
		const loading = new Loading();
		loading.initialize();
	}
}


(function() {
	new Main();
})();