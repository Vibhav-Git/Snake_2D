import RenderingManager from "./core/RenderingManager.js";
import GameManager from "./core/GameManager.js";
import TimingManager from "./core/TimingManager.js";

const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");


canvas.width = 1280;
canvas.height = 720;




const game = new GameManager();
const renderer = new RenderingManager(ctx);


const timer = new TimingManager(game, renderer);
timer.start();