import { Actor, CollisionType, Engine, Input, Vector, vec } from "excalibur";
import { SpriteSheets } from "../resources";

export default class Player extends Actor {
  constructor() {
    super({
      x: 64,
      y: 64,
      width: 64,
      height: 32,
      collisionType: CollisionType.Active,
    });
  }

  public onInitialize(_engine: Engine) {
    this.graphics.use(SpriteSheets.player_idle.sprites[0]);
  }

  public onPostUpdate(engine: Engine, _delta: number) {
    if (engine.input.keyboard.isHeld(Input.Keys.Right)) {
      this.move(vec(1, 0));
    }

    if (engine.input.keyboard.isHeld(Input.Keys.Left)) {
      this.move(vec(-1, 0));
    }

    if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
      this.vel.y -= 100;
    }
  }

  private move(vec: Vector) {
    this.pos.x += vec.x;
    this.pos.y += vec.y;
  }
}
