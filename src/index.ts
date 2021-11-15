import { Engine } from "excalibur";
import Player from "./actors/player";
import { loader } from "./resources";

const game = new Engine({
  width: 800,
  height: 600,
});

game.start(loader);

const player = new Player();
game.add(player);
