import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getConsumoQty(): number {
        return this.produtosConsumidos.length + this.servicosConsumidos.length;
    }
    public get getConsumoValor(): number {
        let valor = 0;
        this.produtosConsumidos.forEach(produto => {
            valor += produto.preco;
        });
        this.servicosConsumidos.forEach(servico => {
            valor += servico.preco;
        });;
        return valor;
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }
    public addPet(pet: Pet){
        this.pets.push(pet)
    }
    public delPet(pet: Pet){
        this.pets.splice(this.pets.indexOf(pet), 1)
    
    }
    public addProdutoConsumido(produto: Produto){
        this.produtosConsumidos.push(produto)
    }
    public addServicoConsumido(servico: Servico){
        this.servicosConsumidos.push(servico)
    }
    public deleteProdutoConsumido(produto: Produto){
        this.produtosConsumidos.splice(this.produtosConsumidos.indexOf(produto), 1);
    }
    public deleteServicoConsumido(servico: Servico){
        this.servicosConsumidos.splice(this.servicosConsumidos.indexOf(servico), 1);
    }
}