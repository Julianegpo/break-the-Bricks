import { Ball } from "../actors/Ball";
import { Bar } from "../actors/bar";
import { Constants } from "../assets/utils/Constants";

window.onload = () => {
    // onload setup getting canvas and generating actors
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    // ctx.translate(canvas.width/2, canvas.height/2);
    let actors = generateActors(ctx, canvas);

    // render phase
    let lastFrame = 0;
    const render = (time) => {
        let delta = (time - lastFrame) / 1000;
        lastFrame = time;
        actors.forEach((e) => {
            e.update(delta, canvas.width, canvas.height);
        });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        actors.forEach((e) => {
            e.draw(delta, ctx);
        });
        window.requestAnimationFrame(render);
    };

    window.requestAnimationFrame(render);

    // registering keyboard inputs for player movement
    document.body.addEventListener(Constants.KEY_EVENT_KEYDOWN, (e) => {
        actors.forEach((actor) => {
            actor.keyboard_event(e.key);
        });
    });
}

// generate the player bar and bricks for game start
function generateActors(ctx, canvas) {
    const actors = [];
    let playerBar = new Bar({ x: (canvas.width) / 2, y: 450 }, ctx);
    let ball = new Ball({ x: 250, y: 100 }, ctx, playerBar);
    actors.push(playerBar);
    actors.push(ball);
    // actors.push(spawnBricks(ctx, canvas));
    return actors;
}

// spawn bricks based on map
function spawnBricks(ctx, canvas) {
    let bricks = [];
    let rows = 5;
    let col = 5;

    
}