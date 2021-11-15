import { Actor, CollisionType, Color, Engine, Physics, vec } from "excalibur";
import Player from "./actors/player";
import { loader } from "./resources";

Physics.acc = vec(0, 500);

const game = new Engine({
  width: 800,
  height: 600,
});

game.start(loader);

const player = new Player();
const ground = new Actor({
  pos: vec(game.halfDrawWidth, game.drawHeight),
  width: game.drawHeight,
  height: 100,
  color: Color.Green,
  collisionType: CollisionType.Fixed,
});

game.add(ground);
game.add(player);
