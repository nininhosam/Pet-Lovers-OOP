import Cliente from "./cliente"
import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import Servico from "./servico"
import Venda from "./venda"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private vendas: Array<Venda>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
        this.vendas = []
        // let cliente1 = new Cliente("João", "jao", new CPF("12345678900", new Date(2020, 1, 1)))
        // let cliente2 = new Cliente("pedro", "predo", new CPF("12345678999", new Date(2020, 1, 1)))
        // let cliente3 = new Cliente("beatriz", "bia", new CPF("12345698911", new Date(2020, 1, 1)))
        // let clienteX = new Cliente("x", "x", new CPF("12345678903", new Date(2020, 1, 1)))
        // let pet1 = new Pet("Rexo", "Cachorro", "abc", "Vira-lata", cliente1.getCpf)
        // let pet2 = new Pet("Toto", "Cachorro", "def", "Vira-lata", cliente1.getCpf)
        // let pet3 = new Pet("Luna", "Cachorro", "ghi", "Vira-lata", cliente1.getCpf)
        // cliente1.addPet(pet1)
        // cliente1.addPet(pet2)
        // cliente1.addPet(pet3)
        // let pet4 = new Pet("Luna", "Cachorro", "jkl", "Vira-lata", cliente2.getCpf)
        // let pet5 = new Pet("Luna", "Cachorro", "mno", "Vira-lata", cliente3.getCpf)
        // cliente2.addPet(pet4)
        // cliente3.addPet(pet5)
        // this.clientes.push(cliente1, clienteX, cliente2, cliente3)
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
    public get getVendas(){
        return this.vendas
    }
}