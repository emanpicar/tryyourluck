import createjs from "createjs";

import Logic  from "Js/game/logic.js";

import Game  from "Js/utils/game.js";
import Fixtures  from "Js/utils/fixtures.js";

export default class Table {
    constructor() {
        this.logic = new Logic();
        this.continueDisable = false;
    }

    startGame() {
        Game.gamePlay({name: "startGame", status: true});

        const cardLeft = Game.stage.getChildByName(Fixtures.cardLeftName);
        const cardRight = Game.stage.getChildByName(Fixtures.cardRightName);
        let gameResult = Game.currentResult = this.logic.generateGameResult();

        Game.isPlaying = true;
        this.setGameResult(gameResult, cardLeft, cardRight);
    }

    setGameResult(gameResult, cardLeft, cardRight) {
        let loseCont, winCont;

        if(gameResult.cardLeft == Fixtures.loseStatus && gameResult.cardRight == Fixtures.winStatus) {
            loseCont = cardLeft.getChildByName("cardLose");
            loseCont.visible = true;
            winCont = cardRight.getChildByName("cardWin");
            winCont.visible = true;
        } else if(gameResult.cardLeft == Fixtures.winStatus && gameResult.cardRight == Fixtures.loseStatus) {
            winCont = cardLeft.getChildByName("cardWin");
            winCont.visible = true;
            loseCont = cardRight.getChildByName("cardLose");
            loseCont.visible = true;
        } else alert("Something went wrong in computing game result...");

        this.animateCardRight(cardLeft, cardRight);
    }

    animateCardRight(cardLeft, cardRight) {
        createjs.Tween.get(cardRight)
            .to({
                x: Game.positionList.rightCardRevealPos.x,
                y: Game.positionList.rightCardRevealPos.y,
                scaleX: 2,
                scaleY: 2,
            }, 500, createjs.Ease.sineIn)
            .call(() => {
                this.animateCardLeft(cardLeft, cardRight)
            });
    }

    animateCardLeft(cardLeft, cardRight) {
        createjs.Tween.get(cardLeft)
            .to({
                x: Game.positionList.leftCardRevealPos.x,
                y: Game.positionList.leftCardRevealPos.y,
                scaleX: 2,
                scaleY: 2,
            }, 500, createjs.Ease.sineIn)
            .call(() => {
                Game.gamePlay({name: "startGame", status: false});
                cardLeft.clickDisable = cardRight.clickDisable = false;
            });
    }

    clickCard(cardName) {
        let cardCont = Game.stage.getChildByName(cardName);
        if(cardCont.clickDisable) return;

        Game.gamePlay({name: "clickCard", status: true});
        cardCont.clickDisable = true;

        this.updateGameScore(cardCont);
    }

    updateGameScore(cardCont) {
        this.logic.updateGameScore(cardCont)

        this.animateOpenCard(cardCont);
    }

    animateOpenCard(cardCont) {
        createjs.Tween.get(cardCont)
            .to({
                scaleX: 0
            }, 300, createjs.Ease.sineIn)
            .call(() => {
                cardCont.getChildByName("card_back").visible = false;
            })
            .to({
                scaleX: 2
            }, 300, createjs.Ease.sineIn)
            .call(() => {
                Game.gamePlay({name: "clickCard", status: false});
            })
            .wait(1000).call(() => {
                this.winLoseAnimation();
            })
    }

    winLoseAnimation() {
        const winnerAnimation = Game.stage.getChildByName("winnerAnimation");
        const loserAnimation = Game.stage.getChildByName("loserAnimation");

        if(Game.player.pickResult == Fixtures.winStatus) {
            this.animateWinnner(winnerAnimation);
        } else {
            this.animateLoser(loserAnimation);
        }
    }

    animateWinnner(winnerAnimation) {
        winnerAnimation.visible = true;
        const winSprite = winnerAnimation.getChildByName("winSprite");
        const youWin = winnerAnimation.getChildByName("youWin");

        this.playWinLoseAnimations(winSprite, youWin);
    }

    animateLoser(loserAnimation) {
        loserAnimation.visible = true;
        const loseSprite = loserAnimation.getChildByName("loseSprite");
        const youLose = loserAnimation.getChildByName("youLose");

        this.playWinLoseAnimations(loseSprite, youLose);
    }

    playWinLoseAnimations(winLoseSprite, winLose) {
        winLoseSprite.play("blast");
        createjs.Tween.get(winLoseSprite)
            .to({
                alpha: 1,
            }, 300, createjs.Ease.sineIn);

        createjs.Tween.get(winLose)
            .to({
                alpha: 1,
            }, 400, createjs.Ease.sineIn)
            .call(() => {
                this.revealContinueBtn();
            })
    }

