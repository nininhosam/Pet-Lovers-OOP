export default class Produto {
    private static currentId = 1;
    public id!:number
    public nome!: string
    public preco!: number
    public consumoTotal!: number

    constructor(nome: string, preco: number) {
        this.id = Produto.currentId++;
        this.nome = nome
        this.preco = preco
        this.consumoTotal = 0;
    }
}