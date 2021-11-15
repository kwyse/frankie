import { ImageSource, Loader, SpriteSheet } from "excalibur";
import playerIdleFile from "../assets/images/player_idle.png";

const Images: { [key: string]: ImageSource } = {
  playerIdle: new ImageSource(playerIdleFile),
};

const SpriteSheets: { [key: string]: SpriteSheet } = {
  player_idle: SpriteSheet.fromImageSource({
    image: Images.playerIdle,
    grid: {
      columns: 1,
      rows: 1,
      spriteWidth: 64,
      spriteHeight: 32,
    },
  }),
};

const loader = new Loader();
for (const image in Images) {
  loader.addResource(Images[image]);
}

export { loader, SpriteSheets };
