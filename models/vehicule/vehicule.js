"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicule = void 0;
var Vehicule = /** @class */ (function () {
    function Vehicule(ma, c, p, m, ca) {
        this.marque = ma;
        this.couleur = c;
        this.prix = p;
        this.moteur = m;
        this.carburant = ca;
    }
    Object.defineProperty(Vehicule.prototype, "Marque", {
        get: function () {
            return this.marque;
        },
        set: function (ma) {
            this.marque = ma;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "Couleur", {
        get: function () {
            return this.couleur;
        },
        set: function (c) {
            this.couleur = c;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "Prix", {
        get: function () {
            return this.prix;
        },
        set: function (p) {
            this.prix = p;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "Moteur", {
        get: function () {
            return this.moteur;
        },
        set: function (m) {
            this.moteur = m;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "Carburant", {
        get: function () {
            return this.carburant;
        },
        set: function (c) {
            this.carburant = c;
        },
        enumerable: false,
        configurable: true
    });
    Vehicule.prototype.define = function (param) {
        return "le v\u00E9hicule " + param + " est de marque " + this.marque + ", est de couleur " + this.couleur + ", co\u00FBte " + this.prix + " \u20AC. Peut rouler \u00E0 " + this.moteur.Vitesse + " km/h et \u00E0 " + this.moteur.Kilometrage + " au kilometrage. Le prix au litre de son carburant est de " + this.carburant + " \u20AC. \n";
    };
    return Vehicule;
}());
exports.Vehicule = Vehicule;
//# sourceMappingURL=vehicule.js.map