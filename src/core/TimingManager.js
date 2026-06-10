export default class TimingManager{
    constructor(game, renderer){
        this.game = game;
        this.renderer = renderer;
        this.running = false;
        this.lastTime = null;
    }


    start() {
        if(this.running)    return;
        this.running = true;
        requestAnimationFrame(this.run);
    }

    stop() {
        if(!this.running)   return;

        this.lastTime = null;
        this.running = false;
    }


    run = (timestamp) => {

        // Initial game running or paused check
        if(!this.running) return;


        // after start, 1st interval lastTime is set to timestamp
        if(!this.lastTime) this.lastTime = timestamp;


        const deltaTime = Math.min(timestamp - this.lastTime, 100);
        this.game.update(deltaTime);
        this.renderer.draw();


        // RAF loop
        requestAnimationFrame(this.run);
    }
}