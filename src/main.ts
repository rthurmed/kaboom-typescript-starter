import kaboom from "kaboom";

const k = kaboom({
  width: 800,
  height: 600
});

k.loadSprite("bean", "./sprites/bean.png");

k.add([
  k.sprite("bean"),
]);
