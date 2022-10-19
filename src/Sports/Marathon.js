"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Marathon_instances, _Marathon_getMinAndSec;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marathon = void 0;
class Marathon {
    constructor(winner, date, runnedTime) {
        _Marathon_instances.add(this);
        this.winner = winner;
        this.date = date;
        this.runnedTime = runnedTime;
    }
    result() {
        return `Marathon: ${__classPrivateFieldGet(this, _Marathon_instances, "m", _Marathon_getMinAndSec).call(this)}`;
    }
}
exports.Marathon = Marathon;
_Marathon_instances = new WeakSet(), _Marathon_getMinAndSec = function _Marathon_getMinAndSec() {
    let secs = this.runnedTime % 60;
    let mins = (this.runnedTime - secs) / 60;
    return `${mins} min ${secs} s`;
};
