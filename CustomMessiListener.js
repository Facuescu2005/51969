import MessiListener from "./generated/MessiListener.js";

export class CustomMessiListener extends MessiListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}