export default class InputManager{
    constructor() {

        this.playerMovementQueue = [];
        this.legalPlayerMovements = new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"]);

        this.menuInputSet = new Set();
        this.legalMenuInputs = new Set(["p", "Escape", "Enter", "d", "z"]);

        window.addEventListener("keydown", (e) => {
            if(this.legalPlayerMovements.has(e.key) && !this.playerMovementQueue.includes(e.key))
                this.playerMovementQueue.push(e.key);
                

            if(this.legalMenuInputs.has(e.key) && !this.menuInputSet.has(e.key))
                this.menuInputSet.add(e.key);

        });    
    }


    getPlayerMovementQueue() {
        return this.playerMovementQueue;
    }

    shiftMovementQueue() {
        this.playerMovementQueue.shift();
    }

    checkmenuInputSet(key) {
        return this.menuInputSet.has(key);
    }


    removeAlreadyExecuted(key) {
        this.menuInputSet.delete(key);
    }
}