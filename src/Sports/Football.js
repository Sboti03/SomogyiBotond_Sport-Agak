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
var _Football_goalCountWinner, _Football_goalCountLosser;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Football = void 0;
class Football {
    constructor(winner, date, goalCountWinner, goalCountLooser) {
        _Football_goalCountWinner.set(this, void 0);
        _Football_goalCountLosser.set(this, void 0);
        this.winner = winner;
        this.date = date;
        __classPrivateFieldSet(this, _Football_goalCountWinner, goalCountWinner, "f");
        __classPrivateFieldSet(this, _Football_goalCountLosser, goalCountLooser, "f");
    }
    result() {
        return `Football match: ${__classPrivateFieldGet(this, _Football_goalCountWinner, "f")}-${__classPrivateFieldGet(this, _Football_goalCountLosser, "f")}`;
    }
}
exports.Football = Football;
_Football_goalCountWinner = new WeakMap(), _Football_goalCountLosser = new WeakMap();
