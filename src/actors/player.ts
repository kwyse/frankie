import { Actor, Engine } from "excalibur";
import { SpriteSheets } from "../resources";

export default class Player extends Actor {
  constructor() {
    super({ x: 64, y: 64, width: 64, height: 32 });
  }

  public onInitialize(_engine: Engine) {
    this.graphics.use(SpriteSheets.player_idle.sprites[0]);
  }

  public onPostUpdate(_engine: Engine, _delta: number) {}
}
