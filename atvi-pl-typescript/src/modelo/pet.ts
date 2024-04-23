import CPF from "./cpf";

export default class Pet {
    private static currentId = 1;
    private nome: string
    private tipo: string
    private raca: string
    private genero: string
    private id!:number
    private dono: CPF;

    constructor(nome: string, raca: string, genero: "m" | "M" | "f" | "F", tipo: string, dono: CPF) {
        this.id = Pet.currentId++;
        this.nome = nome
        this.raca = raca
        this.genero = genero.toUpperCase()
        this.tipo = tipo
        this.dono = dono;
    }

    public get getId(){return this.id}
    public get getDono(){return this.dono}

    public get getNome(){return this.nome}
    public setNome(nome: string): void {
        this.nome = nome
    }
    public get getRaca(){return this.raca}
    public setRaca(raca: string): void {
        this.raca = raca
    }
    public get getGenero(){return this.genero}
    public setGenero(genero: string): void {
        this.genero = genero
    }
    public get getTipo(){return this.tipo}
    public setTipo(tipo: string): void {
        this.tipo = tipo
    }
}