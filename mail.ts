export class Mail{
    private _tipo:string;
    private _direccion:string;

    public get tipo(){
        return this._tipo;
    }

    public set tipo(value: string){
        this._tipo=value;
    }
    public get direccion(){
        return this._direccion;
    }

    public set direccion(value: string){
        this._direccion=value;
    }

    constructor(tipo:string, direccion:string){
        this._tipo = tipo;
        this._direccion = direccion;
    }
}