"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Calvinball_balls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calvinball = void 0;
class Calvinball {
    constructor(winner, date) {
        _Calvinball_balls.set(this, void 0);
        if (winner === 'Calvin' || winner === 'Hobbes') {
            this.winner = winner;
            this.date = date;
            __classPrivateFieldSet(this, _Calvinball_balls, Math.floor(Math.random() * 91) + 10, "f");
        }
        else {
            throw new SyntaxError('Winner only could be "Calvin" or "Hobbes" ');
        }
    }
    result() {
        return `Calvinball: ${__classPrivateFieldGet(this, _Calvinball_balls, "f")}`;
    }
}
exports.Calvinball = Calvinball;
_Calvinball_balls = new WeakMap();
