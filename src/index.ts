import { Results } from "./Results";
import { Calvinball } from "./Sports/Calvinball";
import { Football } from "./Sports/Football";
import { Marathon } from "./Sports/Marathon";


let results : Results[] = [];



results.push(new Calvinball('Calvin', new Date('2022-07-12')));
results.push(new Calvinball('Hobbes', new Date('2032-07-12')));
results.push(new Football("Reál madrid", new Date('2012-3-2'), 1, 0))
results.push(new Football("Reál madrid", new Date('2011-07-12'), 3, 2))
results.push(new Marathon("Nagy Ákos", new Date('2022-07-13'), 123))
results.push(new Marathon("Istenes", new Date('2022-07-11'), 241))


results.forEach(e => console.log(e.result()))

console.log('\nCsak Calvin nyerő')
results.filter(e => e.winner==='Calvin').forEach(e => console.log(e.result()))


results = results.sort((a, b) => a.date.getTime() - b.date.getTime())

console.log('\n Rendezett')
results.forEach(e => console.log(e.result() + ' ' + e.date.toDateString()))


document.addEventListener('DOMContentLoaded', ()=> {
    
    // To know the type of the button that pressed
    enum FormType {
        Football,
        Marathon,
        Calvinball,
    }

    let currentFormType : FormType;

    //#region Load html
    /**
     * 
     * @param fromType Type of the form
     * Load Html in to the form element 
     */
    const loadHtml = (fromType : FormType) => {
        let htmlDoc = ''
        let btn = ''
        
        // Get the pressed button
        switch(fromType) {
            case FormType.Football:
                htmlDoc = 'football.html'
                btn = 'football-btn'
                break;
            case FormType.Marathon:
                htmlDoc = 'marathon.html'
                btn = 'marathon-btn'
                break;
            case FormType.Calvinball:
                htmlDoc = 'calvinball.html'
                btn = 'calvinball-btn'
                break;
        }

        // Load html
        fetch(htmlDoc)
        .then(response=> response.text())
        .then(text=> document.getElementById('form')!.innerHTML = text);
        
        // Set buttons to active
        let elements = document.getElementsByClassName('nav-btn') as HTMLCollectionOf<HTMLButtonElement>
        Array.from(elements).forEach(e => {
            e.disabled = false;
        });

        // Set button to disabled
        (document.getElementById(btn) as HTMLButtonElement).disabled = true;

        currentFormType = fromType;
    }
    //#endregion


    loadHtml(FormType.Football);

    //#region Nav button eventListener
    let navBtns = document.getElementsByClassName('nav-btn') as HTMLCollectionOf<HTMLButtonElement>
    Array.from(navBtns).forEach(e => {
        e.addEventListener('click', (e)=> {
            let botton = e.currentTarget as HTMLButtonElement
            switch(botton.getAttribute('data-nav-btn') as string) {
                case 'Football':
                    loadHtml(FormType.Football);
                    break;
                case 'Marathon':
                    loadHtml(FormType.Marathon);
                    break;
                case 'Calvinball':
                    loadHtml(FormType.Calvinball);
                    break;
            }
        }
    )});
    //#endregion
    
    const outElements = () => {
        let output = document.getElementById('out') as HTMLElement
        output.innerHTML = ''
        let list = document.createElement('ol')
        results.forEach(e => {
            let li = document.createElement('li')
            li.textContent = e.result();
            list.appendChild(li)
        })
        output.appendChild(list)
    }

    document.getElementById('add-btn')!.addEventListener('click', () => {
        let winner = ''
        let date = new Date((document.getElementById('date') as HTMLInputElement).value)
        let newSportRecord : Results
        switch(currentFormType) {
            case FormType.Football:
                winner = (document.getElementById('winner') as HTMLInputElement).value;
                let winnerGoal = parseInt((document.getElementById('winner-goal') as HTMLInputElement).value);
                let looserGoal = parseInt((document.getElementById('looser-goal') as HTMLInputElement).value);
                newSportRecord = new Football(winner,date,winnerGoal, looserGoal);
            break;

            case FormType.Marathon:
                winner = (document.getElementById('winner') as HTMLInputElement).value;
                let runningTime = parseInt((document.getElementById('running-time') as HTMLInputElement).value)
                newSportRecord = new Marathon(winner,date,runningTime);
            break;
            
            case FormType.Calvinball:
                winner = (document.getElementById('winner') as HTMLSelectElement).value
                newSportRecord = new Calvinball(winner, date);
            break;
        }
        results.push(newSportRecord);
        outElements()
    });

    outElements()

})

