"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moteur = void 0;
var Moteur = /** @class */ (function () {
    function Moteur(v, k) {
        this.vitesse = v;
        this.kilometrage = k;
    }
    Object.defineProperty(Moteur.prototype, "Vitesse", {
        get: function () {
            return this.vitesse;
        },
        set: function (v) {
            this.vitesse = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Moteur.prototype, "Kilometrage", {
        get: function () {
            return this.kilometrage;
        },
        set: function (v) {
            this.kilometrage = v;
        },
        enumerable: false,
        configurable: true
    });
    return Moteur;
}());
exports.Moteur = Moteur;
//# sourceMappingURL=Moteur.js.map