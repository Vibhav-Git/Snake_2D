export default class InputManager{
    constructor() {
        this.keyList = new Set();
        this.legalMovementKeys = new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"]);
        this.legalSystemKeys = new Set(['p', 'Esc', "Enter", 'd', 'm']);

        window.addEventListener("keydown", (e) => {
            console.log(e.key);
            if((this.legalMovementKeys.has(e.key) || this.legalSystemKeys.has(e.key)) && !this.keyList.has(e.key))
                this.keyList.add(e.key);

            console.log(this.keyList);
        });
        
    }


    checkKeyList(key) {
        // To be called in each frame from Snake class to check possible actions. Also from GameManager class for actions like pause, debug mode, mute etc
        return this.keyList.has(key);
    }

    removeAlreadyExecuted(key) {
        // To be called after action is taken from Snake Class / GameManager class
        this.keyList.delete(key);
    }


}