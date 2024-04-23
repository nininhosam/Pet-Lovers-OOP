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
        
        let cliente1 = new Cliente("João", "jao", new CPF("12345678900", new Date(2020, 1, 1)))
        let cliente2 = new Cliente("pedro", "predo", new CPF("12345678999", new Date(2020, 1, 1)))
        let cliente3 = new Cliente("beatriz", "bia", new CPF("12345698911", new Date(2020, 1, 1)))
        let clienteX = new Cliente("x", "x", new CPF("12345678903", new Date(2020, 1, 1)))
        let pet1 = new Pet("Rexo", "Cachorro", "M", "Vira-lata", cliente1.getCpf)
        let pet2 = new Pet("Toto", "Cachorro", "M", "Vira-lata", cliente1.getCpf)
        let pet3 = new Pet("Gana", "Cachorro", "F", "Vira-lata", cliente1.getCpf)
        cliente1.addPet(pet1)
        cliente1.addPet(pet2)
        cliente1.addPet(pet3)
        let pet4 = new Pet("Vida", "Cachorro", "F", "Vira-lata", cliente2.getCpf)
        let pet5 = new Pet("Luna", "Cachorro", "F", "Vira-lata", cliente3.getCpf)
        cliente2.addPet(pet4)
        cliente3.addPet(pet5)
        this.clientes.push(cliente1, clienteX, cliente2, cliente3)
        let prod1 = new Produto("Ração pequena", 20)
        let prod2 = new Produto("Ração grande", 200)
        let prod3 = new Produto("Shampoo", 15)
        this.produtos.push(prod1, prod2, prod3);
        let serv1 = new Servico("Banho", 50)
        let serv2 = new Servico("Tosa", 80)
        let serv3 = new Servico("Vacina", 200)
        this.servicos.push(serv1, serv2, serv3);
        let venda1 = new Venda(cliente1, pet2, [{elemento: prod1, qty: 2}, {elemento: prod3, qty: 9}, {elemento: serv2, qty: 4}])
        let venda2 = new Venda(cliente2, pet4, [{elemento: prod3, qty: 3}])
        let venda3 = new Venda(cliente2, pet4, [{elemento: prod2, qty: 10}])
        this.vendas.push(venda1, venda2, venda3);
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