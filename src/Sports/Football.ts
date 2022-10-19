import { Results } from "../Results";
export class Football implements  Results{
    
    winner: string;
    date: Date;
    #goolCountWinner: number
    #goolCountLosser: number
    constructor(winner : string, date : Date, goolCountWinner : number, goolCountLooser : number) {
        this.winner = winner;
        this.date = date;
        this.#goolCountWinner = goolCountWinner;
        this.#goolCountLosser = goolCountLooser;
    }
    
    
    
    result(): string {
        return `Football match: ${this.#goolCountWinner}-${this.#goolCountLosser}`
    }
    
}