    revealContinueBtn() {
        const continueBtn = Game.stage.getChildByName("continueBtn");
        continueBtn.visible = true;
        this.continueDisable = false;

        this.continueBtnAnimation(continueBtn);
    }

    continueBtnAnimation(continueBtn) {
        createjs.Tween.get(continueBtn)
            .to({
                alpha: 1
            }, 300, createjs.Ease.sineIn)
    }

    clickContinue() {
        if(this.continueDisable) return;
        this.continueDisable = true;
        this.clearStage();
    }

    clearStage() {
        Game.gamePlay({name: "clearStage", status: true});
        const cardLeft = Game.stage.getChildByName(Fixtures.cardLeftName);
        const cardRight = Game.stage.getChildByName(Fixtures.cardRightName);

        cardLeft.clickDisable = true;
        cardRight.clickDisable = true;
        Game.player.pickResult = null;
        Game.currentResult = {};

        this.animateRemoveContinueBtn();
    }

    animateRemoveContinueBtn() {
        const continueBtn = Game.stage.getChildByName("continueBtn");

        createjs.Tween.get(continueBtn)
            .to({
                alpha: 0
            }, 300, createjs.Ease.sineIn)
            .call(() => {
                continueBtn.visible = false;
                this.hideWinLoseAnimation();
            });

    }

    hideWinLoseAnimation() {
        const winnerAnimation = Game.stage.getChildByName("winnerAnimation");
        const loserAnimation = Game.stage.getChildByName("loserAnimation");

        const winSprite = winnerAnimation.getChildByName("winSprite");
        const youWin = winnerAnimation.getChildByName("youWin");

        const loseSprite = loserAnimation.getChildByName("loseSprite");
        const youLose = loserAnimation.getChildByName("youLose");

        this.animateHideWin(winnerAnimation, winSprite, youWin);
        this.animateHideLose(loserAnimation, loseSprite, youLose);
    }

    animateHideWin(winCont, winSprite, youWin) {
        winSprite.stop();
        createjs.Tween.get(winSprite)
            .to({
                alpha: 0,
            }, 300, createjs.Ease.sineIn);

        createjs.Tween.get(youWin)
            .to({
                alpha: 0,
            }, 400, createjs.Ease.sineIn)
            .call(() => {
                winCont.visible = false;
            })
    }

    animateHideLose(loseCont, loseSprite, youLose) {
        loseSprite.stop();
        createjs.Tween.get(loseSprite)
            .to({
                alpha: 0,
            }, 300, createjs.Ease.sineIn);

        createjs.Tween.get(youLose)
            .to({
                alpha: 0,
            }, 400, createjs.Ease.sineIn)
            .call(() => {
                loseCont.visible = false;
                this.animateFlipCard();
            })
    }

    animateFlipCard() {
        const cardLeft = Game.stage.getChildByName(Fixtures.cardLeftName);
        const cardRight = Game.stage.getChildByName(Fixtures.cardRightName);

        createjs.Tween.get(cardLeft)
            .to({
                scaleX: cardLeft.getChildByName("card_back").visible ? 2 : 0
            }, 300, createjs.Ease.sineIn)
            .call(() => {
                this.resetPlayingCard(cardLeft);
            })
            .to({
                scaleX: 2
            }, 300, createjs.Ease.sineIn);

        createjs.Tween.get(cardRight)
            .to({
                scaleX: cardRight.getChildByName("card_back").visible ? 2 : 0
            }, 300, createjs.Ease.sineIn)
            .call(() => {
                this.resetPlayingCard(cardRight);
            })
            .to({
                scaleX: 2
            }, 300, createjs.Ease.sineIn)
            .call(() => {
                this.animateReturnToDeck(cardLeft, cardRight);
            });
    }

    animateReturnToDeck(cardLeft, cardRight) {
        createjs.Tween.get(cardLeft)
            .to({
                x: Game.positionList.playingCardPos.x,
                y: Game.positionList.playingCardPos.y,
                scaleX: 1,
                scaleY: 1,
            }, 500, createjs.Ease.sineIn)
            .call(() => {
                createjs.Tween.get(cardRight)
                    .to({
                        x: Game.positionList.playingCardPos.x,
                        y: Game.positionList.playingCardPos.y,
                        scaleX: 1,
                        scaleY: 1,
                    }, 500, createjs.Ease.sineIn)
                    .wait(500).call(() => {
                        Game.gamePlay({name: "clearStage", status: false});
                        this.startGame();
                    });
            })
    }

    resetPlayingCard(playingCard) {
        playingCard.getChildByName("cardWin").visible = false;
        playingCard.getChildByName("cardLose").visible = false;
        playingCard.getChildByName("card_back").visible = true;
    }
}