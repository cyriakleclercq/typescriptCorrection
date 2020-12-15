import { Moteur } from "../../Moteur/Moteur";
import { Vehicule } from "../vehicule";

export class Moto extends Vehicule {

    constructor(marque: string, couleur: string, prix: number, moteur: Moteur, carburant: number) {
        super(marque, couleur, prix, moteur, carburant)
    }
}