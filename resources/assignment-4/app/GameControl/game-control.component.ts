import { Component } from "@angular/core";

@Component({
    templateUrl: './game-control.component.html',
    selector: 'app-game-control'
})

export class GameControlComponent{
    app: string = "Game Control"
    seconds: number = 0;
    ref: ReturnType<typeof setInterval>;

    oddList: Array<number> = [];
    evenList: Array<number> = [];
    
    startTimer = () => {
        this.ref = setInterval(() => {
            this.seconds++
            if(this.seconds % 2) {
                this.oddList.push(this.seconds);
            } else {
                this.evenList.push(this.seconds);
            }
        }, 1000)
    }

    stopTimer = () => {
        clearInterval(this.ref)
    }
}