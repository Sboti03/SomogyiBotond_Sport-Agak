import { Results } from "../Results";

export class Calvinball implements Results {
    
    winner: string;
    date: Date;
    #balls : number

    constructor(winner : string, date : Date) {
        if(winner === 'Calvin' || winner === 'Hobbes') {
            this.winner = winner
            this.date = date;
            this.#balls = Math.floor(Math.random() * 91) + 10;
        } else {
            throw new SyntaxError('Winner only could be "Calvin" or "Hobbes" ');
        }
    }

    result(): string {
        return `Calvinball: ${this.#balls}`
    }
}