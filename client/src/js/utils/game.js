import createjs from "createjs";

const Game = {
    stage: "",
    queue: "",
    isPlaying: false,
    positionList: {
        playingCardPos: {x: 380, y: 142},
        leftCardRevealPos: {x: 230, y: 252},
        rightCardRevealPos: {x: 530, y: 252},
    },
    player: {
        score: 0,
        name: null,
        pickResult: null
    },
    currentResult: {},
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
    createSprite(name, imagePath, width, height, animations) {
        var spriteSheet = new createjs.SpriteSheet({
            images: [imagePath],
            frames: {width: width, height: height},
            animations: animations
        });

        var sprite = new createjs.Sprite(spriteSheet);
        sprite.name = name;

        return sprite;
    },
    createText(name, text, font, color, x, y) {
        var text = new createjs.Text(text, font, color);
        text.name = name
        text.x = x;
        text.y = y;
        text.textBaseline = "alphabetic";

        return text;
    },
    eventHandler: false,
    eventListTimeout: null,
    eventList: {},
    gamePlay(event) {
        this.eventList[event.name] = event.status;
        let stringifyEventList = JSON.stringify(this.eventList);

        if(stringifyEventList.match(true)) {
            clearTimeout(this.eventListTimeout)
            if(!this.eventHandler) {
                this.eventHandler = true;
                createjs.Ticker.addEventListener("tick", this.stage);
            }
        } else {
            this.eventListTimeout = setTimeout(() => {
                createjs.Ticker.removeEventListener("tick", this.eventHandler);
                this.eventHandler = false;
            }, 1000);
        }
    },
    disableMenu(elemId, style, disable) {
        let dom = document.getElementById(elemId);

        if(disable) dom.classList.add(style);
        else dom.classList.remove(style);
    },
    disableNewPlayer: false,
    needToClearStage: false,
    setPlayerNameInDom(playerName) {
        let gName = document.getElementById("gName");

        gName.innerText = playerName;
    },
    setPlayerScoreInDom(playerScore) {
        let gScore = document.getElementById("gScore");

        gScore.innerText = playerScore;
    }
};

export default Game;