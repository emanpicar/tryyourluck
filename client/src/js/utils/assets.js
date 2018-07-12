import card_win from "Images/card_win.png"
import card_lose from "Images/card_lose.png"
import card_back from "Images/card_back.png"
import icon_lose from "Images/icon_lose.png"
import icon_win from "Images/icon_win.png"
import blast_lose from "Images/blast_lose.png"
import blast_win from "Images/blast_win.png"
import golang_i from "Images/golang_i.png"
import try_your_luck from "Images/try_your_luck.gif"

export default class Assets {
	constructor() {}

	getImages() {
		return [
			{id: "card_win", src: card_win},
			{id: "card_lose", src: card_lose},
			{id: "card_back", src: card_back},
			{id: "icon_lose", src: icon_lose},
			{id: "icon_win", src: icon_win},
			{id: "blast_lose", src: blast_lose},
			{id: "blast_win", src: blast_win},
			{id: "try_your_luck", src: try_your_luck},
		];
	}
}