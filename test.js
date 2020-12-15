"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var diesel_1 = require("./models/Moteur/Diesel/diesel");
var electrique_1 = require("./models/Moteur/Electrique/electrique");
var essence_1 = require("./models/Moteur/Essence/essence");
var stationEssence_1 = require("./models/StationEssence/stationEssence");
var camions_1 = require("./models/vehicule/Camions/camions");
var moto_1 = require("./models/vehicule/Moto/moto");
var voiture_1 = require("./models/vehicule/Voiture/voiture");
var essence = new essence_1.MoteurEssence(240, 25000);
var electrique = new electrique_1.MoteurElectrique(220, 16000);
var diesel = new diesel_1.MoteurDiesel(240, 55000);
var voiture = new voiture_1.Voiture("Toyota", "rouge", 16000, electrique, 0);
var camion = new camions_1.Camion("Chevrolet", "gris metalise", 35000, diesel, stationEssence_1.StationEssence.PrixEssence());
var moto = new moto_1.Moto("Henderson", "noir", 12000, essence, stationEssence_1.StationEssence.PrixDiesel());
console.log(voiture.define("voiture"));
console.log(camion.define("camion"));
console.log(moto.define("moto"));
//# sourceMappingURL=test.js.map