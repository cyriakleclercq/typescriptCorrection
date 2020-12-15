export class Moteur {
    private vitesse: number;
    private kilometrage: number;

    constructor(v: number, k: number) {
        this.vitesse = v;
        this.kilometrage = k
    }


    public set Vitesse(v: number) {
        this.vitesse = v;
    }


    public get Vitesse(): number {
        return this.vitesse
    }

    public set Kilometrage(v: number) {
        this.kilometrage = v;
    }


    public get Kilometrage(): number {
        return this.kilometrage
    }


}