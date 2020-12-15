import { MoteurDiesel } from "./models/Moteur/Diesel/diesel";
import { MoteurElectrique } from "./models/Moteur/Electrique/electrique";
import { MoteurEssence } from "./models/Moteur/Essence/essence";
import { StationEssence } from "./models/StationEssence/stationEssence";
import { Camion } from "./models/vehicule/Camions/camions";
import { Moto } from "./models/vehicule/Moto/moto";
import { Voiture } from "./models/vehicule/Voiture/voiture";

let essence = new MoteurEssence(240, 25000);
let electrique = new MoteurElectrique(220, 16000);
let diesel = new MoteurDiesel(240, 55000);

let voiture = new Voiture("Toyota", "rouge", 16000, electrique, 0);
let camion = new Camion("Chevrolet", "gris metalise", 35000, diesel, StationEssence.PrixEssence());
let moto = new Moto("Henderson", "noir", 12000, essence, StationEssence.PrixDiesel());

console.log(voiture.define("voiture"));
console.log(camion.define("camion"));
console.log(moto.define("moto"));


