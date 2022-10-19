"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calvinball_1 = require("./Sports/Calvinball");
const Football_1 = require("./Sports/Football");
const Marathon_1 = require("./Sports/Marathon");
let results = [];
results.push(new Calvinball_1.Calvinball('Calvin', new Date('2022-07-12')));
results.push(new Calvinball_1.Calvinball('Hobbes', new Date('2032-07-12')));
results.push(new Football_1.Football("Reál madrid", new Date('2012-3-2'), 1, 0));
results.push(new Football_1.Football("Reál madrid", new Date('2011-07-12'), 3, 2));
results.push(new Marathon_1.Marathon("Nagy Ákos", new Date('2022-07-13'), 123));
results.push(new Marathon_1.Marathon("Istenes", new Date('2022-07-11'), 241));
results.forEach(e => console.log(e.result()));
console.log('\nCsak Calvin nyerő');
results.filter(e => e.winner === 'Calvin').forEach(e => console.log(e.result()));
results = results.sort((a, b) => a.date.getTime() - b.date.getTime());
console.log('\n Rendezett');
results.forEach(e => console.log(e.result() + ' ' + e.date.toDateString()));
document.addEventListener('DOMContentLoaded', () => {
    // To know the type of the button that pressed
    let FormType;
    (function (FormType) {
        FormType[FormType["Football"] = 0] = "Football";
        FormType[FormType["Marathon"] = 1] = "Marathon";
        FormType[FormType["Calvinball"] = 2] = "Calvinball";
    })(FormType || (FormType = {}));
    let currentFormType;
    //#region Load html
    /**
     *
     * @param fromType Type of the form
     * Load Html in to the form element
     */
    const loadHtml = (fromType) => {
        let htmlDoc = '';
        let btn = '';
        // Get the pressed button
        switch (fromType) {
            case FormType.Football:
                htmlDoc = 'football.html';
                btn = 'football-btn';
                break;
            case FormType.Marathon:
                htmlDoc = 'marathon.html';
                btn = 'marathon-btn';
                break;
            case FormType.Calvinball:
                htmlDoc = 'calvinball.html';
                btn = 'calvinball-btn';
                break;
        }
        // Load html
        fetch(htmlDoc)
            .then(response => response.text())
            .then(text => document.getElementById('form').innerHTML = text);
        // Set buttons to active
        let elements = document.getElementsByClassName('nav-btn');
        Array.from(elements).forEach(e => {
            e.disabled = false;
        });
        // Set button to disabled
        document.getElementById(btn).disabled = true;
        currentFormType = fromType;
    };
    //#endregion
    loadHtml(FormType.Football);
    //#region Nav button eventListener
    let navBtns = document.getElementsByClassName('nav-btn');
    Array.from(navBtns).forEach(e => {
        e.addEventListener('click', (e) => {
            let botton = e.currentTarget;
            switch (botton.getAttribute('data-nav-btn')) {
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
        });
    });
    //#endregion
    const outElements = () => {
        let output = document.getElementById('out');
        output.innerHTML = '';
        let list = document.createElement('ol');
        results.forEach(e => {
            let li = document.createElement('li');
            li.textContent = e.result();
            list.appendChild(li);
        });
        output.appendChild(list);
    };
    document.getElementById('add-btn').addEventListener('click', () => {
        let winner = '';
        let date = new Date(document.getElementById('date').value);
        let newSportRecord;
        switch (currentFormType) {
            case FormType.Football:
                winner = document.getElementById('winner').value;
                let winnerGoal = parseInt(document.getElementById('winner-goal').value);
                let looserGoal = parseInt(document.getElementById('looser-goal').value);
                newSportRecord = new Football_1.Football(winner, date, winnerGoal, looserGoal);
                break;
            case FormType.Marathon:
                winner = document.getElementById('winner').value;
                let runningTime = parseInt(document.getElementById('running-time').value);
                newSportRecord = new Marathon_1.Marathon(winner, date, runningTime);
                break;
            case FormType.Calvinball:
                winner = document.getElementById('winner').value;
                newSportRecord = new Calvinball_1.Calvinball(winner, date);
                break;
        }
        results.push(newSportRecord);
        outElements();
    });
    outElements();
});
