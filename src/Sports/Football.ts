import { Results } from "../Results";
export class Football implements  Results{
    
    winner: string;
    date: Date;
    #goalCountWinner: number
    #goalCountLosser: number
    constructor(winner : string, date : Date, goalCountWinner : number, goalCountLooser : number) {
        this.winner = winner;
        this.date = date;
        this.#goalCountWinner = goalCountWinner;
        this.#goalCountLosser = goalCountLooser;
    }
    
    
    
    result(): string {
        return `Football match: ${this.#goalCountWinner}-${this.#goalCountLosser}`
    }
    
}