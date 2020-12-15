import { Moteur } from "../Moteur/Moteur";

export class Vehicule {
    private marque: string
    private couleur: string
    private prix: number
    private moteur: Moteur
    private carburant: number

    constructor(ma: string, c: string, p: number, m: Moteur, ca: number) {
        this.marque = ma
        this.couleur = c
        this.prix = p
        this.moteur = m
        this.carburant = ca
    }

    public set Marque(ma: string) {
        this.marque = ma;
    }

    public get Marque(): string {
        return this.marque
    }

    public set Couleur(c: string) {
        this.couleur = c;
    }

    public get Couleur(): string {
        return this.couleur
    }

    public set Prix(p: number) {
        this.prix = p;
    }

    public get Prix(): number {
        return this.prix
    }

    public set Moteur(m: Moteur) {
        this.moteur = m;
    }    

    public get Moteur(): Moteur {
        return this.moteur
    }

    public set Carburant(c: number) {
        this.carburant = c;
    }

    public get Carburant(): number {
        return this.carburant
    }

    public define(param: string) {
        return `le véhicule ${param} est de marque ${this.marque}, est de couleur ${this.couleur}, coûte ${this.prix} €. Peut rouler à ${this.moteur.Vitesse} km/h et à ${this.moteur.Kilometrage} au kilometrage. Le prix au litre de son carburant est de ${this.carburant} €. \n`
    }
}