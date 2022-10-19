import { Results } from "../Results";
export class Marathon implements Results {
    winner: string;
    date: Date;
    runnedTime: number
    
    constructor(winner : string, date : Date, runnedTime : number) {
        this.winner = winner;
        this.date = date;
        this.runnedTime = runnedTime;
    }


    result(): string {
        return `Marathon: ${this.#getMinAndSec()}`
    }

    #getMinAndSec() : string {
        let secs = this.runnedTime % 60;
        let mins = (this.runnedTime - secs) / 60
        return `${mins} min ${secs} s`
    }   
}