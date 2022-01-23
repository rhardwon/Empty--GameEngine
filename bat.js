class Bat {
	constructor(game){
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./rat_and_bat.png"), 0, 0, 32, 320, 10, .3);

	};

	update(){

	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, 100, 100);
	};
}