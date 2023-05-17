export class Telefono{
    private _tipo:string;
    private _numero:number;

    public get tipo(){
        return this._tipo;
    }
    public set tipo(value:string){
        this._tipo=value;
    }
    public get numero(){
        return this._numero;
    }
    public set numero(value:number){
        this._numero=value;
    }

    constructor(tipo:string, numero:number){
        this._tipo=tipo;
        this._numero=numero;
    }
}