export class Direccion{
    private _calle: string;
    public get calle(): string{
        return this._calle;
    }
    public set calle(value:string){
        this._calle=value;
    }

    private _numero: number;
    public get numero(): number{
        return this._numero;
    }
    public set numero(value:number){
        this._numero=value;
    }

    private _piso: number;
    public get piso(): number{
        return this._piso;
    }
    public set piso(value:number){
        this._piso=value;
    }

    private _letra: string;
    public get letra(): string {
        return this._letra;
    }
    public set letra(value: string) {
        this._letra = value;
    }
    
    private _CP: number;
    public get CP(): number {
        return this._CP;
    }
    public set CP(value: number) {
        this._CP = value;
    }
    
    private _poblacion: string;
    public get poblacion(): string {
        return this._poblacion;
    }
    public set poblacion(value: string) {
        this._poblacion = value;
    }
    
    private _provincia: string;
    public get provincia(): string {
        return this._provincia;
    }
    public set provincia(value: string) {
        this._provincia = value;
    }

    constructor(calle: string, numero:number, piso:number, letra:string, CP:number, poblacion:string, provincia:string){
        this._calle=calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._CP = CP;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
}