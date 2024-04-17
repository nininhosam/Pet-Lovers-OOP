import CPF from "./cpf";

export default class Pet {
    private static currentId = 1;
    private nome: string
    private tipo: string
    private raca: string
    private genero: string
    private id!:number
    private dono: CPF;

    constructor(nome: string, raca: string, genero: string, tipo: string, dono: CPF) {
        this.id = Pet.currentId++;
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.dono = dono;
    }

    public get getId(){return this.id}
    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}
    public get getDono(){return this.dono}
}