import createjs from "createjs";

import Assets  from "Js/utils/assets.js";
import Table  from "Js/game/table.js";
import Menu  from "Js/game/menu.js";

import Game  from "Js/utils/game.js";
import Fixtures  from "Js/utils/fixtures.js";

export default class Loading {
    constructor() {
        this.assets = new Assets();
        this.table = new Table();
        this.menu = new Menu();
    }

    initialize() {
        this.setupCreatejs();
    }

    setupCreatejs() {
        Game.stage = new createjs.Stage("layer-stage");
        Game.queue = new createjs.LoadQueue(false, null, true);
        Game.queue.installPlugin(createjs.Sound);
        createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
        createjs.Ticker.framerate = 30;

        Game.queue.loadManifest(this.assets.getImages());
        Game.queue.on("complete", () => {
            this.drawAssets();
        });
    }

    drawAssets() {
        const cardDeck = this.drawDeck();
        const cardLeft = this.drawPlayingCard(Fixtures.cardLeftName);
        const cardRight = this.drawPlayingCard(Fixtures.cardRightName);
        const winnerAnimation = this.drawWinAnimation();
        const loserAnimation = this.drawLoseAnimation();
        const continueBtn = this.drawContinue();

        Game.stage.addChild(cardDeck, cardLeft, cardRight, winnerAnimation, loserAnimation, continueBtn);
        Game.stage.update();
        this.complete();
    }

    drawDeck() {
        const cardDeck = Game.createContainer("cardDeck", 384, 150);
        cardDeck.shadow = new createjs.Shadow("rgba(0, 0, 0, .1)", 5, 5, 10);

        const card_back1 = Game.createImage("", Game.queue.getResult("card_back"), 0, 0, .35, .35, 65, 101);
        const card_back2 = Game.createImage("", Game.queue.getResult("card_back"), -1, -2, .35, .35, 65, 101);
        const card_back3 = Game.createImage("", Game.queue.getResult("card_back"), -2, -4, .35, .35, 65, 101);
        const card_back4 = Game.createImage("", Game.queue.getResult("card_back"), -3, -6, .35, .35, 65, 101);
        const card_back5 = Game.createImage("", Game.queue.getResult("card_back"), -4, -8, .35, .35, 65, 101);
        
        cardDeck.addChild(card_back1, card_back2, card_back3, card_back4, card_back5);

        return cardDeck;
    }

    drawPlayingCard(name) {
        const playingCard = Game.createContainer(name, Game.positionList.playingCardPos.x, Game.positionList.playingCardPos.y);
        playingCard.shadow = new createjs.Shadow("rgba(0, 0, 0, .4)", 5, 5, 10);
        playingCard.addEventListener("click", () => {
            this.table.clickCard(name);
        });

        const cardWin = Game.createContainer("cardWin", 0, 0);
        cardWin.visible = false;
        const card_win = Game.createImage("card_win", Game.queue.getResult("card_win"), 0, 0, .35, .35, 65, 101);
        const icon_win = Game.createImage("icon_win", Game.queue.getResult("icon_win"), 0, 0, .05, .05, 297, 269.5);
        cardWin.addChild(card_win, icon_win);
        
        const cardLose = Game.createContainer("cardLose", 0, 0);
        cardLose.visible = false;
        const card_lose = Game.createImage("card_lose", Game.queue.getResult("card_lose"), 0, 0, .35, .35, 65, 101);
        const icon_lose = Game.createImage("icon_lose", Game.queue.getResult("icon_lose"), 0, 0, .2, .2, 100, 68.5);
        cardLose.addChild(card_lose, icon_lose);

        const card_back = Game.createImage("card_back", Game.queue.getResult("card_back"), 0, 0, .35, .35, 65, 101);
        card_back.visible = true;

        playingCard.addChild(cardWin, cardLose, card_back);

        // added attr
        playingCard.clickDisable = true;

        return playingCard;
    }

    drawWinAnimation() {
        const winnerAnimation = Game.createContainer("winnerAnimation", 234, 84);
        winnerAnimation.visible = false;

        const winSprite = Game.createSprite("winSprite", Game.queue.getResult("blast_win"), 300, 300, {blast: [0, 36]})
        const youWin = Game.createText("youWin", "You           Win", "bold 50px Gaegu", "#e2dd27", -40, 85);

        winnerAnimation.addChild(winSprite, youWin);

        return winnerAnimation;
    }

    drawLoseAnimation() {
        Game.gamePlay({name: "drawLoseAnimation", status: true});
        const loserAnimation = Game.createContainer("loserAnimation", 234, 84);
        loserAnimation.visible = false;

        const loseSprite = Game.createSprite("loseSprite", Game.queue.getResult("blast_lose"), 300, 300, {blast: [0, 36]})
        // loseSprite.play("blast")
        const youLose = Game.createText("youLose", "You           Lose", "bold 50px Gaegu", "#c70c0c", -45, 85);

        loserAnimation.addChild(loseSprite, youLose);

        return loserAnimation;
    }

    drawContinue() {
        const continueBtn = Game.createContainer("continueBtn", 300, 340);
        continueBtn.visible = false;
        const roundRect = new createjs.Shape();
        roundRect.graphics
            .setStrokeStyle(5)
            .beginStroke("#272727")
            .drawRoundRect(0, 0, 165, 30, 5);

        const continueGame = Game.createText("continueGame", "Continue", "bold 30px Gaegu", "#272727", 30, 23);

        continueBtn.addChild(roundRect, continueGame);
        return continueBtn;
    }

    complete() {
        this.menu.initialize();
        console.log("loading complete...");
        console.log(Game.stage)
    }
}